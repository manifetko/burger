const hamburger = document.querySelector('.hamburger');
const nav__list = document.querySelector('.nav__list');

hamburger.addEventListener('click', (e) => {
  if (hamburger.classList.contains('hamburger--active')) {
    hamburger.classList.remove('hamburger--active');
    nav__list.classList.remove('nav__list--active');
  } else {
    hamburger.classList.add('hamburger--active');
    nav__list.classList.add('nav__list--active');
  }
})
// for hamburger
const composition = document.querySelector('.off-images');
const burgers__composition = document.querySelector('.burgers__composition');
const composition_close = document.querySelector('.composition-close');
burgers__composition.addEventListener('click', (e) => {
  if (composition.classList.contains('composition--active')) {
    composition.classList.remove('composition--active');
  } else {
    composition.classList.add('composition--active');
  }
})
composition_close.addEventListener('click', (e) => {
  composition.classList.remove('composition--active');
})
// for composition
const menu__items = document.querySelectorAll('.menu__item');
const menu__accordeon = document.querySelector('.menu__accordeon');
menu__items.forEach(active_all => {
  active_all.addEventListener('click', menu_click => {
    if (menu__accordeon.classList.contains('menu__accordeon--active')) {
    }
    else {
      menu__accordeon.classList.add('menu__accordeon--active');
    }
    if (active_all.classList.contains('menu__item--active')) {
      active_all.classList.remove('menu__item--active');
      menu__accordeon.classList.remove('menu__accordeon--active');
    } else {
      menu__items.forEach(active_each => {
        if (active_each.classList.contains('menu__item--active')) {
          active_each.classList.remove('menu__item--active');
        }
      });
      active_all.classList.add('menu__item--active');
    }
  });
});
// for menu section
const team__items = document.querySelectorAll('.team__item');
team__items.forEach(active_all => {
  active_all.addEventListener('click', team_click => {
    if (active_all.classList.contains('team__item--active')) {
      active_all.classList.remove('team__item--active');
    } else {
      team__items.forEach(active_each => {
        if (active_each.classList.contains('team__item--active')) {
          active_each.classList.remove('team__item--active');
        }
      });
      active_all.classList.add('team__item--active');
    }
  });
});