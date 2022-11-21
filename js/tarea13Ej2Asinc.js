const main = document.querySelector("main")

const sueldo1 = +prompt("Ingrese el sueldo del 1 empleado")
const sueldo2 = +prompt("Ingrese el sueldo del 2 empleado")
const sueldo3 = +prompt("Ingrese el sueldo del 3 empleado")

const sueldo = function (a, b, c) {

  main.innerText = `
  El sueldo del 1 empleado es: ${a + (a * 0.10)} soles
  El sueldo del 2 empleado es: ${b + (b * 0.12)} soles
  El sueldo del 3 empleado es: ${c + (c * 0.15)} soles
  `
}



sueldo(sueldo1, sueldo2, sueldo3)

