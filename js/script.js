const hamburgerMenu = document.querySelector (".nav_hamburger")
const menuRoll = document.querySelector (".nav__links")

hamburgerMenu.addEventListener("click", () => {
    
    let active = menuRoll.classList.contains("show__links")

    if ( active == false ) {
        menuRoll.classList.add("show__links")
        hamburgerMenu.style.transform = "rotate(90deg)"
        hamburgerMenu.style.color = "rgb(123, 135, 201)"
    } else {
        menuRoll.classList.remove("show__links")
        hamburgerMenu.style.transform = "rotate(0)"
        hamburgerMenu.style.color = `#061775`
    }
})