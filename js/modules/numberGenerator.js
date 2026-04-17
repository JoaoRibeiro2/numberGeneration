
export function numberGenerator(interval, min, max, selectOption){

const array = []

  switch(selectOption){
    case "repeat":
    while(array.length < interval){
    const number = Math.floor(Math.random() * (max - min + 1)) + min
    array.push(number)
    }
    return array
  break
  case "notRepeat":
  
  while(array.length < interval){
    const number = Math.floor(Math.random() * (max - min + 1)) + min
    if(!array.includes(number)){
      array.push(number)
    }
  }
  return array
}
// function createArrayNumber(interval, min, max){

 

}