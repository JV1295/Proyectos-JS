const main = document.querySelector("main")

const dinero = +prompt("Ingrese el precio de un producto")

const ingreso = (monto)=>{
  const igv = monto * 0.19
  const total = monto + igv
  main.textContent = `El igv es de $/.${igv} y el precio final es $/.${total}`
}

ingreso(dinero)