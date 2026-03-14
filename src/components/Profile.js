import { translations } from '../data/translations.js';

export function Profile(lang = 'en') {
    const t = translations[lang].profile;

    return `
        <section id="sec2" class="slide">
            <div class="flex items-center justify-center h-screen">
                <div class="max-w-4xl px-8 ml-[10vw]">
                    <span class="text-blueVibrant text-xs tracking-[0.4em] block mb-8 animate-target ora uppercase">${t.label}</span>
                    
                    <h2 class="text-4xl md:text-5xl font-display mb-12 animate-target ora uppercase">
                        ${t.title}
                    </h2>
                    
                    <div class="text-lg md:text-2xl leading-relaxed font-light text-white/80 space-y-8 animate-target ora">
                        <p>
                            <span class="text-blueVibrant text-3xl float-start me-2 font-serif">${t.p1_start}</span>
                            ${t.p1_rest}
                        </p>
                        <p>
                            ${t.p2}
                        </p>
                    </div>
                    
                    <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-target ora">
                        <div class="border-s border-blueVibrant/30 ps-4">
                            <div class="text-3xl font-display text-blueVibrant" dir="ltr">4+</div>
                            <div class="text-xs text-white/60 tracking-widest mt-1 uppercase">${t.stats.exp}</div>
                        </div>
                        <div class="border-s border-blueVibrant/30 ps-4">
                            <div class="text-3xl font-display text-blueVibrant" dir="ltr">100+</div>
                            <div class="text-xs text-white/60 tracking-widest mt-1 uppercase">${t.stats.deals}</div>
                        </div>
                        <div class="border-s border-blueVibrant/30 ps-4">
                            <div class="text-3xl font-display text-blueVibrant" dir="ltr">20+</div>
                            <div class="text-xs text-white/60 tracking-widest mt-1 uppercase">${t.stats.partners}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
