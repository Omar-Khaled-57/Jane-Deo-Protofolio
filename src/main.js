import './style.css'
import { initScrollAnimations } from './utils/scroll-animations.js'
import { initCanvasWave } from './utils/canvas-wave.js'
import { translations } from './data/translations.js'

// Import Components
import { Intro } from './components/Intro.js'
import { Profile } from './components/Profile.js'
import { CoreExpertise } from './components/CoreExpertise.js'
import { Experience } from './components/Experience.js'
import { PreviousWorks } from './components/PreviousWorks.js'
import { CertificatesGallery } from './components/CertificatesGallery.js'
import { Certifications } from './components/Certifications.js'

let currentLang = localStorage.getItem('lang') || 'en';

function renderApp(lang) {
  // Update Document Logic
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = translations[lang].meta.title;

  // Render Components
  document.querySelector('#app').innerHTML = `
      <div class="slides-container">
        ${Intro(lang)}
        ${Profile(lang)}
        ${CoreExpertise(lang)}
        ${Experience(lang)}
        ${PreviousWorks(lang)}
        ${CertificatesGallery(lang)}
        ${Certifications(lang)}
      </div>
      
      <!-- Language Switcher -->
      <div class="fixed top-6 right-6 z-50 flex gap-2 rtl:right-auto rtl:left-6">
        <button id="lang-en" class="text-xs tracking-widest px-3 py-1 border border-white/20 hover:border-blueVibrant hover:text-blueVibrant transition-colors ${lang === 'en' ? 'bg-blueVibrant/20 text-blueVibrant border-blueVibrant' : 'text-white/50'}">EN</button>
        <button id="lang-ar" class="text-xs px-3 py-1 border border-white/20 hover:border-blueVibrant hover:text-blueVibrant transition-colors font-ar ${lang === 'ar' ? 'bg-blueVibrant/20 text-blueVibrant border-blueVibrant' : 'text-white/50'}">عربي</button>
      </div>
    `;

  // Re-initialize systems
  initScrollAnimations();

  // Bind Events
  document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
  document.getElementById('lang-ar').addEventListener('click', () => setLanguage('ar'));
}

function setLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  // Add fade out effect? For now direct re-render
  renderApp(lang);
}

// Initialize logical systems
document.addEventListener('DOMContentLoaded', () => {
  initCanvasWave('bg-canvas');
  renderApp(currentLang);
});
