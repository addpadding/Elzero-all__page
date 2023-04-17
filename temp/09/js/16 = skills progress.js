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