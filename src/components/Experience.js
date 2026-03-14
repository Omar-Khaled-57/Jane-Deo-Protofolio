import { translations } from '../data/translations.js';

export function Experience(lang = 'en') {
    const t = translations[lang].experience;

    return `
        <section id="sec4" class="slide">
            <div class="pb-20">
                <div class="max-w-6xl px-8 w-full w-[80%] mx-auto">
                <span class="text-blueVibrant text-xs tracking-[0.4em] block mb-8 animate-target ora uppercase">${t.label}</span>
                
                <h2 class="text-4xl md:text-5xl font-display mb-12 animate-target ora uppercase">
                    ${t.title}
                </h2>

                <div class="grid md:grid-cols-2 gap-12">
                    <!-- Role 1 -->
                    <div class="group relative bg-white/5 border border-white/10 p-8 hover:border-blueVibrant/30 transition-all duration-500 animate-target ora">
                        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity rtl:right-auto rtl:left-0">
                            <span class="text-6xl text-blueVibrant" dir="ltr">01</span>
                        </div>
                        
                        <div class="text-blueVibrant text-sm tracking-widest mb-2 uppercase">${t.role1.period}</div>
                        <h3 class="text-2xl font-medium mb-1">${t.role1.title}</h3>
                        <div class="text-white/60 text-sm mb-6 uppercase">${t.role1.company}</div>
                        
                        <ul class="space-y-3 text-white/80 font-light text-sm md:text-base">
                            ${t.role1.points.map(point => `
                                <li class="flex items-start"><span class="text-blueVibrant me-2">•</span>${point}</li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Role 2 -->
                    <div class="group relative bg-white/5 border border-white/10 p-8 hover:border-blueVibrant/30 transition-all duration-500 animate-target ora" style="animation-delay: 0.3s">
                         <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity rtl:right-auto rtl:left-0">
                            <span class="text-6xl text-blueVibrant" dir="ltr">02</span>
                        </div>
                        
                        <div class="text-blueVibrant text-sm tracking-widest mb-2 uppercase">${t.role2.period}</div>
                        <h3 class="text-2xl font-medium mb-1">${t.role2.title}</h3>
                        <div class="text-white/60 text-sm mb-6 uppercase">${t.role2.company}</div>
                        
                        <ul class="space-y-3 text-white/80 font-light text-sm md:text-base">
                            ${t.role2.points.map(point => `
                                <li class="flex items-start"><span class="text-blueVibrant me-2">•</span>${point}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
    `;
}
