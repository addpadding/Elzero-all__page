let background_option = true

let background_Interval

let background_Local_Item = localStorage.getItem("background_option_Kay")

if (background_Local_Item !== null) {
    if (background_Local_Item === "true") {
        background_option = true
    } else {
        background_option = false
    }
    document.querySelectorAll(".random_background span").forEach(element => {
        element.classList.remove("active")
    })
    if (background_Local_Item === "true") {
        document.querySelector(".random_background .yes").classList.add("active")
    } else {
        document.querySelector(".random_background .no").classList.add("active")
    }
}

const random_Back_El = document.querySelectorAll(".random_background span")

//= yes No + الخلفية

random_Back_El.forEach(span => {
    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")
        if (e.target.dataset.background === "yes") {
            background_option = true
            random_ize_imgs()
            localStorage.setItem("background_option_Kay", true)
        } else {
            background_option = false
            clearInterval(background_Interval)
            localStorage.setItem("background_option_Kay", false)
        }
    })
})

//  تغيير الخلفية عشوائي
let landing_Page = document.querySelector(".landing_page")
let imgs_Array = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",]

function random_ize_imgs() {
    if (background_option === true) {
        background_Interval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgs_Array.length)
            landing_Page.style.backgroundImage = `url("imgs/${imgs_Array[randomNumber]}")`
        }, 1000)
    }
}
random_ize_imgs()