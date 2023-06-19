let articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "Tv", costo: 250 },
    {nombre: "Libro", costo:32},
    {nombre: "Celular", costo: 100},
    {nombre: "Laptop", costo: 590}
]
 
console.log("Método filter")
let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo >= 250 
}
)

console.log(articulosFiltrados)

console.log("Método Map")
let nombreArticulos = articulos.map(function (articulo){
    return articulo.nombre
})

console.log(nombreArticulos)