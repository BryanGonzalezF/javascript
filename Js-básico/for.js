let estudiantes = ["Pablo", "Marco", "Jose", "Daniela", "Rosa"]


function saludar(estudiante){
    console.log(`Hola, ${estudiante}`)
}

/* for(let i=0; i< estudiantes.length; i++){
    saludar(estudiantes[i])
} */

for(let estudiante of estudiantes){
    saludar(estudiante)
}