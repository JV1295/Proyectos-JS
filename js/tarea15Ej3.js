const main = document.querySelector("main")

const numero = +prompt("Ingrese un número")



const calcularNumero = () => {

  let factorial = 1

  for (let i = numero; i > 0; i--) {
    factorial = factorial * i
  }
  main.textContent = `El factorial de ${numero} es ${factorial}`
}

calcularNumero()
