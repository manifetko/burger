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
