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


numbers.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "")
});

intervalOne.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "")
});

intervalTwo.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "")
});

option2.onclick = ()=> {
  radioWrapper.classList.add("no-repeat")
}

option1.onclick = () =>{
  radioWrapper.classList.remove("no-repeat")
}

function randomNumberInterval(a, b){
  const sort = Math.floor(Math.random() * (b - a + 1)) + a // retorna 

  return sort
  
}
function createArrayNumber(a,b, numbersSort){
  const array = []
  for(let value = 0; value < numbersSort; value++){
    array.push(randomNumberInterval(a,b))
  }
  const newArray = [...new Set(array)]
  return newArray
}

function inserirNumeros(e){
  let span = document.createElement("span")

  resultDiv.appendChild(span)
  span.innerText = e
  console.log(e)
}


form.addEventListener("submit", (e) => {
  let number = Number(numbers.value)
  let startNumber = Number(intervalOne.value)
  let endNumber = Number(intervalTwo.value)

  if(option2.value == true){
    console.log("Não repete números")
  }else{
    console.log("Repete números")
  }

  form.classList.add("hidden")
  resultDiv.classList.remove("hidden")
  e.preventDefault()
  // console.log("Enviado!", number, startNumber, endNumber)

  let result = createArrayNumber(startNumber, endNumber, number)

  result.forEach((element) => inserirNumeros(element))


})