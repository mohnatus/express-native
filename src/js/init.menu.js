

export default () => {
  const opener = document.querySelector('.top-menu__toggler');
  const closer = document.querySelector('.mobile-menu__toggler');
  const menu = document.querySelector('.mobile-menu');

  const close = () => menu.classList.remove('opened');
  const open = () => menu.classList.add('opened');

  opener.onclick = open;
  closer.onclick = close;

  menu.onclick = e => {
    console.log(e.target.tagName)
    if (e.target.tagName.toUpperCase() === "A") {

      close();
    }
  }

  menu.querySelector('.mobile-menu__mask').onclick = close;
}