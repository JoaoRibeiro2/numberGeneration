
export function numberGenerator(interval, min, max, selectOption){
  const array = []

  if(min>max){
    alert("Primeiro valor deve ser menor que o segundo")
    location.reload()
  }else if(interval > (max-min+1)){
    alert("O número do sorteio é maior que a quantidade de números disponíveis")
    location.reload()
  }{ 
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
    }
    return array
  }
}