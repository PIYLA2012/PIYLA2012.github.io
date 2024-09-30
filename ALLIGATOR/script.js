let krug = document.querySelector(".krug")
let count = document.querySelector(".count")
let rocletlol = document.querySelector(".rocletlol")
console.log (count)
krug.addEventListener("click",(event)=>{
    let c = Number(count.textContent)
    console.log (c)
    c = c +1
    console.log (c)
    count.innerHTML = c

    let x = event.clientX - krug.getBoundingClientRect().left
    let y = event.clientY - krug.getBoundingClientRect().top
    let div = document.createElement("div")
    div.className = "fly";
    div.textContent = "+1"
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    krug.append(div);
    setTimeout(()=>{
        div.classList.add("amimate")
    },10)
    setTimeout(()=>{
    krug.removeChild(div)
    },2010)
})
rocletlol.addEventListener("click",(event)=>{
alert("123")
})
