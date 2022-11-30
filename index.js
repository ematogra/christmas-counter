
let welcomeEl = document.getElementById("welcome-el")
let firstName = "Ross"
let greeting = "Welcome back"
welcomeEl.textContent = greeting + ", " + firstName + "!";
welcomeEl.textContent += " 👋"

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash
  count = 0
  countEl.textContent = 0
}

