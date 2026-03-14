import { translations } from '../data/translations.js';

export function CertificatesGallery(lang = 'en') {
    const t = translations[lang].certificatesGallery;

    return `
        <section id="sec6" class="slide">
             <div class="pb-20">
                <div class="max-w-6xl px-8 w-[80%] mx-auto">
                <span class="text-blueVibrant text-xs tracking-[0.4em] block mb-8 animate-target ora uppercase">${t.label}</span>
                
                <h2 class="text-4xl md:text-5xl font-display mb-12 animate-target ora uppercase">
                    ${t.title}
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${t.items.map((item, index) => `
                        <div class="flex flex-col animate-target ora" style="animation-delay: ${0.2 + index * 0.1}s">
                            <div class="relative aspect-[3/4] bg-white/5 border border-white/10 p-4 hover:border-blueVibrant/30 transition-all duration-300 group cursor-pointer">
                                <!-- Certificate Placeholder -->
                                <div class="w-full h-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors">
                                    <i class="fi fi-rr-diploma text-4xl text-white/20 group-hover:text-blueVibrant/40 transition-colors"></i>
                                </div>
                                
                                <!-- Corner Accents -->
                                <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-blueVibrant/0 group-hover:border-blueVibrant/50 transition-colors"></div>
                                <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-blueVibrant/0 group-hover:border-blueVibrant/50 transition-colors"></div>
                                <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blueVibrant/0 group-hover:border-blueVibrant/50 transition-colors"></div>
                                <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blueVibrant/0 group-hover:border-blueVibrant/50 transition-colors"></div>
                            </div>
                            
                            <h3 class="text-center mt-6 text-lg font-light text-white/90 font-display tracking-wide">${item.title}</h3>
                        </div>
                    `).join('')}
                </div>
             </div>
         </div>
        </section>
    `;
}
