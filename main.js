let menu_icon = document.querySelector(".menu_icon");
let nav = document.getElementById("nav");

let active = false
menu_icon.addEventListener("click", () => {
    if (active === false) {
        nav.classList.add("nav_active")
        active = true
    }
    else {
        nav.classList.remove("nav_active")
        active = false
    }
})


