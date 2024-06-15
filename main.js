const menuMail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

function show(){
    desktopMenu.classList.toggle("inactive")
    mobileMenu.classList.toggle("inactive")
}

menuMail.addEventListener("click",e=>{
    show()
})

menuHamIcon.addEventListener("click",e=>{
    show()
})