const inputText = document.querySelector(".form input")
const btn = document.querySelector(".form button")
const collection = document.querySelector(".collection")

btn.addEventListener("click", ()=>{
    if(inputText.value.trim() === ""){
        return alert("biror nima yozing !!!")
    }


    const li = document.createElement("li")
    const span = document.createElement("span")
    const i = document.createElement("i")
    const inputValue = inputText.Value

    
    
    
    li.className = "item"

    span.innerHTML = inputValue
    i.className = "fa-solid fa-trash-can"

    li.appendChild(span)
    li.appendChild(i)

    collection.appendChild(li)

    inputText.value = ""



    // o'chirish codi
    i.addEventListener("dblclick", ()=>{
       i.parentElement.remove()      
    })



    


})