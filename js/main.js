// Language Toggle
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

// Load saved language preference
if (localStorage.getItem('lang')) {
    currentLang = localStorage.getItem('lang');
    updateLanguage(currentLang);
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');
        if (selectedLang !== currentLang) {
            currentLang = selectedLang;
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);
        }
    });
});

function updateLanguage(lang) {
    // Update active state of buttons
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Update all elements with data-en and data-es attributes
    const elements = document.querySelectorAll('[data-en][data-es]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    // Update document language
    document.documentElement.lang = lang;
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current page link
const currentPage = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.service-card, .feature-item, .stat-item, .blog-card, .team-card, .value-item, .service-detail-card, .mv-card, .faq-item, .testimonial-card');
animatedElements.forEach(el => observer.observe(el));

// Animated Counters
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Observe stat numbers for counter animation
const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent);
            if (!isNaN(target)) {
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(num => counterObserver.observe(num));

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Handle anchor links for service sections
function handleServiceAnchor() {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            // Wait for page to load and animations to start
            setTimeout(() => {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Add highlight effect
                targetElement.style.transition = 'box-shadow 0.5s ease';
                targetElement.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';

                setTimeout(() => {
                    targetElement.style.boxShadow = '';
                }, 2000);
            }, 500);
        }
    }
}

// Run on page load
window.addEventListener('load', handleServiceAnchor);

// Also run when hash changes (for same-page navigation)
window.addEventListener('hashchange', handleServiceAnchor);