document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const playerGrids = document.querySelectorAll('.player-grid');

    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and grids
            tabs.forEach(t => t.classList.remove('active'));
            playerGrids.forEach(grid => grid.classList.remove('active'));

            // Add active class to clicked tab and corresponding grid
            tab.classList.add('active');
            const category = tab.dataset.category;
            document.getElementById(category).classList.add('active');
        });
    });

    // Parallax effect for player cards
    const cards = document.querySelectorAll('.player-card, .fame-card');
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
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
        });
    });

    // Achievement hover effect
    const achievements = document.querySelectorAll('.achievement');
    achievements.forEach(achievement => {
        achievement.addEventListener('mouseenter', () => {
            achievement.style.transform = 'scale(1.1)';
            achievement.style.background = 'rgba(0, 122, 255, 0.3)';
        });

        achievement.addEventListener('mouseleave', () => {
            achievement.style.transform = 'scale(1)';
            achievement.style.background = 'rgba(0, 122, 255, 0.2)';
        });
    });

    // Smooth scroll for section navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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
                if (entry.target.classList.contains('player-card') || 
                    entry.target.classList.contains('fame-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .player-card, .fame-card').forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}); 