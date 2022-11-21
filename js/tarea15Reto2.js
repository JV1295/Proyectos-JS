const main = document.querySelector("main")

const nombre = prompt("Ingrese su nombre")
const notaParcial = +prompt("Ingrese su nota parcial")
const promedioPracticas = +prompt("Ingrese el promedio de sus prácticas")
const examenfinal = +prompt("Ingrese la nota de su examen final")


const importeCompra = () => {

  const pesoDoble = examenfinal * 2
  
  const promedioFinal = (notaParcial + promedioPracticas + pesoDoble) / 3
  
  if (promedioFinal > 15) {
    main.textContent =`${nombre} su promedio final es ${promedioFinal} y esta aprobado`
  } else {
    main.textContent =`${nombre} su promedio final es ${promedioFinal} y esta desaprobado`
  }
}

importeCompra()
