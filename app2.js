const usuario1LS = localStorage,getItem('user')

const title = document.querySelector('#titulo-user')

title.innerText = `Bienvenido ${usuario1LS}`

const productos2JSON = localStorage.getItem(productos)
const productos = JSON.parse( productos2JSON )

console.log(productos2JSON)
console.log(productos)

document.querySelector('#producto-card').innerHTML = `
            <h4>${producto.nombre}</h4>
            <h6>${producto.precio}</h6>
`
