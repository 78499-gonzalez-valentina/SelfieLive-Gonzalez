const btnSuscribir = document.querySelector(".btnSuscribir")
let emailSuscripcion = document.getElementById("Email")

//msj temporal con libreria 
const toastSwal = (mensaje,position,icon, bgcolor, color)=> {
    Swal.fire({
        toast: true,
        title: mensaje,
        timer: 1300,
        icon: icon,
        position: position,  //top-end - top-start - bottom (start & end)
        timerProgressBar: false,
        showConfirmButton: false,
        background: bgcolor,
        color: color,
    })

}

function guardarEmail() {
    localStorage.setItem("Email suscripto", emailSuscripcion.value)
}

btnSuscribir.addEventListener("click", ()=> {toastSwal("Suscripcion exitosa!", "bottom", "success"), guardarEmail(),emailSuscripcion.value = " "} )





