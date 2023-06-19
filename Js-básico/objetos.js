let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2023,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

miAuto.marca = "Mazda" //Asi podemos cambiar el valor de una propiedad

miAuto.color = "Rojo" //Asi podemos agregar una propiedad nueva con su valor

console.log(miAuto)