const main = document.querySelector("main")

const promedio1 = +prompt("Ingrese la nota de su 1 examen")
const promedio2 = +prompt("Ingrese la nota de su 2 examen")
const promedio3 = +prompt("Ingrese la nota de su 3 examen")

const promedioFinal = function (a, b, c) {
  const total = (a*30+ b*30+ c*40) / 100
  main.textContent = `Su promedio final es ${total}`
}


promedioFinal(promedio1, promedio2, promedio3)