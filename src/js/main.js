const hamburger = document.querySelector('.hamburger');
const nav__list = document.querySelector('.nav__list');
let isModalOpen = false;
hamburger.addEventListener('click', (e) => {
  if (hamburger.classList.contains('hamburger--active')) {
    hamburger.classList.remove('hamburger--active');
    nav__list.classList.remove('nav__list--active');
    isModalOpen = false;
  } else {
    hamburger.classList.add('hamburger--active');
    nav__list.classList.add('nav__list--active');
    isModalOpen = true;
  }
});
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
const menuName = $('.menu__name');
$('.menu__close').each((ndx, item) => {
  $(item).on('click', () => {
    $(item).closest('.menu__item').removeClass('menu__item--active');
  });
});
menuName.each((ndx, item) => {
  $(item).on('click', () => {
    if ($(item).closest('.menu__item').hasClass('menu__item--active')) {
      $(item).closest('.menu__item').removeClass('menu__item--active');
    } else {
      menuName.each((ndx, item) => {
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
form.addEventListener('submit', formEvent => {
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
const openComment = document.querySelectorAll('.btn--comments');
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
var myMap;
const init = () => {
  myMap = new ymaps.Map('map', {
    center: [59.9277974, 30.2638647],
    zoom: 12,
    controls: []
  });
  const coords = [
    [59.9490893, 30.2700442],
    [59.9287917, 30.2516848],
    [59.9607237, 30.2923823],
    [59.9016327, 30.2829593]
  ];
  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: './images/marker.svg',
    iconImageSize: [46, 57],
    iconImageOffSET: [-35, -52]
  });
  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });
  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
}
ymaps.ready(init);
// map
let player;
const playerContainer = $('.player');
let eventsInit = () => {
  $('.player__volume-icon').click(() => {
    player.setVolume(0);
    $('.player__scroll-volume').css({
      left: '0%'
    });
  });
  $('.player__line-volume').click(e => {
    const barVolume = $(e.currentTarget);
    const clickedPositionVolume = e.originalEvent.layerX;
    console.log(clickedPositionVolume);
    const newButtonPositionVolume = (clickedPositionVolume / barVolume.width()) * 100;
    $('.player__scroll-volume').css({
      left: `${newButtonPositionVolume}%`
    });
    player.setVolume(newButtonPositionVolume);
  });
  $('.player__button').click(e => {
    e.preventDefault();
    const btn = $(e.currentTarget);
    if (playerContainer.hasClass('player--active')) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  });
  $('.player__triangle').click(e => {
    player.playVideo();
  });
  $('.player__line-main').click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlayBackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;
    player.seekTo(newPlayBackPositionSec);
  });
}
const onPlayerStateChange = event => {
  // -1 – воспроизведение видео не началось
  // 0 – воспроизведение видео завершено
  // 1 – воспроизведение
  // 2 – пауза
  // 3 – буферизация
  // 5 – видео находится в очереди
  switch (event.data) {
    case 1:
      playerContainer.removeClass('player--active');
      playerContainer.addClass('player--paused');
      break;
    case 2:
      playerContainer.removeClass('player--paused');
      playerContainer.addClass('player--active');
      break;
  }
};
const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();
  if (typeof interval != 'undefined') {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;
    $('.player__scroll-main').css({
      left: `${completedPercent}%`
    });
  }, 1000);
};
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '100%',
    width: '100%',
    videoId: 'cgiGG_9Kxb0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}
eventsInit();
//player
const sections = $('.section');
const display = $('.main-content');
let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
const performTransition = sectionEq => {
  if (inScroll === false && isModalOpen === false) {
    inScroll = true;
    const position = sectionEq * -100;
    sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
    display.css({
      transform: `translateY(${position}%)`
    });
    display.on('transitionend', () => {
      $('.bullets__item').eq(sectionEq).addClass('bullets__item--active').siblings().removeClass('bullets__item--active');
      inScroll = false;
    });
  }
};
const scrollSection = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();
  if (nextSection.length && direction === 'next') {
    performTransition(nextSection.index());
  }
  if (prevSection.length && direction === 'prev') {
    performTransition(prevSection.index());
  }
}
$(window).on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  if (deltaY > 0) {
    scrollSection('next');
  }
  if (deltaY < 0) {
    scrollSection('prev');
  }
});
$(document).on('keydown', e => {
  const tagName = e.target.tagName.toLowerCase();
  if (tagName != 'input' && tagName != 'textarea') {
    switch (e.keyCode) {
      case 38:
        scrollSection('prev');
        break;
      case 40:
        scrollSection('next');
        break;
    }
  }
});
$('[data-scroll-to]').on('click', e => {
  e.preventDefault();
  hamburger.classList.remove('hamburger--active');
  nav__list.classList.remove('nav__list--active');
  isModalOpen = false;
  const $this = $(e.currentTarget);
  const target = $this.attr('data-scroll-to');
  performTransition(target);
});
if (isMobile) {
  $('body').swipe({
    swipe: (even, direction) => {
      let scrollDirection;
      if (direction === 'up') {
        scrollDirection = 'next';
      }
      if (direction === 'down') {
        scrollDirection = 'prev';
      }
      scrollSection(scrollDirection);
    }
  });
}
$('.arrow-bottom').click(() => {
  scrollSection('next');
});
//onepagescroll