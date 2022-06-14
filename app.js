
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
}

productos.push( new Producto (id, nombre, precio) )
//productos.push( { id:id, nombre:nombre, precio:precio })

console.log(productos)  

agregarProducto()
console.log(productos)