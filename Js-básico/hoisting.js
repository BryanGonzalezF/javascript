/* console.log(miNombre)
 */
/* let miNombre ="Bryan"


saludar()


function saludar(){
     console.log("Hola",miNombre)
} */

/* Como buenas practicas es recomendable declara variables y funciones lo más arriba en el codigo que se pueda */

function myFunction(a, n) {
  //Funcion para devolver la letra del string según el parametro n
  console.log(a[n - 1]);
}

myFunction("abcd", 1);
myFunction("zyxbwpl", 5);
myFunction("gfedcba", 3);

function myFunction2(a) {
  //funcion para devolver los primeros 3 numeros de un string
  console.log(a.slice(0, 3));
}

myFunction2("abcdefg");
myFunction2("1234");

function myFunction3(a) {
  //funcion para solo mostrar la primera mitad de un string
  let str = a.length / 2;

  console.log(a.slice(0, str));
}

myFunction3("abcdefgh");

function solucion(a, b, c, d, e, f) {
  console.log((((a + b - c) * d) / e) ** f);
}

solucion(6, 5, 4, 3, 2, 1);
solucion(6, 2, 1, 4, 2, 3);

function palabras(a, b) {
  let buscar = a.search(b);
  if (buscar === -1) {
    console.log(a + b);
  } else {
    console.log(b + a);
  }
}

palabras("cheese", "cake");
palabras("lips", "s");

function contador(a, b) {
  /*  let count = 0;
  for (let i = 0; i <= b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  } */
  /*  console.log(count); */
}
function contador(a, b) {
  console.log(b.split(a).length - 1);
}
contador("m", "how many times does the character occur in this sentence?");
contador("h", "how many times does the character occur in this sentence?");

function tipo(a) {
  console.log(a % 1 === 0);
}

tipo(1.123);
tipo(4);
function redondear(a) {
  console.log(Number(a.toFixed(2)));
  let redondear = a.toFixed(2);
}

redondear(2.12397);
redondear(3.136);
redondear(1.12397);
redondear(26.1379);

function separar(a) {
  /* const string = a + ""; */
  /*  console.log(string); */
  const strings = a.toString().split("");
  console.log(strings);
  console.log(strings.map((digit) => Number(digit)));
}

separar(10);
