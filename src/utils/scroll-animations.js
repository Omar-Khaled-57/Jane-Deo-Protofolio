// Scroll Animation System
// Ported from Devora/Atelier and adapted for Modules

export function initScrollAnimations() {
    console.log("Initializing Scroll Animations...");

    const sections = document.querySelectorAll('.slide');
    if (sections.length === 0) {
        console.warn("No .slide elements found!");
        return;
    }

    let currentSlide = 0;
    let isTransitioning = false;

    // Create Indicators
    const indicatorsContainer = document.querySelector('.slide-indicators') || document.createElement('div');
    if (!document.querySelector('.slide-indicators')) {
        indicatorsContainer.className = 'slide-indicators';
        document.body.appendChild(indicatorsContainer);
    }

    indicatorsContainer.innerHTML = ''; // Clear existing

    sections.forEach((_, i) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (i === 0 ? ' active' : '');
        indicator.setAttribute('data-slide', i);
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    });

    const indicatorDots = document.querySelectorAll('.indicator');

    // Main slide navigation function
    function goToSlide(index) {
        if (isTransitioning || index < 0 || index >= sections.length) return;

        // Don't transition if already on the slide (unless forcing?)
        if (index === currentSlide && sections[currentSlide].classList.contains('active')) return;

        isTransitioning = true;

        // Animate out current slide elements
        const currentSection = sections[currentSlide];
        const currentElements = currentSection.querySelectorAll('h1, h2, h3, p, img, .animate-target, ul, li');

        currentElements.forEach(el => {
            el.classList.add('ora-exit');
            el.classList.remove('ora');
        });

        // Add class to body to prevent scrolling during transition
        document.body.classList.add('scroll-animated');

        setTimeout(() => {
            // Hide current slide
            currentSection.classList.remove('active');
            currentElements.forEach(el => el.classList.remove('ora-exit'));

            // Show new slide
            const newSlide = sections[index];
            newSlide.classList.add('active');

            // Animate in new slide elements
            const newElements = newSlide.querySelectorAll('h1, h2, h3, p, img, .animate-target, ul, li');

            // Apply delay manually if needed, or rely on CSS
            newElements.forEach((el, i) => {
                el.classList.remove('ora-exit');
                el.classList.add('ora');
                // Optional: set custom delay based on index for stagger
                el.style.animationDelay = `${i * 0.1}s`;
            });

            // Update indicators
            indicatorDots.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });

            currentSlide = index;
            setTimeout(() => {
                isTransitioning = false;
            }, 800); // Wait for entrance animation
        }, 600); // Wait for exit animation
    }

    // State for edge pause
    let edgeBarrierMap = { up: 0, down: 0 };
    const EDGE_DELAY = 500; // ms to wait at edge before allowing switch

    // Helper to change slide based on scroll direction
    function tryChangeSlide(direction) {
        if (isTransitioning) return;

        const slide = sections[currentSlide];

        // Use more precise calculation
        const scrollTop = slide.scrollTop;
        const scrollHeight = slide.scrollHeight;
        const clientHeight = slide.clientHeight;

        // Tolerance for floating point/zoomed displays
        const atTop = scrollTop <= 5;
        const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 5;

        // If content fits (not scrollable), treat as always at edge
        const isScrollable = scrollHeight > clientHeight + 10;

        if (direction === 'down') {
            if (!isScrollable) {
                // Not scrollable, immediate switch
                if (currentSlide < sections.length - 1) goToSlide(currentSlide + 1);
            } else if (atBottom) {
                // At bottom edge. Check barrier.
                const now = Date.now();
                if (edgeBarrierMap.down === 0) {
                    // First time hitting/detecting bottom. Set barrier.
                    edgeBarrierMap.down = now;
                    // console.log('Hit bottom, barrier set');
                } else if (now - edgeBarrierMap.down > EDGE_DELAY) {
                    // Barrier elapsed. Allow switch.
                    if (currentSlide < sections.length - 1) {
                        goToSlide(currentSlide + 1);
                        edgeBarrierMap.down = 0; // Reset
                    }
                }
            } else {
                // Not at bottom. clear barrier.
                edgeBarrierMap.down = 0;
            }
        } else if (direction === 'up') {
            if (!isScrollable) {
                if (currentSlide > 0) goToSlide(currentSlide - 1);
            } else if (atTop) {
                // At top edge. Check barrier.
                const now = Date.now();
                if (edgeBarrierMap.up === 0) {
                    edgeBarrierMap.up = now;
                    // console.log('Hit top, barrier set');
                } else if (now - edgeBarrierMap.up > EDGE_DELAY) {
                    if (currentSlide > 0) {
                        goToSlide(currentSlide - 1);
                        edgeBarrierMap.up = 0;
                    }
                }
            } else {
                // Not at top. clear barrier.
                edgeBarrierMap.up = 0;
            }
        }
    }

    // Wheel event
    window.addEventListener('wheel', (e) => {
        // Debounce or threshold?
        if (Math.abs(e.deltaY) < 10) return;

        if (e.deltaY > 0) tryChangeSlide('down');
        else if (e.deltaY < 0) tryChangeSlide('up');
    }, { passive: false });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') tryChangeSlide('down');
        else if (e.key === 'ArrowUp') tryChangeSlide('up');
    });

    // Touch support
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        if (Math.abs(diff) > 50) {
            tryChangeSlide(diff > 0 ? 'down' : 'up');
        }
    }, { passive: true });

    // Initialize first slide state
    sections[0].classList.add('active');
    const firstElements = sections[0].querySelectorAll('h1, h2, h3, p, img, .animate-target, ul, li');
    firstElements.forEach((el, i) => {
        el.classList.add('ora');
        el.style.animationDelay = `${i * 0.1}s`;
    });
}
