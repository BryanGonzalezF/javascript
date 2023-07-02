const result = document.querySelector("h3");
const input1 = document.querySelector("#valor1");
const input2 = document.querySelector("#valor2");
const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const multiplicacion = document.querySelector("#multi");
const division = document.querySelector("#div");

function Suma() {
  let operacion = parseInt(input1.value) + parseInt(input2.value);
  result.innerText = "El resultado es: " + operacion;
}

function Resta() {
  let operacion = parseInt(input1.value) - parseInt(input2.value);
  result.innerText = "El resultado es: " + operacion;
}

function Multi() {
  let operacion = parseInt(input1.value) * parseInt(input2.value);
  result.innerText = "El resultado es: " + operacion;
}

function Div() {
  let operacion = parseInt(input1.value) / parseInt(input2.value);
  result.innerText = "El resultado es: " + operacion;
}
