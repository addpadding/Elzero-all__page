
document.querySelector(".toggle_settings .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin")
    document.querySelector(".settings_box").classList.toggle("open")
}
