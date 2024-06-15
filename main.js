const menuMail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

menuMail.addEventListener("click",e=>{
    desktopMenu.classList.toggle("inactive")
})