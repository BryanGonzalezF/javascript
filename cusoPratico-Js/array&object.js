/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */ 

let fruta = ["fresa","uva","manzana","pera"]

/* function primera(indice){
    console.log(fruta[indice])
}

primera(0) */

function primer(array){
    console.log(array[0])
}

primer(fruta)
/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */

function todos(array){
    array.map(function(todo){
    console.log(todo)
   })
}

todos(fruta)

/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */

let carros = {
    marca: "toyota",
    marca: "mazda",
    marca: "mitsubishi",
    marca: "kia"
}

function objeto(object){
   while(object ===0){
    console.log(object)
   }
}

objeto(carros)