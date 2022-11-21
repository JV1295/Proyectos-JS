const main = document.querySelector("main")

const entrada1 = +prompt("Ingrese la cantidad de entradas generales")
const entrada2 = +prompt("Ingrese la cantidad de entradas para mayores de 65")
const entrada3 = +prompt("Ingrese la cantidad de entradas para menores")


const entradas = (entradaGeneral, entradaMayores, entradaMenores) => {

  const generalTotal = entradaGeneral * 150
  const mayoresTotal = entradaMayores * 50
  const menoresTotal = entradaMenores * 80

  const montoTotal = generalTotal + mayoresTotal + menoresTotal

  main.innerText = `El monto de las entradas general es : $/.${generalTotal}
  El monto de las entradas para mayores de 65 es : $/.${montoTotal}
  El monto de las entradas para menores es : $/.${menoresTotal}
  El monto recaudado total es : $/.${montoTotal}
  `
}

entradas(entrada1, entrada2, entrada3)