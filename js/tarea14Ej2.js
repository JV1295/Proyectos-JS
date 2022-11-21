const main = document.querySelector("main")

const inversion = +prompt("Ingrese una inversión")

const inversionTotal = (inversion) => {

  const avLaMar = inversion * 0.35
  const avAbancay = inversion * 0.25
  const av28Julio = inversion * 0.10
  const avAviacion = inversion * 0.15
  const avTacna = inversion - (avLaMar + avAbancay + av28Julio + avAviacion)

  main.innerText = `
  Av. La Mar recibe $/.${avLaMar}
  Av. Abancay recibe $/.${avAbancay}
  Av. 28 de Julio recibe $/.${av28Julio}
  Av. Aviación recibe $/.${avAviacion}
  Av. Tacna recibe $/.${avTacna}
  `
}

inversionTotal(inversion)

