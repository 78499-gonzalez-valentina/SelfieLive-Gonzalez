const inputFiltrar = document.getElementById("buscarServicio")
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const URL = "../assets/bbdd/servicios.json"
let services = []
let contenidoHTML = ""
let servicios = [
    {
        id:1,
        name: "SELFIETAG",
        price: 2000,
        image: "../assets/imag/serv1.png"
    },
    {
        id:2,
        name: "CABINA DE FOTOS",
        price: 5000,
        image: "../assets/imag/cabinafinal.jpg"
    },
    {
        id:3,
        name: 'SOUVENIR',
        price: 300,
        image: "../assets/imag/souvenir.png"
    },
    {
        id:4,
        name: 'ALBUM DE FOTOS',
        price: 3500,
        image: "../assets/imag/serv5.jpg"
    },
    {
        id:5,
        name: "TARJETAS",
        price: '250',
        image: "../assets/imag/serv4.png" 
    },
    {
        id:6,
        name: "CUADROS",
        price: '3000',
        image: "../assets/imag/serv3.jpg"
    },
    {
        id:7,
        name: "IMANES",
        price: '600',
        image: "../assets/imag/imanes.jpg"
    }
    
]

const mostrarError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const cargarContenido  = async ()=> {
    debugger
    let container = document.querySelector('#container');
    try {
        const response = await fetch(URL)
        const data = await response.json()
              services = data 
              services.forEach(serv => {contenidoHTML += cargarServicios(serv)})
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
        const resultado = servicios.filter(servicio => servicio.name.includes(inputResultado))
        container.innerHTML = resultado.map(serv => cargarServicios(serv)).join("")
              
    } 
    else {
        container.innerHTML = services.map(services => cargarServicios(services))
        
    }
}

//A medida que escribimos se ejecute el filtro 
debugger
inputFiltrar.addEventListener("keydown", filtrarServicios) 

const eventoEnBotones = () => 
{
    debugger
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
