const btnEnviar = document.getElementById("btnEnviar")
const btnCerrar = document.getElementById("btnCerrar")

const formClase = document.getElementById("formClase")
const modal = document.getElementById("myModal")


formClase.addEventListener('submit', e => {
    e.preventDefault()
    // const email = document.getElementById('email')
    // const apellido = document.getElementById('apellido')
    
    // if(email.value.length == 0){
    //     alert("El campo Email no puede estar vacío")
    //     return
    // }

    // if(apellido.value.length == 0){
    //     alert("El campo Apellido no puede estar vacío")
    //     return
    // }

    modal.style.display = "block";
})

btnCerrar.addEventListener('click', () => {
    modal.style.display = "none"
})

window.onclick = function (event) {

    // SI LO PONGO, CUANDO SALE EL MODAL, TE DEJA SALIR HACIENDO CLICK EN CUALQUIER PARTE, O CON ESCAPE
    
    // if (event.target == modal) {
    //     modal.style.display = "none";
    // }
}


