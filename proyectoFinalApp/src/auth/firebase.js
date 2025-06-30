// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   // Para inicializar la conexión con Firebase
// Funciones de autenticación:
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { dispararSweetBasico } from "../assets/SweetAlert";     // función personalizada para mostrar alertas
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
export function crearUsuario(email, password, naviagte){

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        // cuando el usuario se haya podido registrar o crear
        // muestra las credenciales en consola
        // console.log("Credenciales: ", userCredential);

        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        // console.log(user);

        // ...

        dispararSweetBasico("Éxito", "Registro exitoso", "success", "Aceptar")
        .then(() => {
            naviagte("/login");  // redirigir después de aceptar
        });

    })
    .catch((error) => {
        // console.log(error.code, error.message);
        
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
        // ..

        // Mensaje de error con alerta
        dispararSweetBasico("Error", error.message, "error", "Aceptar");
    });
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
                rej(error.message)
                
                
                // En Fracaso: Rechaza la Promise con el objeto error
                // Paso a error como dato para que sea utilizado
            });
        })

    )


}