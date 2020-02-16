import initAccordion from './js/init.accordion';
import initLinks from './js/init.links';
import initMenu from './js/init.menu';
import initOrder from './js/init.order';
import initScroll from './js/init.scroll';
import initSliders from './js/init.sliders';
import './scss/style.scss';



initScroll({
  offsetValue: 100,
  watch: [
    {
      top: 150,
      before: () => {
        document.body.classList.add('on-hello')
      },
      after: () => {
        document.body.classList.remove('on-hello')
      }
    }
  ]
});
initSliders();
initOrder();
initAccordion();
initMenu();
initLinks();

console.log("ADVERT PAGE")
