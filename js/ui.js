// 'use strict';
(function (window) {
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
  let footerH = footer.offsetHeight;
  const mainTop = main.getBoundingClientRect().top;
  const footerTop = footer.getBoundingClientRect().top;

  // function loadItems() {
  //   return fetch("../../data/data/json")
  //   .then(function(response){
  //     return response.json();
  //   })
  //   .then(function(json){
  //     return json.items;
  //   });
  // }

  // loadItems().then((items) => {
  //   displayItems(items);
  // })

  const clickTarget = document.querySelectorAll('#art .list-item li');

  [].forEach.call(clickTarget, function (li) {
    li.addEventListener('click', function () {
      $.ajax({
        url: './project_detail.html',
        type: 'GET',
        dataType: 'html',
        success: function (data) {
          console.log('페이지가 이동되었습니다.');
          window.location = './project_detail.html';
        },
        error: function (error) {
          console.log('실패');
        },
      });
    });
  });

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
})(window);
