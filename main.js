const menuMail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const inactiveClass = "inactive"
function hide(element){
    element.classList.add(inactiveClass)
}
function showMenus(){
    desktopMenu.classList.toggle(inactiveClass)
    mobileMenu.classList.toggle(inactiveClass)
    hide(aside)
}

menuMail.addEventListener("click",e=>{
    showMenus()
})

menuHamIcon.addEventListener("click",e=>{
    showMenus()
})

menuCarritoIcon.addEventListener("click",e=>{
    aside.classList.toggle(inactiveClass)
    hide(desktopMenu)
    hide(mobileMenu)
})