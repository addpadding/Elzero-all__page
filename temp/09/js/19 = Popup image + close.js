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