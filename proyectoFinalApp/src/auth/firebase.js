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
// eslint-disable-next-line no-unused-vars
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

export function crearProducto(nombre, imagen, precio, descripcion){
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (res, rej) => {
        try{
            const docRef = await addDoc(collection(db, "productos"), {
                nombre: nombre,
                imagen: imagen,
                precio: precio,
                descripcion: descripcion
            });

            console.log("Docuemnto written with ID: ", docRef.id);
            res(docRef)
        } catch(e) {
            console.error("Error adding document: ", e)
            rej(e)
        }
    });
}

export function obtenerProductos(){
    return(
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (res, rej) => {
            try{
                const querySnapshot = await getDocs(collection(db, 'productos'));
                console.log(querySnapshot, "respuesta al getDocs");
                

                const resultados = querySnapshot.docs.map(doc => {
                    console.log(doc, "doc sin ejecutar metodo data()");
                    
                    const data = doc.data();
                    console.log(data, "doc con data extraido");
                    
                    return{
                        id: doc.id,
                        name: data.name,
                        imagen: data.imagen,
                        precio: data.precio,
                        descripcion: data.descripcion
                    };
                });

                res(resultados)
            } catch(error) {
                console.error("Error al obtener los productos: " + error)
                rej(error)
            }
        })
    );
}