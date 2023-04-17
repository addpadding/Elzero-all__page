const random_Back_El = document.querySelectorAll(".random_background span")

random_Back_El.forEach(span => {
    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")
    })
})
