
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