const main = document.querySelector("main")

const hombres = +prompt("Ingrese la cantidad de hombres")
const mujeres = +prompt("Ingrese la cantidad de mujeres")



const totalPorcentaje = (hombres, mujeres) => {
  const total = mujeres + hombres
  const porcentajeMujeres = (mujeres / total) * 100
  const porcentajeHombres = (hombres / total) * 100

  main.innerText = `
  El porcentaje de hombres es ${porcentajeHombres}%
  El porcentaje de mujeres es ${porcentajeMujeres}%
  `
}

totalPorcentaje(hombres, mujeres)

