// PASO 0: importo libreria de autenticacion
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"


// Paso1. para registrar a una persona en su app
let botonRegistro=document.getElementById("botonregistro")
botonRegistro.addEventListener("click", function(event){
    event.preventDefault()

    //obtener el valor de cada input del formulario

    let email=document.getElementById("cajaemail").value
    let password=document.getElementById("cajapassword").value
    

    //validar el formulario

    //agregar la rutina para llevar los datos firebase
    //(hablar con el back)
    const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("todo bn papa")
    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("error")
    });
})