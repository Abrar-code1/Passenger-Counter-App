// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countEntries = count + " - "
    saveEl.textContent += countEntries
    count = 0
    countEl.textContent = count
}