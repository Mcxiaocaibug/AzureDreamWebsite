document.addEventListener('DOMContentLoaded', () => {
    // 选择所有需要添加3D效果的卡片
    const cards = document.querySelectorAll('.feature-card, .info-item, .step-card, .requirement-item, .staff-card, .player-card, .fame-card');

    cards.forEach(card => {
        // 鼠标移动效果
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 25; // 增加到25度
            const rotateY = ((centerX - x) / centerX) * 25; // 增加到25度

            // 添加3D变换效果
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(30px)
                scale(1.05)
            `;

            // 添加光影效果
            const shine = card.querySelector('.card-shine') || document.createElement('div');
            if (!card.querySelector('.card-shine')) {
                shine.classList.add('card-shine');
                card.appendChild(shine);
            }

            const moveX = ((x - centerX) / centerX) * 200; // 增加光影范围
            const moveY = ((y - centerY) / centerY) * 200;
            shine.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`;
        });

        // 鼠标离开效果
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
            const shine = card.querySelector('.card-shine');
            if (shine) {
                shine.remove();
            }
        });

        // 点击效果
        card.addEventListener('mousedown', () => {
            card.style.transform = `
                perspective(1000px)
                scale(0.95)
                translateZ(-10px)
                rotateX(2deg)
            `;
        });

        // 释放点击效果
        card.addEventListener('mouseup', () => {
            card.style.transform = `
                perspective(1000px)
                scale(1.05)
                translateZ(30px)
            `;
        });
    });
}); 