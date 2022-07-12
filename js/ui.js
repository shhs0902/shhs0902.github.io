// 'use strict';
(function (window) {
  const body = document.querySelector('body');
  const hbgBtn = document.querySelector('.header__btn');
  let show = false;

  const ON_CLASS = 'on';

  function hbgBtnActive() {
    const nav = document.querySelector('nav');
    if (!show) {
      this.parentElement.classList.add(ON_CLASS);
      nav.classList.add(ON_CLASS);
      // body.style.overflow = 'hidden';
      show = true;
    } else {
      this.parentElement.classList.remove(ON_CLASS);
      nav.classList.remove(ON_CLASS);
      show = false;
      // body.style.overflow = 'auto';
    }
  }

  function loadItems() {
    return fetch('../data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.items;
      });
  }

  const clickTarget = document.querySelectorAll('#art .list-item li');

  function listClickLocation() {
    [].forEach.call(clickTarget, function (li, i) {
      li.addEventListener('click', function () {
        const currentIdx = i;
        loadItems().then((items) => {
          localStorage.setItem('item', JSON.stringify(items));
        });
        location.href = `./project_detail.html?${currentIdx}`;
      });
    });
  }

  function dataReceiveHandler() {
    const receivedData = location.href.split('?')[1];
    const getItem = JSON.parse(localStorage.getItem('item'));
    const inner = document.querySelector('#pj-detail .contents-area__inner');
    if (!inner) {
      return;
    }
    const dataTit = inner.querySelector('.title');
    const valueDate = inner.querySelector('.item-value__date');
    const valueClient = inner.querySelector('.item-value__client');
    const valueType = inner.querySelector('.item-value__type');
    const prjImg = inner.querySelector('.project-img');

    dataTit.innerText = getItem[receivedData].title;
    valueDate.innerText = getItem[receivedData].date;
    valueClient.innerText = getItem[receivedData].client;
    valueType.innerText = getItem[receivedData].type;
    prjImg.innerHTML = ` <img src="${getItem[receivedData].image}" alt="" />`;
  }

  window.addEventListener('DOMContentLoaded', function () {
    hbgBtn.addEventListener('click', hbgBtnActive);
    dataReceiveHandler();
    listClickLocation();
  });
})(window);
