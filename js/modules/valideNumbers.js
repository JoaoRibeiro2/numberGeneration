  export class NumbersValid{
    constructor(quantify, min, max,){
        
    if(quantify > (max - min + 1)){
      alert("Erro, quantidade de números maior que o intervalo digitado!")
    }else{
      min_max(quantify, min, max)
    }
  }
}
 
function min_max(quantify, min,max){
    let numbers = [quantify, min, max]
      if(min > max){
        alert("O valor mínimo deve ser menor que o segundo")
      }else{
        return numbers
      }
}