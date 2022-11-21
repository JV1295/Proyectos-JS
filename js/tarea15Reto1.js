const main = document.querySelector("main")

const importe = +prompt("Digite el importe de una compra")

const importeCompra = (importe) => {

  let descuento = 0
  let importeFinal = 0

  if (importe >= 150) {
    descuento = importe * 0.12
  }
  
  importeFinal = importe - descuento

  main.innerText=`
  El importe final es de S/.${importeFinal} con un descuento de $/.${descuento}
  `
}

importeCompra(importe)

