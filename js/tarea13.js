//1
const sumaNumeros = function (a, b) {
  console.log(a + b)
}

let numero1 = 10
let numero2 = 20

sumaNumeros(numero1, numero2)

//2
const total = function (a) {
  console.log (a * 0.20)
}

let numero = 10

total(numero)

//3
const cambio = (m) => {
  const cm = m * 100
  const ml = cm * 10
  console.log(`El valor en cm es : ${cm} cm`)
  console.log(`El valor en ml es : ${ml} ml`)
}

cambio(100)

//4
const areaTriangulo = (altura, base) => {
  console.log(`El área del triángulo es ${(altura + base) / 2}`)
}

areaTriangulo(10, 20)

//5
const dolares = (dolar) => {
  console.log(`Su valor es ${dolar * 3.38} soles`)
}
dolares(10)

//6
const medida = (pulgadas) => {
  console.log(`Tiene ${pulgadas * 25.4} mm`)
}

medida(20)

//7

const suma=(rest)=>{
const algo = rest.toString().split("")
let suma =0
for (const num of algo) {
  suma = suma + num*1
}
return suma
}

console.log(suma(123))

//8
const montoTotal = (dinero) => {
  console.log(`Al 1 socio le toca $/.${dinero * 0.30}`)
  console.log(`Al 2 socio le toca $/.${dinero * 0.20}`)
  console.log(`Al 3 socio le toca $/.${dinero * 0.50}`)
}

montoTotal(100)

//9

const ingreso = (monto)=>{
  const igv = monto * 0.19
  const total = monto + igv
  console.log(`El igv es de $/.${igv} y el precio final es $/.${total}`)
}

ingreso(200)

//10

const entradas = (entradaGeneral,entradaMayores,entradaMenores) => {

  const generalTotal = entradaGeneral * 150
  const mayoresTotal = entradaMayores * 50
  const menoresTotal = entradaMenores * 80

  const montoTotal = generalTotal + mayoresTotal + menoresTotal

  console.log(`El monto de las entradas general es : $/.${generalTotal}`)
  console.log(`El monto de las entradas para mayores de 65 es : $/.${montoTotal}`)
  console.log(`El monto de las entradas para menores es : $/.${menoresTotal}`)

  console.log(`El monto recaudado total es : $/.${montoTotal}`)
}

entradas(10,20,30)