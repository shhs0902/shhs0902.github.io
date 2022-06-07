'use strict';

const body = document.querySelector('body');
const header = document.querySelector('.header__inner');
const hbgBtn = document.querySelector('.header__btn');
let boolean = false;

const ON_CLASS = 'on';

function hbgBtnActive() {
  const nav = document.querySelector('nav');
  if (!boolean) {
    this.parentElement.classList.add(ON_CLASS);
    nav.classList.add(ON_CLASS);
    body.style.overflow = 'hidden';
    boolean = true;
  } else {
    this.parentElement.classList.remove(ON_CLASS);
    nav.classList.remove(ON_CLASS);
    boolean = false;
    body.style.overflow = 'auto';
  }
}

const main = document.querySelector('main');
const footer = document.querySelector('footer');
const footerH = footer.offsetHeight;
const mainTop = main.getBoundingClientRect().top;
const footerTop = footer.getBoundingClientRect().top;

// function footerScrollHandler() {
//   let scrT = window.scrollY;
//   let newTop = mainTop - scrT;

//   main.style.top = newTop + 'px';

//   if (scrT > footerTop) {
//     main.style.top = -footerH + 'px';
//   } else {
//     newTop *= 0;
//   }
// }

// window.addEventListener('scroll', footerScrollHandler);

window.addEventListener('DOMContentLoaded', function () {
  hbgBtn.addEventListener('click', hbgBtnActive);
});
