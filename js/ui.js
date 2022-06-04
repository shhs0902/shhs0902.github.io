'use strict';

const hbgBtn = document.querySelector('.header__btn');
let boolean = false;

const NEXT_BTN = 'swiper-button-next';
const PREV_BTN = 'swiper-button-prev';
const ON_CLASS = 'on';

function hbgBtnActive() {
  const nav = document.querySelector('nav');

  if (!boolean) {
    this.classList.add(ON_CLASS);
    nav.classList.add(ON_CLASS);

    boolean = true;
  } else {
    this.classList.remove(ON_CLASS);
    nav.classList.remove(ON_CLASS);
    boolean = false;
  }
}
const slideContainer = document.querySelector('.slide__container--myjs');
const slideWrap = document.querySelector('.swiper-wrapper');
const slide = document.querySelectorAll('.slide');
const slideBtn = document.querySelectorAll('.slide__btn');
const slideLenth = slide.length;
let slideHeight;
let current = 0;

function slideHeightCalc() {
  [].forEach.call(slide, function (s, i) {
    slideHeight = s.offsetHeight;
  });
}

function slideEventHandler() {
  [].forEach.call(slideBtn, function (b, i) {
    b.addEventListener('click', function (e) {
      slide[current].classList.remove(ON_CLASS);

      if (e.target.classList.contains(NEXT_BTN)) {
        nextBtnEventHandler();
      }

      if (e.target.classList.contains(PREV_BTN)) {
        prevBtnEventHandler();
      }
    });
  });
}

function nextBtnEventHandler() {
  if (slideLenth - 1 > current) {
    current = current + 1;
    slide[current].classList.add(ON_CLASS);

    goToSlide(current);
  }
}

function prevBtnEventHandler() {
  if (0 < current) {
    current = current - 1;
    slide[current].classList.add(ON_CLASS);

    goToSlide(current);
  }
}

function goToSlide(current) {
  slideWrap.style.transform = `translate3d(0, ${-slideHeight * current}px, 0)`;
}

window.addEventListener('DOMContentLoaded', function () {
  hbgBtn.addEventListener('click', hbgBtnActive);

  if (slideWrap) {
    slideHeightCalc();
  }
  if (window.innerWidth > 1365) {
    slideEventHandler();
  } else {
    return;
  }
});
