const main = document.querySelector("main")


let numero = +prompt("Ingrese un número en pulgadas")

const medida = (pulgadas) => {
  main.textContent = `${pulgadas} pulgadas equivale a ${pulgadas * 25.4} mm`
}

medida(numero)