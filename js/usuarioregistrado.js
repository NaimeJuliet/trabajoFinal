import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";


// Paso1. para registrar a una persona en su app
let botonIngresar=document.getElementById("botonIngresar")

//1.1 creo una  referencia global a la ventana modal
let modalIngresar=new bootstrap.Modal(document.getElementById('modalIngresar'))
let mensajeingresar=document.getElementById("mensajeingresar")


botonIngresar.addEventListener("click", function(event){
    event.preventDefault()

    //obtener el valor de cada input del formulario

    let email=document.getElementById("cajaemail").value
    let password=document.getElementById("cajapassword").value


const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in
const user = userCredential.user;
    // ...
    mensajeingresar.textContent="Exito en su registro. Bienvenido "
    modalIngresar.show()
    console.log("todo bn papa")
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    mensajeingresar.textContent="Bienvenido "
    modalIngresar.show()
    console.log("ok")
});
})