let menu_hamburger = document.querySelector("#menu_hamburger")
let navbar = document.querySelector(".navbar")

// (menu_hamburger برجر = (onclick("navbar")))
menu_hamburger.onclick = () => {

    // toggle close(x)
    menu_hamburger.classList.toggle("fa-times")

    // (navbar(toggle("active"))) 
    navbar.classList.toggle("active")
}

window.onscroll = () => {
    menu_hamburger.classList.remove("fa-times")
    navbar.classList.remove("active")
}