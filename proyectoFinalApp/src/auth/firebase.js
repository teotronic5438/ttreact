// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { dispararSweetBasico } from "../assets/SweetAlert";
// eslint-disable-next-line no-unused-vars
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Segunda parte de documentacion autenticacion con contraseña

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


export function loginEmailPass(email, password, naviagte){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
        console.log("Te logueaste con correo y pass con exito");
        
        // console.log("Credenciales: ", userCredential);
        const user = userCredential.user;
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}