document.addEventListener('DOMContentLoaded', () => {
    // Initially show all staff cards
    setTimeout(() => {
        document.querySelectorAll('.staff-card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
    
    // Parallax effect for staff cards
    const cards = document.querySelectorAll('.staff-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;

            // Add shine effect
            const shine = card.querySelector('.shine') || document.createElement('div');
            if (!card.querySelector('.shine')) {
                shine.classList.add('shine');
                card.appendChild(shine);
            }

            const moveX = ((x - centerX) / centerX) * 50;
            const moveY = ((y - centerY) / centerY) * 50;
            shine.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
            const shine = card.querySelector('.shine');
            if (shine) {
                shine.remove();
            }
        });
    });

    // Hover effect for contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px) scale(1.05)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'none';
        });
    });

    // Hover effect for responsibilities
    const responsibilities = document.querySelectorAll('.responsibility');
    responsibilities.forEach(responsibility => {
        responsibility.addEventListener('mouseenter', () => {
            responsibility.style.transform = 'scale(1.1)';
            responsibility.style.background = 'rgba(255, 255, 255, 0.2)';
            responsibility.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        });

        responsibility.addEventListener('mouseleave', () => {
            responsibility.style.transform = 'scale(1)';
            responsibility.style.background = 'rgba(255, 255, 255, 0.1)';
            responsibility.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (!entry.target.classList.contains('staff-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });

    // Apply button hover effect
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('mouseenter', () => {
            applyBtn.style.transform = 'translateY(-2px) scale(1.05)';
            applyBtn.style.boxShadow = '0 5px 20px rgba(255, 255, 255, 0.4)';
        });

        applyBtn.addEventListener('mouseleave', () => {
            applyBtn.style.transform = 'none';
            applyBtn.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.3)';
        });
    }
}); 