
// 28 bullets = (show , hide)
let bullets_span = document.querySelectorAll(".bullets_options span")
let bullets_Container = document.querySelector(".nav_bullets")

bullets_span.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "show") {
            bullets_Container.style.display = "block"
        } else {
            bullets_Container.style.display = "none"
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
