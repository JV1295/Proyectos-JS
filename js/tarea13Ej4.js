const main = document.querySelector("main")


let numero1 = +prompt("Ingrese una base")
let numero2 = +prompt("Ingrese una altura")

const areaTriangulo = (altura, base) => {
  main.textContent = `El área del triángulo es ${(altura + base) / 2}`
}

areaTriangulo(numero1, numero2)

