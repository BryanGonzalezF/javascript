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
    /* array.map(function(todo){
    console.log(todo)
   }) */
   for(let i= 0; i< array.length; i++){
    console.log(array[i])
   }


}

todos(fruta)

/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */

let carros = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2015,
    pais: "japon"
}

function objeto(obj){
    const arr = Object.values(obj)
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

objeto(carros)