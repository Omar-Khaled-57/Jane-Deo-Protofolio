import { translations } from '../data/translations.js';

export function CoreExpertise(lang = 'en') {
    const t = translations[lang].expertise;

    return `
        <section id="sec3" class="slide">
        <div class="w-[95%] mx-auto">
            <div class="max-w-5xl px-8 w-full">
                <span class="text-blueVibrant text-xs tracking-[0.4em] block mb-8 animate-target ora uppercase">${t.label}</span>
                <h2 class="text-4xl md:text-5xl font-display mb-16 animate-target ora uppercase">
                    ${t.title}
                </h2>
            </div>

            <div class="grid ml-[15%] mr-[5%] my-auto md:grid-cols-2 gap-x-16 gap-y-8">
                ${t.list.map((skill, index) => `
                    <div class="flex items-start group animate-target ora" style="animation-delay: ${0.2 + index * 0.1}s">
                        <span class="text-blueVibrant me-4 mt-1 text-xs">◆</span>
                        <h3 class="text-xl font-light text-white/80 group-hover:text-white transition-colors duration-300">
                            ${skill}
                        </h3>
                    </div>
                `).join('')}
                </div>
                
                <div class="my-20 mx-auto p-8 border border-white/10 bg-white/5 backdrop-blur-sm w-[80%] rounded animate-target ora">
                    <p class="text-center italic text-white/60 font-serif text-lg">
                        ${t.quote}
                    </p>
                </div>
             </div>
        </div>
        </section>
    `;
}
