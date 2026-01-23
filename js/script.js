const numbers = document.querySelector("#numbers")
const invervalOne = document.querySelector("#interval-one")
const intervalTwo = document.querySelector("#interval-two")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2") 
const radioWrapper = document.querySelector(".radio-wrapper")



numbers.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "")
});

invervalOne.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "")
});

intervalTwo.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "")
});

option2.onclick = ()=> {
  console.log(option2.value)
  radioWrapper.classList.add("no-repeat")
}

option1.onclick = () =>{
  radioWrapper.classList.remove("no-repeat")
}