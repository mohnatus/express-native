const popup = document.querySelector('.success-popup');

const closePopup = () => popup.classList.remove('opened');
const openPopup = () => popup.classList.add('opened');

popup.onclick = (e) => {
  let isBody = e.target.closest('.popup__body');
  if (!isBody) closePopup();
};

export { closePopup, openPopup };