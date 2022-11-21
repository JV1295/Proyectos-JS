const main = document.querySelector("main")

const numero = parseInt(prompt("Ingrese un número"))



const calcularNumero = () => {

  let porcentaje = 0

  if (numero > 500) {
    porcentaje = numero * 0.18
    main.textContent = `El porcentaje de ${numero} es ${porcentaje.toFixed(2)}`
  } else {
    main.textContent = `El ${numero} colocado es menor o igual a 500`
  }
}

calcularNumero()
