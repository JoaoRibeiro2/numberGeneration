function randomNumberInterval(a, b){
  const sort = Math.floor(Math.random() * (b - a + 1)) + a // retorna 
  return sort
}
function createArrayNumber(a,b, numbersSort){
  const array = []
  for(let value = 0; value < numbersSort; value++){
    array.push(randomNumberInterval(a,b))
  }
  return array

}
function createArrayNotRepeat(array){
  let arrayNotRepeat = [...new Set(array)]
  return arrayNotRepeat
}

function insertNumbers(e, resultDiv){
  let span = document.createElement("span")

  resultDiv.appendChild(span)
  span.innerText = e
  console.log(e)
}
export {randomNumberInterval, createArrayNumber, createArrayNotRepeat, insertNumbers}