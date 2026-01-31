// ============================================
// Smooth Scroll & Navigation Active State
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// Navbar Sticky Behavior
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'slideIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.tech-category, .stat-box, .resume-card').forEach(el => {
    observer.observe(el);
});

// ============================================
// Terminal Typewriter Effect (Optional)
// ============================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment to enable typewriter effect on terminal output
// window.addEventListener('load', () => {
//     const output = document.querySelector('.terminal-output');
//     if (output) {
//         const text = output.textContent;
//         typeWriter(output, text);
//     }
// });

// ============================================
// Active Navigation Link
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Parallax Effect
// ============================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// Utility: Copy to Clipboard
// ============================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// ============================================
// Page Load Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add animation to terminal lines on load
    const terminalLines = document.querySelectorAll('.terminal-line');
    terminalLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.1}s`;
    });

    // Log to console (for fun!)
    console.log('%cWelcome to Kundan\'s DevOps Portfolio! 🚀', 'color: #00d4ff; font-size: 18px; font-weight: bold;');
    console.log('%cLet\'s build something amazing together!', 'color: #8338ec; font-size: 14px;');
});

// ============================================
// Mobile Menu Toggle (if needed in future)
// ============================================

const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
};

// Make toggleMenu globally accessible
window.toggleMenu = toggleMenu;
