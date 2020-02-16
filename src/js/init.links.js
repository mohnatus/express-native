const orderScreen = document.querySelector('[data-screen="order"]');
const orderForm = orderScreen.querySelector('form');

function toOrder(type) {
  orderScreen.scrollIntoView();
  orderForm.elements.orderType.value = type;
}

export default () => {
  let orderScrollers = [...document.querySelectorAll('[data-to-order]')];
  orderScrollers.forEach(s => {
    s.onclick = () => {
      toOrder(s.dataset.toOrder);
    }
  })
}