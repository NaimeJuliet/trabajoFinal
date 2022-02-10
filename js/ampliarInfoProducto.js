export function AmpliarInfoProducto(event){

    let producto={}
    
    if(event.target.classList.contains("btn")){
     
    producto={
        foto:event.target.parentElement.querySelector("img").src, 
        nombre:event.target.parentElement.querySelector("h2").textContent,
        precio:event.target.parentElement.querySelector("h5").textContent,
        descripcion:event.target.parentElement.querySelector("h7").textContent,
        
    }

    //mostramos los datos del producto en el modal y finalmente lo retornamos
    let etiquenaNombreProducto=document.getElementById("nombreProducto")
    etiquenaNombreProducto.textContent=producto.nombre

    let etiquetaPrecioProducto=document.getElementById("precioProducto")
    etiquetaPrecioProducto.textContent=producto.precio

    let etiquetaImagenProducto=document.getElementById("imagenProducto")
    etiquetaImagenProducto.src=producto.foto

    let etiquetadescripcionProducto=document.getElementById("descripcionProducto")
    etiquetadescripcionProducto.textContent=producto.descripcion

    

    return (producto)

    }
}