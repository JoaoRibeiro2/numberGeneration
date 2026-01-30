function randomNumberInterval(a, b){
  const sort = Math.floor(Math.random() * (b - a + 1)) + a // retorna 

  return sort
  
}
function createArrayNumber(numbersSort){
  const array = []
  for(let value = 0; value < numbersSort; value++){
    array.push(randomNumberInterval(10,20))
  }
  const newArray = [...new Set(array)]
  console.log(newArray)
}
createArrayNumber(10)