// PASO 0: importo libreria de autenticacion
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"



// Paso1. para registrar a una persona en su app
let botonRegistro=document.getElementById("botonregistro")

//1.1 creo una  referencia global a la ventana modal
let modallogin=new bootstrap.Modal(document.getElementById('modallogin'))
let mensajelogin=document.getElementById("mensajelogin")


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
    mensajelogin.textContent="Exito en su registro. Bienvenido "
    modallogin.show()
    console.log("todo bn papa")
    })
    
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    mensajelogin.textContent=`Error: ${errorCode} : ${errorMessage}`
    modallogin.show()
    console.log("error")
    });



})