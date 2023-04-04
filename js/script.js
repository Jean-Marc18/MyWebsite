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
}

var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Java Developer", "Photographer", "Dancer😅"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
})