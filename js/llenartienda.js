//funcion para llenar dinamicamente la tienda

export function llenartienda(){
   

    let productos=[

        {nombre:"Anillo", precio: 98000, foto:"../img/anillo.jpg" , descripcion:"Anillo chapado en plata con grabado de diario de vampiro, anillo Elena Gilbert con patrón de piedra azul, anillo de recuerdo de luz diurna, tamaño 6-10"},
        {nombre:"Bolsa Tela", precio: 150000, foto:"../img/bolsaTela.jpg" , descripcion:"Bolso Algodón 100%. Modelo CREEENTI.Forro y Bolsillo Interior. 37 * 38 cm. I"},
        {nombre:"Bolsa Tela1", precio: 150000, foto:"../img/bolsaTela1.jpg" , descripcion:"Bolsa compra plegable - Bolsa tela / Producto con licencia oficial"},
        {nombre:"Collar Hope", precio: 90000, foto:"../img/collarhope.jpg" , descripcion:"Hope Mikaelson Legacies - Collar con colgante de escudo familiar para mujer"},
        {nombre:"Dije", precio: 25000, foto:"../img/dije.jpg" , descripcion:"Sterling Silver Vampire Diaries Hope Mikaelson Family Crest Jewelry Pendant Necklace Merchandise"},
        {nombre:"Escudo", precio: 120000, foto:"../img/escudo.jpg" , descripcion:"PARCHE ESCUDO ESCUELA SALVATORE - VAMPIRE DARIES"},     
        
        {nombre:"fundacel", precio: 75000, foto:"../img/fundacel.webp" , descripcion:"Hermosas fundas para celular personalizadas con tematica de el legado"},
        {nombre:"Termo", precio: 50000, foto:"../img/termo.jpg" , descripcion:"Termo ergonómico para llevar tus bedidas con mayor facilidad, aislamiento al vacío con doble pared, fabricado en acero inoxidable y a prueba de fugas, ideal para conservar tus bedidas calientes o frías durante largos periodos de tiempo."},
        {nombre:"Bolsa-termo", precio: 12000, foto:"../img/vasobolsa.jpg" , descripcion:"Si eres fanatico de la tematica de vampiros-lobos-brujas esta bolsa termo es para ti"},
        {nombre:"Vaso", precio: 65000, foto:"../img/vasosalvatore.jpg" , descripcion:"Que mejor que despertar tus mañanas tomando un delicioso cafe en este hermoso vaso"},
    ] 

    
console.log(productos)



//rutina para recorrer el arreglo y crear las tarjetas de cada producto
// 1. crear referencia a un elemento "padre" o "base" donde aclararemos

let fila=document.getElementById("fila")

//2. necesito recorrer un arreglo
productos.forEach(function(produto){

//3. creamos los elementos necesarios para pintar los productos

let columna=document.createElement("div")
    columna.classList.add("col")


let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("p-3")
    imagen.classList.add("h-100")
    imagen.src=produto.foto

    let separador=document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")

    let nombre=document.createElement("h2")
    nombre.classList.add("text-danger")
    nombre.classList.add("fw-bold")
    nombre.classList.add("text-center")
    nombre.classList.add("mx-3")
    nombre.textContent=produto.nombre

    let precio=document.createElement("h5")
    precio.classList.add("text-center")
    precio.classList.add("text-dark")    
    precio.textContent=+produto.precio

    let descripcion=document.createElement("h7")
    descripcion.classList.add("mx-3")
    descripcion.classList.add("invisible")
    descripcion.textContent=produto.descripcion

    let botonAmpliarInfo=document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-3")
    botonAmpliarInfo.classList.add("mb-3")    
    botonAmpliarInfo.textContent=("ver producto")


    //vamos a anclar (poner)(disponer)las etiquetas que acabamos de crear en nuestra base
   
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonAmpliarInfo)
    
      
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})

}
 