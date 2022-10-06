const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0;


let carritoHtml = (serv) =>{
    let body = `<tr class="listaCompra">
                    <td>${serv.name}</td>
                    <td>Precio: $ ${serv.price}</td>
                    <td>Cantidad: ${serv.quantity}</td>
                    <td>Subtotal: $ ${serv.price * serv.quantity}</td>
                    <td><button class= "borrar" id="btn${serv.id}">Quitar</button></td>
                </tr>`
    total += serv.price * serv.quantity
    return body
            
} 

function recuperoCarrito(carrito) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
    tabla.innerHTML = carrito.map(serv => carritoHtml(serv))
    document.getElementById("total").innerHTML = "Total: " + " "+ total  

}

const mostrarCarrito = (carrito) => {
    if (carrito.length == 0){
        
        return document.getElementById("tbody").innerHTML = "El carrito esta vacio!"
    }
    else{
        recuperoCarrito(carrito)
    }

}

mostrarCarrito(carrito)

function eliminarServicio(array, id)
 {
    
   //Buscar el indice del objeto con el id en el array
    const objIndex = array.findIndex((obj) => obj.id == id);
    array.splice(objIndex, 1);

    return array; 
 }


 function eliminarServicioDelCarrito(id)
 {
    total = 0
    innerHTML = ""
    let newCarrito = eliminarServicio(carrito, id)
    localStorage.setItem("carrito", JSON.stringify(newCarrito))
    recuperoCarrito(newCarrito)
    eliminarEnBotones()
    if(carrito.length == 0){
        return document.getElementById("tbody").innerHTML = "El carrito esta vacio!"
        document.getElementById('total').style.display = 'none'
    }
     
 }



 function eliminarEnBotones()
 {  
     carrito.forEach(serv => {
        const borrar = document.querySelector(`#btn${serv.id}`)
        borrar.addEventListener("click",  ()=> eliminarServicioDelCarrito(`${serv.id}`))
     })
     
 }
 eliminarEnBotones()