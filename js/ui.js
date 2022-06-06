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

window.addEventListener('DOMContentLoaded', function () {
  hbgBtn.addEventListener('click', hbgBtnActive);
});
