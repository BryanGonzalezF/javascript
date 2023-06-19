let articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "Tv", costo: 250 },
    {nombre: "Libro", costo:32},
    {nombre: "Celular", costo: 100},
    {nombre: "Laptop", costo: 590}
]

console.log("Método Find")

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})
console.log(encuentraArticulo)


console.log("Método ForEach")
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

console.log("Método some")

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 100
})