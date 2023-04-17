
// (07) = زرار الاعدادات Toggle
document.querySelector(".toggle_settings .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin")
    document.querySelector(".settings_box").classList.toggle("open")
}

//! =================================
// الالوان
// (09) = حفظ الالوان في localStorage
let main_Color = localStorage.getItem("color_option")

if (main_Color !== null) {
    document.documentElement.style.setProperty("--main-color", main_Color)
    // (10) = تعديل active = color
    document.querySelectorAll(".colors_list li").forEach(element => {
        element.classList.remove("active")
        if (element.dataset.color === main_Color) {
            element.classList.add("active")
        }
    });
}

// 08 = تغيير الالوان
const color_li = document.querySelectorAll(".colors_list li")

color_li.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        localStorage.setItem("color_option", e.target.dataset.color)

        // e.target.parentElement.querySelectorAll(".active").forEach(element => {
        //     element.classList.remove("active")
        // });
        // e.target.classList.add("active")

        handle_Active(e)
    })
})

//! =================================
// 13 = yes No = localStorage
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

//= yes No + الخلفية
const random_Back_El = document.querySelectorAll(".random_background span")

random_Back_El.forEach(span => {
    span.addEventListener("click", (e) => {

        // e.target.parentElement.querySelectorAll(".active").forEach(element => {
        //     element.classList.remove("active")
        // });
        // e.target.classList.add("active")

        handle_Active(e)

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

//! =================================
// 16 = skills progress
let our_skills = document.querySelector(".skills")

window.onscroll = function () {
    let skills_off_set_Top = our_skills.offsetTop
    let skills_Outer_Height = our_skills.offsetHeight
    let window_Height = this.innerHeight;
    let window_scroll_Top = this.pageYOffset

    if (window_scroll_Top > (skills_off_set_Top + skills_Outer_Height - window_Height)) {
        let all_Skills = document.querySelectorAll(".skills_box .skill_progress span")
        all_Skills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
}

//! =================================
// 18 +19 = Popup image + close
let our_gallery = document.querySelectorAll(".gallery img")

our_gallery.forEach(img => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div")
        overlay.className = "popup_overlay_js"
        document.body.appendChild(overlay)
        let popup_Box = document.createElement("div")
        popup_Box.className = "popup_box_js"

        if (img.alt !== null) {
            let img_Heading = document.createElement("h3")
            let img_Text = document.createTextNode(img.alt)
            img_Heading.appendChild(img_Text)
            popup_Box.appendChild(img_Heading)
        }

        let popup_img = document.createElement("img")
        popup_img.src = img.src
        popup_Box.appendChild(popup_img)
        document.body.appendChild(popup_Box)

        let close_Button = document.createElement("span")
        let close_Button_Text = document.createTextNode("X")
        close_Button.appendChild(close_Button_Text)
        close_Button.className = "close_Button_css_js"
        popup_Box.appendChild(close_Button)
    })
});

// 19 = close popup
document.addEventListener("click", function (e) {
    if (e.target.className == "close_Button_css_js") {
        e.target.parentNode.remove()

        document.querySelector(".popup_overlay_js").remove()
    }
})

//! =================================
// 25 = nav_bullets
const all_Bullets = document.querySelectorAll(".nav_bullets .bullet")

// 26 = link
const all_Links = document.querySelectorAll(".links a")

function scroll_ToS_omewhere(element) {
    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    });
}
scroll_ToS_omewhere(all_Bullets)
scroll_ToS_omewhere(all_Links)

//! =================================
// 27 = تحسينات
function handle_Active(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    });

    ev.target.classList.add("active")
}

//! =================================
// 28 bullets = (show , hide + (localStorage))
let bullets_span = document.querySelectorAll(".bullets_options span")
let bullets_Container = document.querySelector(".nav_bullets")
let bullets_Local_item = localStorage.getItem("kay__bullets_options")

if (bullets_Local_item !== null) {
    bullets_span.forEach(span => {
        span.classList.remove("active")
    });
    if (bullets_Local_item === "block") {
        bullets_Container.style.display = "block"
        document.querySelector(".bullets_options .yes").classList.add("active")
    } else {
        bullets_Container.style.display = "none"
        document.querySelector(".bullets_options .no").classList.add("active")
    }
}

bullets_span.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "show") {
            bullets_Container.style.display = "block"
            localStorage.setItem("kay__bullets_options", "block")
        } else {
            bullets_Container.style.display = "none"
            localStorage.setItem("kay__bullets_options", "none")
        }
        handle_Active(e)
    })
});

//! =================================
// 29 = Reset Button

document.querySelector(".reset_options").onclick = function () {
    // localStorage.clear()
    localStorage.removeItem("color_option")
    localStorage.removeItem("background_option_Kay")
    localStorage.removeItem("kay__bullets_options")
    window.location.reload()
}

//! =================================
// 34 toggle_menu
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