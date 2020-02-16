let lastScrollTop = document.documentElement.scrollTop;
let watchElements = [];

let screens = [];
let currentScreenIndex;
let offset;

function check() {
  let newScrollTop = document.documentElement.scrollTop;
  watchElements.forEach(e => {
    if (newScrollTop > lastScrollTop) { // прокрутка вниз
      if (
        e.top >= lastScrollTop // позиция не была пройдена раньше
        && e.top <= newScrollTop // позиция пройдена сейчас
      ) {

        e.after();
      }
    } else { // прокрутка вверх
      if (
        e.top <= lastScrollTop // позиция не была пройдена раньше
        && e.top >= newScrollTop // позиция пройдена сейчас
      ) {
        e.before();
      }
    }
  });
  lastScrollTop = newScrollTop;
}

function getCurrentScreenIndex() {
  for (let i = 0; i < screens.length; i++) {
    let s = screens[i];
    let rect = s.getBoundingClientRect();

    if (rect.bottom > offset) {
      return i;
    }
  }
}

function addScreenToHistory(screenIndex) {
  let screen = screens[screenIndex];
  if (!screen) return;
  let screenName = screen.dataset.screen;
  history.pushState({}, null, `#${screenName}`)
}

function scrollToNextScreen() {
  scrollToScreen(currentScreenIndex + 1);
}

function scrollToScreen(screenIndex) {
  let screen = screens[screenIndex];
  if (!screen) return;

  screen.scrollIntoView();
}

function changeUIByScreen(screenIndex) {

  let screen = screens[screenIndex];
  if (!screen) return;
  let screenName = screen.dataset.screen;

  document.body.setAttribute('data-screen', screenName);
}

export default ({offsetValue = 0, watch = []}) => {

  offset = offsetValue;
  watchElements = watch;
  screens = [...document.querySelectorAll('[data-screen]')];

  currentScreenIndex = getCurrentScreenIndex();
  changeUIByScreen(currentScreenIndex);

  watch.forEach(e => {
    if (e.top < lastScrollTop) e.after();
    else e.before();
  })

  let scroller = document.querySelector('.scroller');
  scroller.onclick = () => {
    scrollToNextScreen();
  }

  document.addEventListener(
    'scroll',
    (e) => {
      check();

      let screenIndex = getCurrentScreenIndex();
      if (currentScreenIndex === screenIndex) return;
      currentScreenIndex = screenIndex;
      addScreenToHistory(screenIndex);
      changeUIByScreen(screenIndex);
    },
    {
      passive: true,
    },
  );
};
