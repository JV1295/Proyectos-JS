const main = document.querySelector("main")


let numero1 = +prompt("Ingrese un número")

const cambio = (m) => {
  const cm = m * 100
  const ml = cm * 10
  main.innerText = `El valor en cm es : ${cm} cm
  El valor en ml es : ${ml} ml `
}

cambio(numero1)