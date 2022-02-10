export function agregarCarrito(carrito){
    //crear una referencia a la pildora (push) del carrito
    let pildora=document.getElementById("pildora")
    let cantidad=0
    

    carrito.forEach(function(producto){
        cantidad=cantidad+Number(producto.cantidad)
    })

    pildora.textContent=cantidad
    pildora.classList.remove("invisible")
    console.log(carrito)

}