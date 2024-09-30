let gunbutton = document.querySelector("#gun")
let bronyabutton = document.querySelector("#bronya")
let soprovodbutton = document.querySelector("#soprovod")
let drbrobutton = document.querySelector("#drbro")
let rocletlol = document.querySelector(".rocletlol")
let gundiv = document.querySelector(".gun")
let bronyadiv = document.querySelector(".bronya")
let soprovoddiv = document.querySelector(".soprovod")
let drbrodiv = document.querySelector(".drbro")
gunbutton.addEventListener("click",(event)=>{
    gundiv.style.display = "flex"
    bronyadiv.style.display = "none"
    soprovoddiv.style.display = "none"
    drbrodiv.style.display = "none"
})
bronyabutton.addEventListener("click",(event)=>{
    gundiv.style.display = "none"
    bronyadiv.style.display = "flex"
    soprovoddiv.style.display = "none"
    drbrodiv.style.display = "none"
})
soprovodbutton.addEventListener("click",(event)=>{
    soprovoddiv.style.display = "flex"
    gundiv.style.display = "none"
    bronyadiv.style.display = "none"
    drbrodiv.style.display = "none"
})
drbrobutton.addEventListener("click",(event)=>{
    soprovoddiv.style.display = "none"
    gundiv.style.display = "none"
    bronyadiv.style.display = "none"
    drbrodiv.style.display = "flex"
})
