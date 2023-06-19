/* let estudiantes = ["Rosa", "Martin", "Jose", "Pedro"]

function saludar(estudiante){
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    console.log(estudiantes)
    let estudiante = estudiantes.shift();
    saludar(estudiante);
} */

function solution(estudiantes, deathCount, nuevo){

   /*  while(deathCount > 0){
        estudiantes.pop()
        deathCount--
    }

    
        estudiantes.push(nuevo)
        console.log(estudiantes) */

    for(let i=0; i < deathCount; i++){
        estudiantes.pop()
    }

    estudiantes.push(nuevo)
    console.log(estudiantes)
    


}

// Input
solution(["Nico", "Zule"], 0, "Santi")
  solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
  solution(["Nath", "Luisa", "Noru"], 2, "Cami")

// Output
