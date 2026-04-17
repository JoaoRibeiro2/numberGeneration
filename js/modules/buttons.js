export class Button{
  constructor(name){
    const button = document.createElement("button")
    button.setAttribute("aria-label", name)
    button.classList.add("button_submit")
    return button
  }
}