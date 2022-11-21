const main = document.querySelector("main")

const numero = +prompt("Ingrese un número de 3 cifras")

const suma = (numero) => {
  const algo = numero.toString().split("")
  let suma = 0
  for (const num of algo) {
    suma = suma + num * 1
  }
  
  main.textContent = `La suma de las cifras del número ${numero} elevada al cuadrado es ${suma * suma}`
}

suma(numero)