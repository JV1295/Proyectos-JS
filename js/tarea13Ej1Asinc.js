const main = document.querySelector("main")

const nota1 = +prompt("Ingrese su primera nota")
const nota2 = +prompt("Ingrese su segunda nota")
const nota3 = +prompt("Ingrese su tercera nota")

const promedio = function (a, b, c) {
  main.textContent = `Su promedio es ${(a + b + c) / 3}`
}


promedio(nota1, nota2, nota3)