function randomNumberInterval(a, b){
  return Math.floor(Math.random() * (b - a + 1)) + a // retorna 
}

let value = 10

for(let cont = 0; cont <= value; cont++){
  let sort = randomNumberInterval(10, 20)
    console.log(sort)
}