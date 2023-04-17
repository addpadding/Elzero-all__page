let landing_Page = document.querySelector(".landing_page")

let imgs_Array = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",]


setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgs_Array.length)
    landing_Page.style.backgroundImage = `url("imgs/${imgs_Array[randomNumber]}")`
    // console.log(randomNumber)
}, 1000)
