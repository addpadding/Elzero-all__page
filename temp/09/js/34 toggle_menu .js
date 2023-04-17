let toggle_Btn = document.querySelector(".toggle_menu")
let t_Links = document.querySelector(".links")

toggle_Btn.onclick = function (e) {
    e.stopPropagation()
    this.classList.toggle("menu_active")
    t_Links.classList.toggle("open")
}

document.addEventListener("click", (e) => {
    if (e.target !== toggle_Btn && e.target !== t_Links) {
        if (t_Links.classList.contains("open")) {
            toggle_Btn.classList.toggle("menu_active")
            t_Links.classList.toggle("open")
        }
    }
})

t_Links.onclick = function (e) {
    e.stopPropagation()
}