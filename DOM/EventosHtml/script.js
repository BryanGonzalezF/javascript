const h1 = document.querySelector("h1");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const clickBtn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");
/* const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value)

console.log({
   h1,
   p,
   parrafito, 
   pid
}) */

function btnOnclick() {
  let suma = parseInt(numero1.value) + parseInt(numero2.value);
  console.log(suma);
  result.innerHTML = `Su resultado es ${suma}`;
}
