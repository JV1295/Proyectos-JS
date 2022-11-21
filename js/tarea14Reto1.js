const main = document.querySelector("main")

const numero1 = +prompt("Ingrese el 1 número")
const numero2 = +prompt("Ingrese el 2 número")
const numero3 = +prompt("Ingrese el 3 número")
const numero4 = +prompt("Ingrese el 4 número")


const promedioFinal = function (a, b, c, d) {
  const primeraOperacion = a + b
  const segundaOperacion = c - d

  const resultadoFinal = primeraOperacion * segundaOperacion

  main.innerText = `
  La suma de los primeros números es ${primeraOperacion}
  La resta de los últimos números es ${segundaOperacion}
  El producto de los anteriores números es ${resultadoFinal}
  `
}


promedioFinal(numero1, numero2, numero3, numero4)



