const btnComprar = document.getElementById("btnComprar")

const numero = document.getElementById("numero")
const nomYApe = document.getElementById("nomYApe")
const fecha = document.getElementById("fecha")
const codigo =document.getElementById("codigo")
const dni  =document.getElementById("dni")

const loading = () => `<img src="../assets/imag/carga1.gif" width="30px">`

const confirmarCompra = () =>{
    btnComprar.type = "image" 
    btnComprar.src = "../assets/imag/carga1.gif"
    btnComprar.value = loading()
    if (numero.value == " " || nomYApe.value == " " || fecha.value == "" || codigo.value == " " || dni.value == " "){
        toastSwal("Complete los campos para continuar", "center", "", "#E2DFDE")
        btnComprar.type ="submit"
        btnComprar.value = "Confirmar compra"
    }
    else{
        setTimeout(() => {toastSwal("Compra exitosa! Gracias por confiar en nosotros!", "center", "", "#7EED95") 
        btnComprar.type ="submit"
        btnComprar.value = "Confirmar compra" } , 2000)
        
    }
}

btnComprar.addEventListener("click", confirmarCompra)

