const carrito = JSON.parse(localStorage.getItem("carrito")) || [];



let carritoHtml = (serv) =>{
    return `<tr class="listaCompra">
                    <td>${serv.name}</td>
                    <td>Precio: $ ${serv.price}</td>
                    <td>Cantidad: ${serv.quantity}</td>
                    <td>Subtotal: $ ${serv.price * serv.quantity}</td>
                    <td><button class= "borrar" id="btn${serv.id}">Quitar</button></td>
            </tr>`
} 

function recuperoCarrito(carrito) {
    debugger
    carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
    let total = 0
    tabla.innerHTML = carrito.map(serv => carritoHtml(serv))
                                          
        
}


recuperoCarrito(carrito)

function eliminarServicio(array, id)
 {
    
   //Buscar el indice del objeto con el id en el array
    const objIndex = array.findIndex((obj) => obj.id == id);
    array.splice(objIndex, 1);

    return array; 
 }


 function eliminarServicioDelCarrito(id)
 {
    innerHTML = ""
     let newCarrito = eliminarServicio(carrito, id)
     localStorage.setItem("carrito", JSON.stringify(newCarrito))
     recuperoCarrito(newCarrito)
     
 }



 function eliminarEnBotones()
 {  
    debugger
     carrito.forEach(serv => {
        const borrar = document.querySelector(`#btn${serv.id}`)
        borrar.addEventListener("click",  ()=> eliminarServicioDelCarrito(`${serv.id}`))
     })
     
 }
 eliminarEnBotones()
