
let main_Color = localStorage.getItem("color_option")

if (main_Color !== null) {
    document.documentElement.style.setProperty("--main-color", main_Color)
    document.querySelectorAll(".colors_list li").forEach(element => {
        element.classList.remove("active")
        if (element.dataset.color === main_Color) {
            element.classList.add("active")
        }
    });
}


const color_li = document.querySelectorAll(".colors_list li")

color_li.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        localStorage.setItem("color_option", e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")
    })
})
