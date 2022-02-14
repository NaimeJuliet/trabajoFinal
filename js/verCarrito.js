export function verCarrito(carrito){
    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))

    let contenedor=document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""

    if(carrito.length==0){

        
        let vacio=document.createElement("div")
        vacio.classList.add("row")

        let carritovacio=document.createElement("img")
        carritovacio.classList.add("fluid")
        carritovacio.classList.add("w-100")
        carritovacio.src="../img/vacio.png"
        vacio.appendChild(carritovacio)
        contenedor.appendChild(vacio)
    
    }
    else 
    {
    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")

        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid")
        fotoProducto.classList.add("w-100")
        fotoProducto.src=producto.foto

        let nombreProducto=document.createElement("h5")
        nombreProducto.textContent=producto.nombre

        let precioProducto=document.createElement("h6")
       /* precioProducto.textContent="$"+producto.precio*/
       precioProducto.textContent=("$")+Intl.NumberFormat("de-DE").format(producto.precio)



        let cantidadProducto=document.createElement("h6")
        cantidadProducto.textContent=producto.cantidad+" Und"

        let subtotalProducto=document.createElement("h6")
        subtotalProducto.classList.add("text-center")        
        subtotalProducto.textContent=("$")+Intl.NumberFormat("de-DE").format (producto.cantidad*producto.precio) 

        let separador=document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")


        //padres e hijos 
        columna1.appendChild(fotoProducto)

        columna2.appendChild(nombreProducto)
        columna2.appendChild(precioProducto)
        columna2.appendChild(cantidadProducto)
        columna2.appendChild(subtotalProducto)
        columna2.appendChild(separador)

        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)
        }) 

    } 
    modalVerCarrito.show() 
}

let total=document.getElementById("btntotal")
    total.addEventListener("click", function(){

        let cantidad=0

    carrito.forEach(function(producto){

        cantidad=cantidad + Number(producto.precio*producto.cantidad)
            
        console.log(cantidad)

    })
    total.textContent= ("$")+Intl.NumberFormat("de-DE").format(cantidad)

    let btnUsd=document.getElementById("USD")
    btnUsd.addEventListener("click",function(){

    let cambiar

     cambiar= cantidad/4000

    console.log(cantidad)
    btnUsd.textContent=cambiar +("USD")
    })

})

