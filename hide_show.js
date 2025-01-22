


const show1 = document.getElementById("show1")
const hide1 = document.getElementById("hide1")
const pass1 = document.getElementById("password")

function getShow1(){
    show1.classList.add("d-none")
    hide1.classList.remove("d-none")
    pass1.type = "text"
    
}

function getHide1(){
    show1.classList.remove("d-none")
    hide1.classList.add("d-none")
    pass1.type = "password"
}




const show2 = document.getElementById("show2")
const hide2 = document.getElementById("hide2")
const pass2 = document.getElementById("cfPassword")

function getShow2(){
    show2.classList.add("d-none")
    hide2.classList.remove("d-none")
    pass2.type = "text"
    
}

function getHide2(){
    show2.classList.remove("d-none")
    hide2.classList.add("d-none")
    pass2.type = "password"
}

