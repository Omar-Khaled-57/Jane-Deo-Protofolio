import { translations } from '../data/translations.js';

export function Intro(lang = 'en') {
    const t = translations[lang].intro;
    const meta = translations[lang].meta;

    return `
        <section id="sec1" class="slide flex items-center justify-center relative min-h-screen">
            <div class="text-center z-10 px-6">
                <p class="text-blueVibrant text-sm tracking-[0.3em] mb-6 animate-target ora">${t.label}</p>
                
                <h1 class="text-5xl md:text-7xl portrait:w-[80vw] portrait:mx-auto font-display font-medium mb-4 text-white animate-target ora">
                    ${meta.heroTitle}
                </h1>
                
                <div class="h-px w-24 bg-blueVibrant/50 mx-auto my-8 animate-target ora"></div>
                
                <h2 class="text-xl md:text-2xl font-light text-white/80 animate-target ora">
                    ${t.role1}
                </h2>
                <h2 class="text-lg md:text-xl portrait:w-[80vw] portrait:mx-auto font-light text-white/60 mt-2 animate-target ora">
                    ${t.role2}
                </h2>
                
                <div class="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center text-sm tracking-widest text-white/50 animate-target ora">
                    <span>${t.location}</span>
                    <span class="hidden md:inline text-blueVibrant">•</span>
                    <a href="mailto:janedoe@example.com" class="hover:text-blueVibrant transition-colors" dir="ltr">janedoe@example.com</a>
                    <span class="hidden md:inline text-blueVibrant">•</span>
                    <span dir="ltr">+1 234 567 890</span>
                </div>
                
                <!-- <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-target ora">
                     <p class="text-[10px] text-white/50 tracking-[0.5em] uppercase">${t.scrollHint}</p>
                </div> -->
                
                <div class="animate-target w-screen text-center pt-[5vh] ora">
                    <div class="arrow"></div>
                     <p class="text-[10px] text-white/50 tracking-[0.5em] uppercase">${t.scrollHint}</p>
                </div>
            </div>
        </section>
    `;
}
