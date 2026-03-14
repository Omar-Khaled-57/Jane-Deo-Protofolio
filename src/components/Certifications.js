import { translations } from '../data/translations.js';

export function Certifications(lang = 'en') {
    const t = translations[lang].certifications;

    return `
        <section id="sec7" class="slide">
            <div class="pb-20 min-h-screen flex items-center">
                <div class="max-w-4xl px-8 w-full w-[80%] mx-auto">
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span class="text-blueVibrant text-xs tracking-[0.4em] block mb-6 animate-target ora uppercase">${t.label}</span>
                        <h2 class="text-4xl md:text-5xl font-display mb-8 animate-target ora uppercase">
                            ${t.title}
                        </h2>
                        
                        <div class="space-y-8 animate-target ora">
                            ${t.items.map(item => `
                                <div class="border-s-2 border-blueVibrant ps-6 py-2">
                                    <div class="text-lg font-medium">${item.title}</div>
                                    <div class="text-white/50 text-sm mt-1">${item.year}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="relative animate-target ora">
                         <!-- Decorative elements -->
                         <div class="absolute -top-10 -right-10 w-40 h-40 border border-blueVibrant/20 rounded-full rtl:right-auto rtl:-left-10"></div>
                         <div class="absolute -bottom-10 -left-10 w-20 h-20 border border-blueVibrant/20 rounded-full rtl:left-auto rtl:-right-10"></div>
                         
                         <div class="bg-white/5 backdrop-blur-md p-8 border border-white/10 text-center relative z-10">
                            <span class="text-blueVibrant text-xs tracking-[0.4em] block mb-6 uppercase">${t.education.label}</span>
                            <h3 class="text-2xl font-display mb-2">${t.education.degree}</h3>
                            <div class="text-xl font-light text-white/80">${t.education.uni}</div>
                            <div class="text-blueVibrant/60 text-sm mt-4 tracking-widest uppercase">${t.education.class}</div>
                         </div>
                    </div>
                </div>
                
                 <div class="mt-20 text-center animate-target ora">
                    <p class="text-white/60 text-sm tracking-widest mb-4 uppercase">${t.connect.label}</p>
                    <div class="flex justify-center gap-8">
                         <a href="mailto:janedoe@example.com" class="text-2xl text-white hover:text-blueVibrant transition-colors" aria-label="Email"><i class="fi fi-rr-envelope"></i> ${t.connect.email}</a>
                         <a href="tel:+1234567890" class="text-2xl text-white hover:text-blueVibrant transition-colors" aria-label="Call"><i class="fi fi-rr-phone-call"></i> ${t.connect.call}</a>
                    </div>
                    <!-- <div>
                        <h3 class="text-xl mt-10 mb-6 font-sans text-white/80">POWERED BY</h3>
                        <img src="/us4.jpg" class="landscape:w-[10vw] w-[50vw] mx-auto" alt="DEVORA">
                    </div> -->
                </div>
            </div>
        </div>
        </section>
    `;
}
