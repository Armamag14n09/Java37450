function holaMundo(){
    alert("Hola Mundo!")
}

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

function infoUsuario(){

let nombre= prompt('Ingrese su Nombre')
let edad= prompt('Ingrese su Edad:')
let curso= prompt('Ingrese su Curso')


console.log("Nombre: " + nombre)
console.log("Edad: " + edad + "años")
console.log("Cursando: " + curso)

    evaluarEdad(edad)
}
infoUsuario()

function evaluarEdad(edad){
    if (edad < 18){
        alert("Usted no puede comprar articulos Gamer!")
    }else {
        alert("Bienvenido, que desea comprar?")
    }
}


class Producto{
    constructor(id, nombre, precio){
    this.id = id
    this.nombre = nombre
    this.precio = precio

    }
}

const productos=[
    new Producto(1,'Memoria',550),
    new Producto(2,'Teclado',250),
    new Producto(3,'Mouse',153),
]

function agregarProducto(){
    let id = Number( prompt('Ingrese id del producto') )
    let nombre = prompt('Ingrese nombre del producto')
    let precio = Number( prompt('Ingrese precio del producto') )

    productos.push( new Producto (id, nombre, precio) )
}

//productos.push( { id:id, nombre:nombre, precio:precio })
   
console.log(productos)  

agregarProducto()
