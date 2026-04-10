// Create stars background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Create floating hearts
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1';
        heart.style.opacity = '0.7';
        
        document.body.appendChild(heart);
        
        let top = -30;
        const duration = Math.random() * 3 + 3;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = elapsed / duration;
            
            if (progress >= 1) {
                heart.remove();
                return;
            }
            
            heart.style.top = (-30 + progress * window.innerHeight) + 'px';
            heart.style.left = (parseFloat(heart.style.left) + Math.sin(elapsed) * 2) + 'px';
            heart.style.opacity = (1 - progress) * 0.7;
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }, 500);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createFloatingHearts();
});
