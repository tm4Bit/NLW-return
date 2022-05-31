const nav = document.getElementById('navigation');
const backToTheTop = document.getElementById('toTheTop');
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');

window.addEventListener('scroll', scroll);

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function scroll() {
  onScrollShowMenu();
  scrollShowToTheTopButton();
}

function onScrollShowMenu() {
  if (scrollY > 0) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
}

function scrollShowToTheTopButton() {
  if (scrollY > 500) {
    backToTheTop.classList.add('show');
  } else {
    backToTheTop.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}
