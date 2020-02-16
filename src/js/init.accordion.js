import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


export default el => {
  const accordion = document.querySelector('[data-accordion]');
  new Accordion('[data-accordion]', {
    duration: 300,
    closeOthers: true,
    elementClass: 'accordion-section',
    questionClass: 'accordion-section__header',
    answerClass: 'accordion-section__content',
    showItem: true
  });
}
