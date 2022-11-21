const main = document.querySelector("main")

const nombreTrabajador = prompt("Ingrese su nombre")
const sueldo = parseInt(prompt("Ingrese su sueldo"))
const hijos = parseInt(prompt("Ingrese el número de hijos"))



const calcularsueldo = () => {

  let sueldoFinal = 0
  let bonificacion = 0

  if (hijos > 0) {
    bonificacion = sueldo * 0.7
  }

  sueldoFinal = sueldo + bonificacion
  main.textContent = `${nombreTrabajador} su sueldo final es S/.${sueldoFinal} y su bonificación fue de $/.${bonificacion}`
}

calcularsueldo()
