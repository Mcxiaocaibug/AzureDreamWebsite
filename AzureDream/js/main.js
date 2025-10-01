const LIQUID_GLASS_SELECTORS = ['.liquid-glass'];

function hydrateLiquidGlassElements() {
    const elements = document.querySelectorAll(LIQUID_GLASS_SELECTORS.join(', '));

    elements.forEach((element) => {
        if (element.dataset.liquidGlassHydrated === 'true') {
            return;
        }

        element.dataset.liquidGlassHydrated = 'true';

        const effect = document.createElement('div');
        effect.className = 'liquid-glass__effect';

        const tint = document.createElement('div');
        tint.className = 'liquid-glass__tint';

        const shine = document.createElement('div');
        shine.className = 'liquid-glass__shine';

        const fragment = document.createDocumentFragment();
        fragment.append(effect, tint, shine);
        element.insertBefore(fragment, element.firstChild);
    });
}

function hydrateExampleLiquidGlass() {
    const wrappers = document.querySelectorAll('.liquidGlass-wrapper');
    wrappers.forEach((wrap) => {
        if (wrap.dataset.liquidGlassExampleHydrated === 'true') return;
        wrap.dataset.liquidGlassExampleHydrated = 'true';

        const ensureLayer = (className) => {
            let layer = wrap.querySelector(`:scope > .${className}`);
            if (!layer) {
                layer = document.createElement('div');
                layer.className = className;
            }
            return layer;
        };

        const effect = ensureLayer('liquidGlass-effect');
        wrap.insertBefore(effect, wrap.firstChild);

        const tint = ensureLayer('liquidGlass-tint');
        wrap.insertBefore(tint, effect.nextSibling);

        const shine = ensureLayer('liquidGlass-shine');
        wrap.insertBefore(shine, tint.nextSibling);

        let text = wrap.querySelector(':scope > .liquidGlass-text');
        if (!text) {
            text = document.createElement('div');
            text.className = 'liquidGlass-text';
            wrap.appendChild(text);
        }

        const layers = new Set(['liquidGlass-effect', 'liquidGlass-tint', 'liquidGlass-shine', 'liquidGlass-text']);
        const toMove = [];
        Array.from(wrap.childNodes).forEach((n) => {
            if (n.nodeType === 1) {
                const el = n;
                const [firstClass] = el.className ? el.className.split(' ') : [''];
                if (!layers.has(firstClass)) toMove.push(el);
            } else if (n.nodeType === 3 && n.textContent.trim()) {
                toMove.push(n);
            }
        });
        toMove.forEach((n) => text.appendChild(n));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // SVG filter is now embedded in HTML, no need to create it dynamically
    hydrateLiquidGlassElements();
    hydrateExampleLiquidGlass();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section (throttled via rAF and respects reduced motion)
    const hero = document.querySelector('.hero-content');
    if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let ticking = false;
        let lastX = 0, lastY = 0;
        const onMove = (e) => {
            lastX = (e.clientX / window.innerWidth - 0.5) * 2;
            lastY = (e.clientY / window.innerHeight - 0.5) * 2;
            if (!ticking) {
                requestAnimationFrame(() => {
                    hero.style.transform = `translate(${lastX * 12}px, ${lastY * 12}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('mousemove', onMove, { passive: true });
    }

    // Add active class to current navigation item
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 停止观察，确保动画只播放一次
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Copy server address
    const copyBtn = document.getElementById('copy-btn');
    const serverAddress = document.getElementById('server-address');

    if (copyBtn && serverAddress) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(serverAddress.innerText).then(() => {
                copyBtn.innerText = '已复制!';
                setTimeout(() => {
                    copyBtn.innerText = '复制地址';
                }, 2000);
            }).catch(err => {
                console.error('无法复制地址: ', err);
            });
        });
    }
});
