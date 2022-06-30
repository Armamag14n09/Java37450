const usuario1LS = localStorage.getItem('user')

const title = document.querySelector('#titulo-user')

title.innerText = `Bienvenido ${usuario1LS}`


const productos2JSON = localStorage.getItem('productos2')
const productos2 = JSON.parse( productos2JSON)

console.log(productos2JSON)
console.log(productos2)

document.querySelector('#producto-card').innerHTML = `
                        <h4>${productos2.nombre } </h4>
                        <h4>Precio: ${productos2.precio} </h4>

`
