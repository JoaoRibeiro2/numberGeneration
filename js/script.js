import { insertNumbers } from './modules/insertNumbers.js'
import {numberGenerator} from './modules/numberGenerator.js'
import { Button } from './modules/buttons.js'

const h3 = document.querySelector(".h3-form")
const pForm = document.querySelector(".p-form")

const numbersInput = document.querySelectorAll(".numbers")
const interval = document.querySelector("#numbers")
const min = document.querySelector("#min")
const max = document.querySelector("#max")
const repeat = document.querySelector("#repeat")
const notRepeat = document.querySelector("#notRepeat") 
const radioWrapper = document.querySelector(".radio-wrapper")
const formDiv = document.querySelector(".form")
const form = document.querySelector("form")
const fieldset = document.querySelector("fieldset")
const button = document.querySelector(".button_submit")
const resultDiv = document.querySelector("#result")
const spansGroup = document.querySelector(".spans-group")
const numberDraw = document.querySelector(".numbers_draw")
const options = document.querySelectorAll("input[name=option]")


numbersInput.forEach((numbers) => {
  numbers.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, "")
  })
})


notRepeat.onclick = ()=> {
  radioWrapper.classList.add("no-repeat")
}

repeat.onclick = () =>{
  radioWrapper.classList.remove("no-repeat")
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let interval_number = Number(interval.value)
  let min_number = Number(min.value)
  let max_number = Number(max.value)
  let valueSelected 
  
  options.forEach((option) => {
    if(option.checked){
     valueSelected = option.value
    }
  })

  form.classList.add("hidden")
  formDiv.classList.add("format-result")
  let result = numberGenerator(interval_number, min_number, max_number, valueSelected)
  resultDiv.classList.remove("hidden")
  formatResult(h3, pForm)
  insertNumbers(result, spansGroup)

  const button1 = new Button("Sortear novamente")
  const button2 = new Button("Voltar")

  resultDiv.appendChild(button1)
  resultDiv.appendChild(button2)

  button1.onclick = () =>{
    result = ""
    let spans = document.querySelectorAll(".spans")
    spans.forEach((span) => {
      span.remove()
    })
      result = numberGenerator(interval_number, min_number, max_number, valueSelected)
      insertNumbers(result, spansGroup)
  }
  button2.onclick = () => {
    location.reload()
  }
})

function formatResult(title, subTitle){
      title.innerText = "Resultado do sorteio"
      title.classList.add("format-result")
      subTitle.innerText = "1º resultado"
      subTitle.classList.add("format-result")
}

// function insertNumbers(result, spansGroup){

//     form.classList.add("hidden")
//     formatResult(h3, pForm)
//     result.forEach((element) => {
//       let span = document.createElement("span")
//       span.innerHTML = element
//       span.classList.add("spans")
//       spansGroup.appendChild(span)
//     })

// }
