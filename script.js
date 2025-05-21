// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});

// Mobile navigation toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Lazy loading for images
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                img.setAttribute('src', src);
                img.classList.add('fade-in');
                
                observer.disconnect();
            }
        });
    });
    
    io.observe(target);
};

const images = document.querySelectorAll('[data-src]');
images.forEach(lazyLoad);
