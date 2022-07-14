/*
function usuario(){ 
    let usuario= prompt("Intodusca el password del Admin")
    while (true){
        if (usuario === 'Armando'){ 
        break
    }
        alert("Password Incorrecto!")
        usuario=prompt('Intodusca password del Admin')
         }
}
usuario()
localStorage.removeItem('user')
//function infoUsuario(){
let usuario1
const usuario1LS = localStorage.getItem('user')
if (usuario1LS){
    usuario1 = usuario1LS
} else{

    const user = {
        nombre: (usuario),
        edad: 15
    }

    const mensaje = user.edad >= 18 ? "Puede comprar" : "No puede comprar"
    const invalido = user.edad < 18 && "El usuario es menor de edad"
    console.log(invalido)

    const registroIngreso = usuario.edad >= 18 && new Date ()
    console.log(registroIngreso)

    usuario1 = prompt('Ingrese su Nombre')
    localStorage.setItem("user", usuario1)
const title = document.querySelector("#titulo-usuario")
title.innerText = `Bienvenido: ${usuario1}`
console.log(usuario1LS)

let edad= prompt('Ingrese su Edad:')
evaluarEdad(edad)

console.log("Nombre: " + usuario1)
console.log("Edad: " + edad + " años")


function evaluarEdad(edad){
    if (edad < 18){
        alert("Usted no puede comprar articulos Gamer!")
    }else {
        alert("Bienvenido, que desea comprar?")
    }
}

const usuario2 = {
    nombre: (usuario),
    años: {
        edad: " "
    }
}
console.log( usuario2?.años?.react || "Ingrese su edad")
console.log( usuario2?.años?.edad || "Ingrese su edad")
}

const btnSwall = document.querySelector('#enviar')

btnSwall.addEventListener('click', () => {

swal.fire({
    title: 'Antes de enviar verifique sus datos?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    denyButtonText: `Corregir`,
  }).then((result) => {
    // Read more about isConfirmed, isDenied below 
    if (result.isConfirmed) {
      Swal.fire('Enviado!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('No se a enviado los datos', '', 'info')
    }
  })
})
const btnToast = document.querySelector('#toast')

btnToast.addEventListener('click', () => {

Toastify({
    text: 'Bienvenido',
    duration: 2500
}) .showToast()
})
*/

        // query param "q" = String
const url1 = 'https://www.coderhouse.com/search?q=luis&limit=20'

const busqueda = 'pikachu'
const url2 =`https://pokeapi.co/api/v2/pokemon/${busqueda}`

console.log(url2)

const listado = document.querySelector('#listado')

fetch('https://jsonplaceholder.typicode.com/posts' )
    .then((resp) => resp.json())
    .then((data) => {
    
        data.forEach(post => {
            
            const {title, body} = post

        listado.innerHTML += `
        <li>   
            <h4>${title}</h4>
            <p>${body}</p>
            <hr>
        </li>    
        `     
        })
    
    })
    .catch((error) =>{
        console.log(error)
    })