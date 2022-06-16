
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
infoUsuario()

function evaluarEdad(edad){
            if (edad < 18){
                alert("Usted no puede comprar articulos Gamer!")
            }else {
                alert("Bienvenido, que desea comprar?")
            }
}

