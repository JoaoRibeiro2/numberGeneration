let quantify = 50

let min = 20
let max = 30

if(min>max){
  console.log("O valor inicial deve ser menor")
  return 
}

if(quantify > (max - min + 1)){
  console.log("A quantidade de números sorteados é maior que os números disponíveis")
  return
}

console.log("Tudo certo")