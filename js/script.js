// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// active scroll section 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const resetLinks = () => {
    navLinks.forEach((link) => link.classList.remove("active"));
};

const handleScroll = () => {
    const { pageYOffset } = window;

    sections.forEach((section) => {
        const { id, offsetTop, clientHeight } = section;
        const offset = offsetTop - 1;

        if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
            resetLinks();
            navLinks.forEach((link) => {
                if (link.dataset.scroll === id) {
                    link.classList.add("active");
                }
            });
        }
    });
};

document.addEventListener("scroll", handleScroll);

// navbar stick
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove when we're scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Java Developer", "Photographer", "Dancer😅"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
})


// contact input

const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
    ipt.addEventListener('focus', () => {
        ipt.parentNode.classList.add("focus")
        ipt.parentNode.classList.add("not-empty")
    })
    ipt.addEventListener('blur', () => {
        ipt.parentNode.classList.remove("focus")
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty")
        }
    })
})

// darkMode
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img img, .contact-heading', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact-form', { origin: 'bottom' });