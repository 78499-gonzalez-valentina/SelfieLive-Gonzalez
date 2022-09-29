let eventos = [
    {
        id:1,
        nombre: "IDA - EL VIAJE DE CUPIDO"

    },
    {
        id:2,
        nombre: "BODA IVANA&FEDERICO"

    },
    {
        id:3,
        nombre: "CLINICA DE OJOS"

    },
    {
        id:4,
        nombre: "NISSAN"

    }
]

const inputFiltrar = document.getElementById("buscarEvento")

function filtrarEventos() { 
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = servicios.filter(servicio => servicio.name.includes(inputFiltrar.value))
        container.innerHTML = ""
        container.innerHTML = resultado.map(serv => `<section class = "busqueda">
                                                        <div class = "bus">
                                                            <img class="img" src="${serv.image}" alt="${serv.name}">
                                                            <h5>${serv.id}. ${serv.name}</h5>
                                                            <h6>$${serv.price}</h6>
                                                            <button class="learn-more" id="${serv.id}">Agregar al carrito</button>
                                                        </div>
                                                    </section>
                                                 `).join("")
              
              } 
    else {
        container.innerHTML = " "
        cargarServicios(eventos)
    }
}

//A medida que escribimos se ejecute el filtro 
inputFiltrar.addEventListener("keydown", filtrarEventos) 
