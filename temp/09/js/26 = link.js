// 26 = link

const all_Links = document.querySelectorAll(".links a")

all_Links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
    })
});

// ===============================

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