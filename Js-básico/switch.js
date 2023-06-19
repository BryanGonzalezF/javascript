/* let numero= 1;

switch(numero){
    case 1: 
      console.log("Soy un uno")
      break
    case 10:
      console.log("Soy un 10")  
      break
    default:
       console.log("No soy ninguno")   
} */


//Piedra, papel o tijera con switch

let jugador ="piedra";
let pc = "papel";



switch(true){
    case (jugador === "tijera" && pc === "papel"):
        console.log("Gana el jugador!")
        break
    case (jugador === "papel" && pc === "piedra"):
        console.log("Gana el jugador")
        break
    case (jugador === "piedra" && pc === "tijera"):
        console.log("Gana el jugador")
        break
    case (jugador === pc):
        console.log("Es un empate")
        break
    default:
        console.log("Gana la Pc!")    
    
}


/* Ejercicio playground de platzi */

function soluction(article){
    if (article == "computadora"){
        console.log("Con mi computadora puedo aprender a programar")
    }else if (article == "celular"){
        console.log("En mi celular puedo aprender usando la app de Platzi")
    }else if(article == "cable"){
        console.log("Hay un cable en mi bota")
    }else{
        console.log("Articulo no encontrado")
    }
}

soluction('celular')