function onScroll() {
  onScrollShowMenu()
  scrollShowToTheTopButton()
}

function onScrollShowMenu() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function scrollShowToTheTopButton() {
  if (scrollY > 500) {
    toTheTop.classList.add('show')
  } else {
    toTheTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
