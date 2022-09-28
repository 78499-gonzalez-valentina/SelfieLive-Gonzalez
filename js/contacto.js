const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const consulta = document.getElementById("consulta")
const btnEnviar = document.getElementById("btnEnviar")
const btnLimpiar = document.getElementById("btnLimpiar")

function guardarDatos() {
    
    localStorage.setItem("nombre",nombre.value) 
    localStorage.setItem("email",email.value)
    localStorage.setItem("consulta",consulta.value)

}

btnEnviar.addEventListener("click",guardarDatos)
btnLimpiar.addEventListener("click",limpiarCampos)

function limpiarCampos(){
    nombre.value = ""
    email.value = ""
    consulta.value = ""
}

btnLimpiar.addEventListener("click", limpiarCampos)

