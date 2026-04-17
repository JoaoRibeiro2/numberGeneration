export function insertNumbers(result, spansGroup){  
    
    result.forEach((element) => {
      let span = document.createElement("span")
      span.innerHTML = element
      span.classList.add("spans")
      spansGroup.appendChild(span)
    })

    
}