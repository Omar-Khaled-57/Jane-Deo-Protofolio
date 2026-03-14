// Canvas Wave Animation

export function initCanvasWave(canvasId = 'bg-canvas') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    resize();
    window.addEventListener('resize', resize);

    let time = 0;

    const layers = [
        { baseY: 0.15, amp: 38, freq: 0.0032, speed: 0.018, alpha: 0.9, width: 3.8 },
        { baseY: 0.32, amp: 52, freq: 0.0048, speed: 0.027, alpha: 0.9, width: 4.4 },
        { baseY: 0.58, amp: 29, freq: 0.0029, speed: 0.014, alpha: 0.9, width: 5.5 },
        { baseY: 0.81, amp: 65, freq: 0.0061, speed: 0.034, alpha: 0.9, width: 6.2 }
    ];

    function draw() {
        ctx.clearRect(0, 0, width, height);

        layers.forEach(layer => {
            ctx.strokeStyle = `rgba(29, 78, 225, ${layer.alpha})`;
            ctx.lineWidth = layer.width;

            ctx.shadowBlur = 25;
            ctx.shadowColor = 'hsla(224, 76%, 48%, 1.00)';

            ctx.beginPath();

            for (let x = 0; x <= width; x += 6) {
                const y = height * layer.baseY +
                    Math.sin(x * layer.freq + time * layer.speed) * layer.amp +
                    Math.cos(x * layer.freq * 1.3) * (layer.amp * 0.4);
                ctx.lineTo(x, y);
            }

            ctx.stroke();
        });

        time += 1.1;
        requestAnimationFrame(draw);
    }

    draw();
}
