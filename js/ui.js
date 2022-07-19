// 'use strict';
(function (window) {
  const hbgBtn = document.querySelector('.header__btn');
  const hidden = document.querySelector('#input-hidden');
  const checkboxData = document.querySelectorAll('input[type="checkbox"]');
  const arr = new Array();
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

  // function loadItems() {
  //   return fetch('../data/data.json')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       return json.items;
  //     });
  // }

  function resultChecked() {
    [].forEach.call(checkboxData, function (x) {
      x.addEventListener('change', changedCheckBox(), false);
    });
  }

  function changedCheckBox() {
    return function () {
      if (this.checked) {
        arr.push(this.value);
      } else {
        arr.pop(this.value);
      }
      hidden.value = arr.join(' , ');
    };
  }

  function formSubmitData() {
    const formSubmit = document.querySelector('.form-submit');
    const project = document.querySelector('#project');
    const endDate = document.querySelector('#end-date');
    const reference = document.querySelector('#reference');
    const detail = document.querySelector('#detail');
    const company = document.querySelector('#company');
    const position = document.querySelector('#position');
    const phoneNum = document.querySelector('#phone-num');
    const homepage = document.querySelector('#homepage');
    if (!formSubmit) {
      return;
    }
    formSubmit.addEventListener('click', function () {
      $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbwWNiwooDOx-9v6N7yh0JKj0c57JI_GfYYEXigAjRuHjZQzKm7s2Es3ebwfK-vwFvIq/exec',
        data: {
          프로젝트종류: hidden.value,
          프로젝트: project.value,
          마감일정: endDate.value,
          참고사이트: reference.value,
          상세문의: detail.value,
          회사명: company.value,
          담당자명: position.value,
          담당자연락처: phoneNum.value,
          홈페이지: homepage.value,
        },
        success: function (response) {
          //값 비워주기
          hidden.value = '';
          project.value = '';
          endDate.value = '';
          reference.value = '';
          detail.value = '';
          company.value = '';
          position.value = '';
          phoneNum.value = '';
          homepage.value = '';
        },
        error: function (request) {
          console.log('error');
        },
      });
    });
  }

  window.addEventListener('DOMContentLoaded', function () {
    hbgBtn.addEventListener('click', hbgBtnActive);
    resultChecked();
    formSubmitData();
  });
})(window);
