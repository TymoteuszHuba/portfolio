const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks a');
const body = document.body;

const setupHamburgerMenu = () => {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('mobile');
        navLinks.classList.toggle('active');
        // body.classList.toggle('blur');
    });
    
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('mobile')) {
                navLinks.classList.remove('mobile');
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('mobile');
            navLinks.classList.remove('active');
            // body.classList.remove('blur');
        }
    });
}


export {setupHamburgerMenu};
