function random(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
}

let pcEleccion= random(1,3);

console.log(pcEleccion)

