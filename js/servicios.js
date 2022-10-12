const inputFiltrar = document.getElementById("buscarServicio")
// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const URL = "../assets/bbdd/servicios.json"
let services = []
let contenidoHTML = ""
const servicios =  []

const mostrarError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const cargarContenido  = async ()=> {
    let container = document.querySelector('#container');
    try {
        const response = await fetch(URL)
        const data = await response.json()
              services = data 
              services.forEach(serv => {contenidoHTML += cargarServicios(serv)})
              servicios.push(...data)
    } 
    catch (error) {
        contenidoHTML += mostrarError()
    }
    finally {
        container.innerHTML = contenidoHTML
    }
}

function cargarServicios(serv){
    return `<div class= "card">
                <img class="img" src="${serv.image}" alt="${serv.name}">
                <h5>${serv.id}. ${serv.name}</h5>
                <h6>$${serv.price}</h6>
                <button class="learn-more" id="${serv.id}">Agregar al carrito</button>
            </div>
    `
}

cargarContenido()


// function cargarServicios(array){
//     let container = document.querySelector('#container');
//     console.log('container: ', container);
//     let fila = ""
//         array.forEach(serv => {
//             let div = document.createElement('div');
//             div.setAttribute('class', 'card');
//             div.innerHTML = `
//                 <img class="img" src="${serv.image}" alt="${serv.name}">
//                 <h5>${serv.id}. ${serv.name}</h5>
//                 <h6>$${serv.price}</h6>
//                 <button class="learn-more" id="${serv.id}">Agregar al carrito</button>
//             `;
//             container.appendChild(div);
              
//         });
   
   
//     }
   

function filtrarServicios() { 
    inputResultado = inputFiltrar.value.trim().toUpperCase()
    if (inputResultado !== "") {
        const resultado = services.filter(servicio => servicio.name.includes(inputResultado))
        container.innerHTML = resultado.map(serv => cargarServicios(serv)).join("")
              
    } 
    else {
        container.innerHTML = services.map(services => cargarServicios(services))
        
    }
}

//A medida que escribimos se ejecute el filtro 
inputFiltrar.addEventListener("keydown", filtrarServicios) 

const eventoEnBotones = () => 
{
    let botones = document.querySelectorAll('.learn-more');
    for (const boton of botones) {
        boton.addEventListener('click', ()=> {agregarAlCarrito(boton.id), toastSwal("Servicio agregado con exito!", "top-end", "success")})
    }
}

eventoEnBotones()

function agregarAlCarrito(id){
    const servicio = carrito.find(serv => serv.id == id)
    if(servicio){
        //si ya esta en el carrito
        servicio.quantity++;
    }
    else{
        //si no esta en el carrito se lo agrega
        const servicio = servicios.find(serv => serv.id == id)
        
        let newServ ={
            id: servicio.id,
            name: servicio.name,
            price: servicio.price,
            image : servicio.image,
            quantity: 1
        }
        carrito.push(newServ)
        
       
    }

    
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

