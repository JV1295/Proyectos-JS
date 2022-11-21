//1
const inputEj1n1 = document.querySelector(".inputEj1n1")
const inputEj1n2 = document.querySelector(".inputEj1n2")
const resultado1 = document.querySelector(".resultado1")
const btn1 = document.querySelector("#btn1")

//2
const inputEj2n1 = document.querySelector(".inputEj2n1")
const resultado2 = document.querySelector(".resultado2")
const btn2 = document.querySelector("#btn2")

//3
const inputEj3n1 = document.querySelector(".inputEj3n1")
const inputEj3n2 = document.querySelector(".inputEj3n2")
const resultado3 = document.querySelector(".resultado3")
const btn3 = document.querySelector("#btn3")

//1
btn1.onclick = () => {
  let numero1 = +inputEj1n1.value
  let numero2 = +inputEj1n2.value

  resultado1.textContent = `La resta es ${numero1 - numero2}`
}

//2
btn2.onclick = () => {
  let resultado = 0

  resultado = (+inputEj2n1.value - 32) * 5 / 9

  resultado2.textContent = `${+inputEj2n1.value}F equivale a ${resultado}C`
  }

//3
btn3.onclick = () => {
  
  let numero1 = +inputEj3n1.value
  let numero2 = +inputEj3n2.value

  resultado3.textContent = `La suma es ${numero1 + numero2}`
}