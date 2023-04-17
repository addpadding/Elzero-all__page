
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



// 27 = تحسينات
function handle_Active(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    });

    ev.target.classList.add("active")
}