// Smooth Scroll Navigation
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Active Link Tracking
const activeLinkTracking = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.classList.contains(current)) {
                link.classList.add('active');
            }
        });
    });
};

// Hamburger Menu
const toggleHamburgerMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

// Form Handling
const handleFormSubmission = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form handling logic here
        alert('Form submitted!');
    });
};

// Notifications
const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
};

// Scroll Animations
const scrollAnimations = () => {
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Parallax Effects
const parallaxEffect = () => {
    const parallax = document.querySelector('.parallax');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
};

// Initialization
const init = () => {
    smoothScroll();
    activeLinkTracking();
    toggleHamburgerMenu();
    handleFormSubmission();
    scrollAnimations();
    parallaxEffect();
};

document.addEventListener('DOMContentLoaded', init);