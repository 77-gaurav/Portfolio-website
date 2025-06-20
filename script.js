// ✅ Typing Effect
const textElement = document.getElementById('animated-text');
const text = "Gaurav Sareriya";
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeText, 100);
    }
}
if (textElement) typeText();


// ✅ Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// ✅ On DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {

    // 🌙 Theme Toggle
    const toggleBtn = document.getElementById('theme-toggle');

    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }

    toggleBtn?.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });


    // 🍔 Mobile Navbar Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });


    // 🎠 Splide Carousel Init
    new Splide('#skills-carousel', {
        type: 'loop',
        perPage: 5,
        autoplay: true,
        interval: 3500,
        speed: 1500,
        pauseOnHover: false,
        pagination: false,
        arrows: false,
        breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 3 },
            480: { perPage: 2 }
        }
    }).mount();

    // 🧠 AOS Animate
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });
});


// ✅ Clear contact form after submit
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', function () {
    setTimeout(() => {
        this.reset();
    }, 200);
});
