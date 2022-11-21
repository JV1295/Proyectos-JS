const main = document.querySelector("main")


let numero = +prompt("Ingrese un número")


const dolares = (dolar) => {
  main.textContent = `Su valor es ${dolar * 3.38} soles`
}

dolares(numero)


