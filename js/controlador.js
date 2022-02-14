///importacion  de elemento
import {llenartienda} from "./llenartienda.js"
import {AmpliarInfoProducto}from "./ampliarInfoProducto.js"
import {agregarCarrito}from "./agregarAlCarrito.js"
import {verCarrito}from "./verCarrito.js"

//variables globales de la tienda
let producto={}
let carrito=[]

//llamo a la funcion llenar tienda
llenartienda()

//llamo funcion ampliarInfoProducto
let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))


let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click", function(event){

        producto=AmpliarInfoProducto(event)
        /*if()*/
        modalinfoproducto.show()

    })

    //llamo la funcion agregar al carrito
    let botonAGregarCarrito=document.getElementById("botonAgregarProducto")
    botonAGregarCarrito.addEventListener("click",function(){

        let cantidadProducto=document.getElementById("cantidadProducto").value
        producto.cantidad=cantidadProducto

               

         //agrego el producto al carrito
        carrito.push(producto)
        //Oculto la modal de info producto
        modalinfoproducto.hide()  

        let etiquetaCantidad=document.getElementById("cantidadProducto")
        etiquetaCantidad.value=1
        //llamar la funcion agregarCarrito
        agregarCarrito(carrito)

    })
    //llamo a la funcion verCarrito
    let botonVerCarrito=document.getElementById("botonCarrito")
    botonVerCarrito.addEventListener("click", function(){
      verCarrito(carrito)
    })

    let btnLimpiar=document.getElementById("clean")
    btnLimpiar.addEventListener("click",function(){        
        
        let contenedorModal=document.getElementById("contenedorCarrito")
        contenedorModal.innerHTML=""
        contenedorModal=[]

        let pildora=document.getElementById("pildora")
        pildora.innerHTML=""
        pildora=[]
        
        let borrarTotal=document.getElementById("btntotal")
        borrarTotal.innerHTML="btntotal"
        borrarTotal=[]

        let cambiarUsd=document.getElementById("USD")
        cambiarUsd.innerHTML="USD"
        cambiarUsd=[]

        carrito=[]
        
})