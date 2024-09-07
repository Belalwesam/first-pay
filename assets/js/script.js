// mobile menu handle 
let mobileMenuButton = document.getElementById('mobile-menu-btn')
let mobileMenu = document.getElementById('mobile-menu')

mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active')
    } else {
        mobileMenu.classList.add('active')
    }
})