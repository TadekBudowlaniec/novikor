// Burger menu toggle
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Zamknij menu mobilne po kliknięciu
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Zamknij menu po kliknięciu poza nim
document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Hero Gallery Slideshow
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showNextSlide() {
    // Usuń klasę active z aktualnego slajdu
    heroSlides[currentSlide].classList.remove('active');
    
    // Przejdź do następnego slajdu
    currentSlide = (currentSlide + 1) % heroSlides.length;
    
    // Dodaj klasę active do nowego slajdu
    heroSlides[currentSlide].classList.add('active');
}

// Zmieniaj slajdy co 5 sekund
if (heroSlides.length > 0) {
    setInterval(showNextSlide, 5000);
}