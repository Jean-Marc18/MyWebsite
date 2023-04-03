// active scroll section 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
console.log(window.screenY);
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}

// navbar
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