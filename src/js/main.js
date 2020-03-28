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
const composition = document.querySelectorAll('.off-images');
const burgers__composition = document.querySelectorAll('.burgers__composition');
const composition_close = document.querySelector('.composition-close');
burgers__composition.forEach(active_all => {
  active_all.addEventListener('click', (e) => {
    composition.forEach(e => {
      if (e.classList.contains('composition--active')) {
        e.classList.remove('composition--active');
      } else {
        e.classList.add('composition--active');
      }
    });
  });
  composition_close.addEventListener('click', (e) => {
    composition.classList.remove('composition--active');
  });
});
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
// for team accordeon 
const right = document.querySelector('.arrow--right');
const left = document.querySelector('.arrow--left');
const burgers__list = document.querySelector('.burgers__list');
right.addEventListener("click", function (e) {
  loop("right", e);
});
left.addEventListener("click", function (e) {
  loop("left", e);
});
function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    burgers__list.appendChild(burgers__list.firstElementChild);
  } else {
    burgers__list.insertBefore(burgers__list.lastElementChild, burgers__list.firstElementChild);
  }
}
// for slider
const form = document.querySelector('.form');
const sendButton = document.querySelector('.form__submit');
sendButton.addEventListener('click', formEvent => {
  event.preventDefault();
  console.log(form.elements.pay.value);
  if (validateForm(form)) {
    const data = FormData();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
    });
  }
});
function validateForm(myform) {
  let valid = true;
  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.street)) {
    valid = false;
  }
  if (!validateField(form.elements.house)) {
    valid = false;
  }
  return valid;
}
function validateField(field) {
  return field.checkValidity();
}
// for form
var comment = document.querySelectorAll('.comments__button');
console.log(comment);
comment.forEach(open => {
  open.addEventListener('click', () => {
    console.log(comment);
  });
});
// function createOverlay() {
//   const overlayElement = document.createElement('div');
//   overlayElement.classList.add('overlay');
//   document.body.appendChild(overlayElement);
//   const template = document.querySelector('#overlayTemplate');
//   overlayElement.innerHTML = template.innerHTML;
// }