/* El scope es el alcance que tienen nuestra variables dentro de javascript
existen dos tipos de scope: scope global y el scope local 

el scope global es el que declaramos por fuera de funciones u objetos, y estas pueden
ser invocadas desde cualquier punto de nuestro código de javascript 

por otro lado tenemos el scope local y esto se refiere cuando declaramos variables dentro 
un bloque de código especifico como puede ser una función, las variables que esten declaradas dentro de 
una función no puede ser llamada por fuera de ella, ni ninguna otra función solamente en el bloque donde se declaro

Ejemplo:
*/



let nombre = "Bryan" /* este seria un ejemplo de variable en el scope global  */

function nombreCompleto(){
    let apellido= "Gonzalez" /* esta es una variable en scope local y solo puede ser utilizada 
    dentro de este bloque */
    console.log(`Mi nombre completo es`, nombre, apellido)
}

nombreCompleto() /* solamente podremos llamar a nuestra función y se mostrara la variable en scope 
local en caso de que se este utilizando en el scope
 */


console.log(apellido) /* si la llamamos de esta manera nos mostrara el error de que esta 
variable no esta definida debido a que no esta en el scope global de nuestro javascript 
si quisieramos hacer uso de ella debemos cambiarla del scope local de la función hacia el scope global donde estemos 
trabajando */