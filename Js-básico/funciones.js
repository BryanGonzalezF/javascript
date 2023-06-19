//declarativas 


// se le asigna un nombre a la función y luego se le pasan los parametros que utilizará 
function suma(a,b){
    //se devuelven o retornan los datos en este caso se realizo una función de una suma
    return a + b
}

//en una variable mandamos  a llamar a nuestra función y luego mandamos a que lo imprima en consola

let resultado1=suma(2,6)
console.log(resultado1)



//expresión

/* en este caso declaramos la función dentro de una variable, la función se declara y se invoca de la misma manera
 que la anterion */
var mifuncion= function (a, b) {
    return a * b
}

let resultado2 =  mifuncion(3,8)

console.log(resultado2)


/* para meter una función dentro de las comillas se utiliza $(nombre) a esto se le llama plantillas literales */

function saludar(nombre){
   return console.log(`Hola ${nombre}`)
}

saludar("Bryan")