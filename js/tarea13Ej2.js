const main = document.querySelector("main")

let numero1 = +prompt("Ingrese un número")

const total = function (a) {
  main.textContent = `El 20% de ${a} es ${a * 0.20}`
}


total(numero1)