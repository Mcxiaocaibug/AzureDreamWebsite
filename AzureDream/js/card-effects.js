document.addEventListener('DOMContentLoaded', () => {
    // Skip animations if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    // Select all cards that need 3D effects
    const cards = document.querySelectorAll('.feature-card, .info-item, .step-card, .requirement-item, .staff-card, .player-card, .fame-card');

    cards.forEach(card => {
        // Mouse move effect (throttled with rAF)
        let ticking = false;
        let lx = 0, ly = 0;
        
        const handle = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Reduced rotation intensity for subtler effect
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((centerX - x) / centerX) * 10;

            // Apply 3D transform with reduced intensity
            card.style.transform = `
                perspective(1200px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(20px)
                scale(1.03)
            `;

            // Add shine effect
            let shine = card.querySelector('.card-shine');
            if (!shine) {
                shine = document.createElement('div');
                shine.classList.add('card-shine');
                card.appendChild(shine);
            }

            const moveX = 50 + ((x - centerX) / centerX) * 50;
            const moveY = 50 + ((y - centerY) / centerY) * 50;
            shine.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)`;
        };

        const onMove = (e) => {
            lx = e.clientX; 
            ly = e.clientY;
            if (!ticking) {
                requestAnimationFrame(() => { 
                    handle({ clientX: lx, clientY: ly }); 
                    ticking = false; 
                });
                ticking = true;
            }
        };
        
        card.addEventListener('pointermove', onMove, { passive: true });

        // Reset on leave
        const resetCard = () => {
            card.style.transform = '';
            const shine = card.querySelector('.card-shine');
            if (shine) {
                shine.remove();
            }
        };
        
        card.addEventListener('pointerleave', resetCard);
        card.addEventListener('pointercancel', resetCard);

        // Press effect
        card.addEventListener('pointerdown', () => {
            card.style.transform = `
                perspective(1200px)
                scale(0.97)
                translateZ(-5px)
            `;
        }, { passive: true });

        // Release effect
        card.addEventListener('pointerup', () => {
            card.style.transform = `
                perspective(1200px)
                scale(1.03)
                translateZ(20px)
            `;
        }, { passive: true });
    });
}); 
