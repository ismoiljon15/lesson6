console.log("JS is started");

const quti = document.querySelector(".box")

const items = document.querySelectorAll(".item")

items[1].style.color = "red"


document.querySelector(".title").style.color = "red"


const desc = document.querySelector(".box p")

desc.style.fontSize = "30px"
desc.style.backgroundColor = "#999"


// parentni aniqlash
let parent = quti.parentElement

// children bolalarini aniqlaydi keyin array qaytaradi
let bolalari = quti.children

console.log(bolalari);
console.log( parent );




let divEl = document.createElement("div")
let b = document.createElement("b")
let i = document.createElement("i")

b.innerHTML = "JavaScript"
i.innerHTML = "is programming language"


divEl.appendChild(b)
divEl.appendChild(i)
quti.appendChild(divEl)

console.log(divEl);












