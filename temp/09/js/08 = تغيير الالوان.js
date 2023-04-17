const color_li = document.querySelectorAll(".colors_list li")

color_li.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
    })
})
