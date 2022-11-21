const main = document.querySelector("main")

const dinero = +prompt("Ingrese un monto de dinero")

const montoTotal = (dinero) => {
  main.innerText= `Al 1 socio le toca $/.${dinero * 0.30}
  Al 2 socio le toca $/.${dinero * 0.20}
  Al 3 socio le toca $/.${dinero * 0.50}
  `
}

montoTotal(dinero)