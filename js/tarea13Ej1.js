const main = document.querySelector("main")

let numero1 = +prompt("Ingrese su primer número")
let numero2 = +prompt("Ingrese su segundo número")

const sumaNumeros = function (a, b) {
  main.textContent = `La suma es ${a + b} y el producto es ${a*b}`
}

sumaNumeros(numero1, numero2)