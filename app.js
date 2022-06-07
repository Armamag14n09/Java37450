//const numeroIngresado = Number(prompt('Ingrese un numero'))
//let numero1=0;
//let numero2=1
//let numero3=0

//for(let contador=0; contador<40; contador++){
   
  //  if(contador% 2===0){
        //console.log(contador +"Numero!!")
    //    continue
    //}
    //console.log(contador)
//} 

//console.log("Fin del programa")

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
                 //alert("Bienvenido "+ usuario +" a la clse de JS")
                 //holaMundo()
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
               //console.log("Bienvenido " + comprador)
            if (edad < 18){
                alert("Usted no puede comprar articulos Gamer!")
            }else {
                alert("Bienvenido, que desea comprar?")
            }
}
                  
        
    //let edad = Number (prompt("Ingrese nombre de Usuario"))
        
// evaluarEdad(edad)

