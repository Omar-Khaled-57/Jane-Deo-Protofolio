import { translations } from '../data/translations.js';

export function PreviousWorks(lang = 'en') {
    const t = translations[lang].previousWorks;

    return `
        <section id="sec5" class="slide">
             <div class="pb-20 w-[80%] mx-auto">
                <div class="max-w-6xl px-8 w-full mx-auto">
                <span class="text-blueVibrant text-xs tracking-[0.4em] block mb-8 animate-target ora uppercase">${t.label}</span>
                
                <h2 class="text-4xl md:text-5xl font-display mb-12 animate-target ora uppercase">
                    ${t.title}
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    ${t.items.map((item, index) => `
                        <div class="group relative aspect-video bg-white/5 border border-white/10 hover:border-blueVibrant/30 transition-all duration-500 animate-target ora overflow-hidden cursor-pointer" style="animation-delay: ${0.2 + index * 0.1}s">
                            <!-- Placeholder Image Area -->
                            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                            
                            <!-- Content Overlay -->
                            <div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-medium text-white mb-1">${item}</h3>
                                <div class="text-blueVibrant text-xs tracking-widest uppercase">View Details</div>
                            </div>
                            
                            <!-- Center Icon for Empty State -->
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 group-hover:text-blueVibrant/20 transition-colors">
                                <i class="fi fi-rr-picture text-5xl"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
             </div>
         </div>
        </section>
    `;
}
