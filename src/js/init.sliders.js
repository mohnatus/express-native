function toggleSlide(slides, selected) {
  slides.forEach((s) => {
    s.style.display = s.dataset.slide === selected ? 'block' : 'none';
  });
}

function initSlider(slider) {
  const controls = [...slider.querySelectorAll('[data-control]')];
  const container = slider.querySelector('.embla');

  const embla = EmblaCarousel(container)

  embla.on('select', () => {
    let selectedIndex = embla.selectedScrollSnap();
    let selectedSlide = embla.slideNodes()[selectedIndex];
    slider.setAttribute('data-type', selectedSlide.dataset.type)
  })

  controls.forEach((c) => {
    //c.onclick = () => toggleSlide(slides, c.dataset.control);
    c.onclick = () => {
       embla.scrollTo(c.dataset.index);
    }
  });
}

import EmblaCarousel from 'embla-carousel';


export default () => {
  const sliders = [...document.querySelectorAll('[data-slider]')];
  sliders.forEach(initSlider);
};
