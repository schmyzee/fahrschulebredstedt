// Import Global Styles
import './style.css';

// Import Component Styles
import './components/header.css';
import './components/hero.css';
import './components/problem.css';
import './components/solution.css';
import './components/steps.css';
import './components/classes.css';
import './components/intensiv.css';
import './components/reviews.css';
import './components/team.css';
import './components/faq.css';
import './components/contact.css';
import './components/footer.css';

// Import HTML Templates as raw strings (Vite feature)
import headerHtml from './components/header.html?raw';
import heroHtml from './components/hero.html?raw';
import problemHtml from './components/problem.html?raw';
import solutionHtml from './components/solution.html?raw';
import stepsHtml from './components/steps.html?raw';
import classesHtml from './components/classes.html?raw';
import intensivHtml from './components/intensiv.html?raw';
import reviewsHtml from './components/reviews.html?raw';
import teamHtml from './components/team.html?raw';
import faqHtml from './components/faq.html?raw';
import contactHtml from './components/contact.html?raw';
import footerHtml from './components/footer.html?raw';

// Import Logic Initializers
import { initHeader } from './components/header.js';
import { initSteps } from './components/steps.js';
import { initClasses } from './components/classes.js';
import { initFaq } from './components/faq.js';
import { initContact } from './components/contact.js';
import { initScrollReveal } from './utils/motion.js';

// Assemble the Page DOM
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    ${headerHtml}
    <main>
      ${heroHtml}
      ${problemHtml}
      ${solutionHtml}
      ${stepsHtml}
      ${classesHtml}
      ${intensivHtml}
      ${reviewsHtml}
      ${teamHtml}
      ${faqHtml}
      ${contactHtml}
    </main>
    ${footerHtml}
  `;
  
  // Initialize Component Handlers & Scroll Animations
  initHeader();
  initSteps();
  initClasses();
  initFaq();
  initContact();
  initScrollReveal();
}
