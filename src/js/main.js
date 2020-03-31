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
$('.burgers__composition').each((ndx, item) => {
  $(item).on('click', () => {
    if ($(item).closest('.off-images').hasClass('composition--active')) {
      $(item).closest('.off-images').removeClass('composition--active');
    }
    else {
      $(item).closest('.off-images').addClass('composition--active');
    }
  });
});
$('.composition-close').each((ndx, item) => {
  $(item).on('click', () => {
    $(item).closest('.off-images').removeClass('composition--active');
  });
});
// for composition
const right = document.querySelector('.arrow--right');
const left = document.querySelector('.arrow--left');
const burgersList = document.querySelector('.burgers__list');
const burgersItems = document.querySelectorAll(".burgers__item");
const itemsArr = Array.from(burgersItems);
const itemsLength = burgersItems.length;
const slidesToShow = 1;
const step = 100;
const initialX = slidesToShow * step * -1;
let currentIndex = 0;

burgersList.classList.add('burgers__list--notransition');
burgersList.style.transform = `translate(${initialX}%, -50%)`;
burgersList.offsetHeight; // trigger reflow
burgersList.classList.remove('burgers__list--notransition');

right.addEventListener("click", function () {
  moveSlides('right');
});

left.addEventListener("click", function () {
  moveSlides('left');
});

for (let i = 0; i < slidesToShow; i++) {
  const cloneForEnd = burgersItems[i].cloneNode(true);
  burgersList.append(cloneForEnd);

  const cloneForStart = burgersItems[itemsLength - (i + 1)].cloneNode(true);
  burgersList.prepend(cloneForStart);
}

function moveSlides(direction) {
  if (direction === 'right') {
    --currentIndex;
  } else {
    ++currentIndex;
  }

  burgersList.style.transform = `translate(${initialX + (currentIndex * step)}%, -50%)`;
  if (currentIndex === (0 - itemsLength)) {
    currentIndex = 0;
    setTimeout(() => {
      reset();
    }, 310);
  }

  if (currentIndex === slidesToShow) {
    currentIndex = (itemsLength - slidesToShow) * -1;
    setTimeout(() => {
      reset();
    }, 310);
  }
}

function reset() {
  burgersList.classList.add('burgers__list--notransition');
  burgersList.style.transform = `translate(${initialX + (currentIndex * step)}%, -50%)`;
  burgersList.offsetHeight; // trigger reflow
  burgersList.classList.remove('burgers__list--notransition');
}
// for slider
const menuTag = $('.menu__tag');
$('.menu__close').each((ndx, item) => {
  $(item).on('click', () => {
    $(item).closest('.menu__item').removeClass('menu__item--active');
  });
});
menuTag.each((ndx, item) => {
  $(item).on('click', () => {
    if ($(item).closest('.menu__item').hasClass('menu__item--active')) {
      $(item).closest('.menu__item').removeClass('menu__item--active');
    } else {
      menuTag.each((ndx, item) => {
        $(item).closest('.menu__item').removeClass('menu__item--active');
      });
      $(item).closest('.menu__item').addClass('menu__item--active')
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
const form = document.querySelector('.form');
const sendButton = document.querySelector('.form__submit');
sendButton.addEventListener('click', formEvent => {
  formEvent.preventDefault();
  if (validateForm(form)) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('name', form.elements.name.value);
    formData.append('phone', form.elements.phone.value);
    formData.append('comment', form.elements.comment.value);
    formData.append('to', 'mail@mail.ru');
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(formData));
    xhr.addEventListener('load', () => {
      if (xhr.status) {
        createOverlay();
        const overlayText = document.querySelector('.overlay__text');
        const overlayLink = document.querySelector('.overlay-link');
        const overlayWindow = document.querySelector('.overlay__window');
        overlayLink.classList.add('form__overlay-link');
        overlayWindow.classList.add('form__overlay-window');
        overlayLink.innerHTML = 'Закрыть';
        overlayText.innerHTML = 'Сообщение отправлено';
        overlayText.classList.add('form__overlay-text');
        var overlayElement = document.querySelector('.overlay');
        overlayLink.addEventListener('click', () => {
          document.body.removeChild(overlayElement);
        });
        overlayElement.addEventListener('click', (e) => {
          if (e.target === overlayElement) {
            overlayLink.click();
          }
        });
      }
      else {
        createOverlay();
        const overlayText = document.querySelector('.overlay__text');
        const overlayLink = document.querySelector('.overlay-link');
        const overlayWindow = document.querySelector('.overlay__window');
        overlayLink.classList.add('form__overlay-link');
        overlayWindow.classList.add('form__overlay-window');
        overlayLink.innerHTML = 'Закрыть';
        overlayText.innerHTML = 'Ошибка';
        overlayText.classList.add('form__overlay-text');
        var overlayElement = document.querySelector('.overlay');
        overlayLink.addEventListener('click', () => {
          document.body.removeChild(overlayElement);
        });
        overlayElement.addEventListener('click', (e) => {
          if (e.target === overlayElement) {
            overlayLink.click();
          }
        });
      }
    });
  } else {
    createOverlay();
    const overlayText = document.querySelector('.overlay__text');
    const overlayLink = document.querySelector('.overlay-link');
    const overlayWindow = document.querySelector('.overlay__window');
    overlayLink.classList.add('form__overlay-link');
    overlayWindow.classList.add('form__overlay-window');
    overlayLink.innerHTML = 'Закрыть';
    overlayText.innerHTML = 'Заполните все поля корректно';
    overlayText.classList.add('form__overlay-text');
    var overlayElement = document.querySelector('.overlay');
    overlayLink.addEventListener('click', () => {
      document.body.removeChild(overlayElement);
    });
    overlayElement.addEventListener('click', (e) => {
      if (e.target === overlayElement) {
        overlayLink.click();
      }
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
  if (!validateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
}
function validateField(field) {
  return field.checkValidity();
}
// for form
const openComment = document.querySelectorAll('.comments__button');
function createOverlay(eventObject, event, link, window, heading, linkContent, message) {
  var overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');
  document.body.appendChild(overlayElement);
  const template = document.querySelector('#overlayTemplate');
  overlayElement.innerHTML = template.innerHTML;
};
openComment.forEach(open => {
  open.addEventListener('click', () => {
    createOverlay();
    const overlayHeading = document.querySelector('.overlay__heading');
    const overlayText = document.querySelector('.overlay__text');
    const overlayLink = document.querySelector('.overlay-link');
    overlayLink.classList.add('comments__close');
    overlayHeading.innerHTML = 'Константин Спилберг';
    overlayText.innerHTML = 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.';
    var overlayElement = document.querySelector('.overlay');
    overlayLink.addEventListener('click', () => {
      document.body.removeChild(overlayElement);
    });
    overlayElement.addEventListener('click', (e) => {
      if (e.target === overlayElement) {
        overlayLink.click();
      }
    });
  });
});
// for overlay

