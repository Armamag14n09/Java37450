/*
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
evaluarEdad(edad)

let producto1= prompt('Cuantidad de Mouses')
let producto2= prompt('Cuantidad de Teclados')
let producto3= prompt('Cuantidad de Monitores')
console.log("Nombre: " + nombre)
console.log("Edad: " + edad + " años")

console.log("Cursando: " + curso)
console.log("Mouse: "+ producto1)
console.log("Teclados: " + producto2)
console.log("Monitores: " + producto3)

   function multiplicar(num1, num2 ){
    return num1 * num2
}
function sumar(num1, num2, num3){
    let suma = num1 + num2 + num3
    return suma
}

    console.log("Total Mouses $" + producto1*125),
    console.log("Total Teclados $" + producto2*200)
    console.log("Total Monitores $" + producto3*550)

let resultado = sumar(producto1*125, producto2*200, producto3*550)
console.log(resultado)
    alert("Total a pagar es $"+resultado)
}

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
infoUsuario()
agregarProducto()
*/

/*const titulo = document.getElementById("titulo")
titulo.className = "green font-big"
const textElement = document.getElementById("texto")

console.log(titulo)
//console.log(textElement)
textElement.style.fontSize = "20px "

textElement.className = "text bold blue"
const listItems = document.getElementsByClassName('list-item')

console.log(listItems)
*/

const usuarios = ["Francisco", "Luis", "Marco","Enzo"]

const usuariosList = document.getElementById('usuarios-list')

usuarios.forEach((usuarios) =>{ 
    const li = document.createElement('li')
    li.innerText = usuarios
    li.className = "red"

    usuariosList.append(li)

})

const productos = [
    {
        id: 1,
        nombre: "Teclado RGB",
        precio: 550,
        img: "https://m.media-amazon.com/images/I/619MHX-XijL._AC_SL1000_.jpg" 
    },
    {
        id: 2,
        nombre: "Mouse RGB",
        precio: 550,
        img: "https://m.media-amazon.com/images/I/619MHX-XijL._AC_SL1000_.jpg" 
    },
    {
        id: 3,
        nombre: "Bocinas RGB",
        precio: 550,
        img: "https://m.media-amazon.com/images/I/619MHX-XijL._AC_SL1000_.jpg" 
    },
    {
        id: 4,
        nombre: "MosePad RGB",
        precio: 550,
        img: "https://m.media-amazon.com/images/I/619MHX-XijL._AC_SL1000_.jpg" 
    }
]

const producto ={
        id: 4,
        nombre: "MosePad RGB",
        precio: 550,
        img: "https://via.placeholder.com/250" 
}

const productsContainer = document.getElementById('products-container')

const div =document.createElement('div')

div.innerHTML = `<h4>${producto.nombre}</h4>
                <img src=${producto.img}/>
                <p>Precio: $ ${producto.precio}</p>
                <hr>
                `

productsContainer.append(div)






/*
const li =document.createElement('li')
li.className="red"
li.innerText = usuarios[0]

usuariosList.append(li)

*/