// 18 = Popup image

let our_gallery = document.querySelectorAll(".gallery img")

our_gallery.forEach(img => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div")
        overlay.className = "popup_overlay_js"
        document.body.appendChild(overlay)
        let popup_Box = document.createElement("div")
        popup_Box.className = "popup_box_js"
        let popup_img = document.createElement("img")
        popup_img.src = img.src
        popup_Box.appendChild(popup_img)
        document.body.appendChild(popup_Box)
    })
});