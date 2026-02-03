import {createArrayNumber, createArrayNotRepeat, insertNumbers} from './modules/sort.js'


const numbersInput = document.querySelectorAll(".numbers")
const numbers = document.querySelector("#numbers")
const intervalOne = document.querySelector("#interval-one")
const intervalTwo = document.querySelector("#interval-two")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2") 
const radioWrapper = document.querySelector(".radio-wrapper")
const form = document.querySelector("form")
const button = document.querySelector(".button_submit")
const resultDiv = document.querySelector("#result")
const numberDraw = document.querySelector(".numbers_draw")
const options = document.querySelectorAll("input[name=option]")
let selectOption

options.forEach(option => {
  option.addEventListener("change", () => {
    selectOption = option.value
  })
})

numbersInput.forEach((numbers) => {
  numbers.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, "")
  })
})


option2.onclick = ()=> {
  radioWrapper.classList.add("no-repeat")
}

option1.onclick = () =>{
  radioWrapper.classList.remove("no-repeat")
}



form.addEventListener("submit", (e) => {
  let number = Number(numbers.value)
  let startNumber = Number(intervalOne.value)
  let endNumber = Number(intervalTwo.value)

  form.classList.add("hidden")
  resultDiv.classList.remove("hidden")
  e.preventDefault()
  // console.log("Enviado!", number, startNumber, endNumber)

  let result = createArrayNumber(startNumber, endNumber, number)
  let resultNotRepeat = createArrayNotRepeat(result)
  
  if(selectOption === "option2"){
    resultNotRepeat.forEach((element) => insertNumbers(element, resultDiv))
  }else{
    result.forEach((element) => insertNumbers(element, resultDiv))
  }

})