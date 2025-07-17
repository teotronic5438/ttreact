// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   // Para inicializar la conexión con Firebase
// Funciones de autenticación:
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
// import { dispararSweetBasico } from "../assets/SweetAlert";     // función personalizada para mostrar alertas
// eslint-disable-next-line no-unused-vars
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"


// Objeto con las credenciales de Firebase, cargadas desde variables de entorno (Vite).
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Se inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);



// Segunda parte de documentacion autenticacion con contraseña
// se obtiene el objeto auth para manejar la autenticación
const auth = getAuth();


// la voy a hacer disponible para que pueda usarla cuando quiera
export function crearUsuario(email, password){
    return(
        new Promise((res, rej) => {

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                // cuando el usuario se haya podido registrar o crear
                // muestra las credenciales en consola
                // console.log("Credenciales: ", userCredential);

                const user = userCredential.user;
                // console.log(user);

                // ...

                // dispararSweetBasico("Éxito", "Registro exitoso", "success", "Aceptar")
                // .then(() => {
                //     naviagte("/login");  // redirigir después de aceptar
                // });
                res(user)

            })
            .catch((error) => {
                // console.log(error.code, error.message);
                

                // const errorCode = error.code;
                // // eslint-disable-next-line no-unused-vars
                // const errorMessage = error.message;
                // // ..

                // // Mensaje de error con alerta
                // dispararSweetBasico("Error", error.message, "error", "Aceptar");
                rej(error)
            });

        })
    )

}

// Función que autentica un usuario existente
export function loginEmailPass(email, password){

    // ACA BA EL RETURN 30:03 promesa
    // Devuelve una Promise para manejar el resultado asíncrono
    return(

        new Promise((res, rej) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // console.log("Logueo con correo y pass exitoso!");
                
                // console.log("Credenciales: ", userCredential);
                const user = userCredential.user;
                // console.log(user);
                res(user)
                // En éxito: Resuelve la Promise con el objeto user
                // Paso a user como dato para que sea utilizado
            // ...
            })
            .catch((error) => {
                // console.log(error.code, error.message);
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // rej(error.message)
                rej(error)
                
                // En Fracaso: Rechaza la Promise con el objeto error
                // Paso a error como dato para que sea utilizado
            });
        })

    )


}

/************************
    base de datos
*************************/

// addDoc: Para añadir nuevos documentos a una colección

// collection: Para hacer referencia a una colección en Firestore

// getDocs: Para obtener documentos de una colección

// getFirestore: Para obtener la instancia de Firestore

import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";

//  inicializando el servicio de Firestore
// getFirestore(app) obtiene una instancia de Firestore asociada a tu aplicación Firebase
const db = getFirestore(app)    // db será tu objeto de base de datos principal para interactuar con Firestore

export function crearProducto(producto) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (res, rej) => {
    try {
      const docRef = await addDoc(collection(db, "productos"), {
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
        descripcion: producto.descripcion
      });

      console.log("Documento escrito con ID: ", docRef.id);
      res(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
      rej(e);
    }
  });
}


// export function obtenerProductos() {
//     return new Promise(async (res, rej) => {
//         try {
//             // 1. Intentar obtener productos desde Firebase
//             const productosFirebase = await obtenerProductosFirebase();

//             if (productosFirebase.length > 0) {
//                 setProductos(productosFirebase);
//                 return res(productosFirebase);
//             }

//             // 2. Si Firebase está vacío, obtener desde la API externa
//             const respuesta = await fetch("https://fakestoreapi.com/products");
//             const productosApi = await respuesta.json();

//             // 3. Insertar cada producto en Firebase
//             await Promise.all(
//                 productosApi.map((productoApi) => {
//                     const productoFormateado = {
//                         nombre: productoApi.title,
//                         imagen: productoApi.image,
//                         precio: productoApi.price,
//                         descripcion: productoApi.description,
//                     };
//                     return crearProducto(productoFormateado);
//                 })
//             );

//             // 4. Obtener productos actualizados desde Firebase
//             const productosActualizados = await obtenerProductosFirebase();
//             setProductos(productosActualizados);
//             res(productosActualizados);
//         } catch (error) {
//             console.error("Error en obtenerProductos:", error);
//             rej(error);
//         }
//     });
// }


export function obtenerProductos(){
    return(
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (res, rej) => {
            try{

                // 1. Intentar obtener productos desde Firebase
                const querySnapshot = await getDocs(collection(db, 'productos'));
                // console.log(querySnapshot, "respuesta al getDocs");
                
                const resultados = querySnapshot.docs.map(doc => {
                    // console.log(doc, "doc sin ejecutar metodo data()");
                    
                    const data = doc.data();
                    // console.log(data, "doc con data extraido");
                    
                    return{
                        id: doc.id,
                        nombre: data.nombre,
                        imagen: data.imagen,
                        precio: data.precio,
                        descripcion: data.descripcion
                    };
                });

                if (resultados.length > 0) {
                  return res(resultados);
                }
                
                // Si Firebase está vacío, obtengo datos desde fakestore
                const respuesta = await fetch("https://fakestoreapi.com/products");
                const productosApi = await respuesta.json();
                const productosActualizados = []

                // Inserto cada producto en Firebase
                await Promise.all(
                    productosApi.map((productoApi) => {
                        const productoFormateado = {
                            nombre: productoApi.title,
                            imagen: productoApi.image,
                            precio: productoApi.price,
                            descripcion: productoApi.description,
                        };
                        productosActualizados.append(productoFormateado)
                        return crearProducto(productoFormateado);
                    })
                );
                
                // 4. Obtener productos actualizados desde Firebase
                res(productosActualizados);
            } catch(error) {
                console.error("Error al obtener los productos: " + error)
                rej(error)
            }
        })
    );
}

import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";

export function obtenerProductoPorId(id) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (res, rej) => {
    try {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Documento data: ", docSnap.data());
        
        const data = docSnap.data();
        const producto = {
          id: docSnap.id,
          nombre: data.nombre,
          imagen: data.imagen,
          precio: data.precio,
          descripcion: data.descripcion
        };
        res(producto)
      } else {
        rej(new Error("El producto no existe"));
      }
    } catch (error) {
      console.error("Error al obtener producto por ID:", error);
      rej(error);
    }
  });
}



export function eliminarProducto(id) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (res, rej) => {
    try {
      await deleteDoc(doc(db, "productos", id));
      // console.log(`Producto con ID ${id} eliminado correctamente.`);
      res();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      rej(error);
    }
  });
}



export function actualizarProducto(id, datosActualizados) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (res, rej) => {
    try {
      const docRef = doc(db, "productos", id);
      await updateDoc(docRef, datosActualizados);
      // console.log(`Producto con ID ${id} actualizado correctamente.`);
      res();
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      rej(error);
    }
  });
}
