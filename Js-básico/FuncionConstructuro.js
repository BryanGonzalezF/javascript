
/* definimos la funcion constructora donde se le pasan los parametros que deseamos almacenar */
/* function auto(marca,modelo,annio,color){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.color = color */
//} 
/* em cada una se le asigna un valor a los parametros de nuestra funcion
y con new se agregan como un nuevo objeto  */
/* 
let autoNuevo = new auto("Toyota", "Yaris", 2023, "Gris")

let autoNuevo2 = new auto("Mitsubishi", "Lancer", 2016, "Gris")

let autoNuevo3 = new auto("Hyundai", "Elantra", 2023, "Azul")

console.log(autoNuevo)
console.log(autoNuevo2)
console.log(autoNuevo3) */


function solution(car){
    
    car.drivingLicense = !(car.licensePlate === undefined || car.licensePlate === null)
    
    console.log(car)
}

// Prueba 1
solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });

  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });
  
  // Prueba 3
  solution({ licensePlate: 'RGB255'  });