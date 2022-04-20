(function() {

  // 텍스트 변수
  const ONSTRING = "on";
  const REMSTRING = "rem";

  const tabBtn = document.querySelectorAll(".tab-btn");
  const tabContent = document.querySelectorAll(".tab-cont");

  const phoneInput = document.querySelector("#phone");

  const nav = document.querySelector("nav");

  // 햄버거 버튼(전체 페이지 공통)
  function hbgBtnEvHandler(){
    const hbgBtn = document.querySelector(".btn-hbg");

    hbgBtn.addEventListener("click", function(){
        nav.classList.add(ONSTRING);
    });
  };

  // gnb 메뉴 닫기(전체 페이지 공통)
  function gnbMenuClose(){
    const closeBtn = document.querySelector(".btn-close");
    if(!closeBtn) {
      return;
    }

    closeBtn.addEventListener("click", function(){
      nav.classList.remove(ONSTRING);
  });
  }

  // 컨텐츠 슬라이드 width/height
  function slideContainerWidthCalc() {
    const slideCon = document.querySelector("#cont-02");
    if(!slideCon) {
      return;
    }
    const conLef = slideCon.querySelector(".cont-left");
    const conRig = slideCon.querySelector(".cont-right");
    const slides = conRig.querySelectorAll(".slide");
    if(!slides) {
      return;
    }
    
    [].forEach.call(slides, function (slide) {
   
      const conRect = conLef.getBoundingClientRect();
      const conLefW = conRect.width;
      const conPoLeft = conRect.left;
      const winW = window.innerWidth;

      const container = document.querySelector("#cont-02 .container");

      conRig.style.width = (winW - (conLefW + conPoLeft + 50)) * 0.1 + REMSTRING;
      container.style.height = (slide.getBoundingClientRect().height) * 0.1 + REMSTRING;
    });
  }
  
  // tab
  function tabEventHandler(btn, idx) {
    if(!tabBtn) {
      return;
    }
      [].forEach.call(tabBtn, function(item, x){
        item.classList.remove(ONSTRING);
        tabContent[x].classList.remove(ONSTRING);
      });
      
      tabContent[idx].classList.add(ONSTRING);
  
      btn.classList.add(ONSTRING);
  }

  function loopHandler() {
    [].forEach.call(tabBtn, function(btn, idx){
      btn.addEventListener("click", function(e){
        e.preventDefault();
        tabEventHandler(btn, idx);
      });
    });
  }

  // 외부 페이지 탭 이동
  function locationHandler() {
    const url = location.href;
    const target = String(url.match(/\#[\w\-\w]+/g));
    const currentHash = location.hash;
    if(currentHash === target) {
      [].forEach.call(tabBtn, function(item, ix){
        const tagUrl = item.getAttribute("href");
        item.classList.remove(ONSTRING);
        tabContent[ix].style.display = "none";

        if(tagUrl === target) {
          item.classList.add(ONSTRING);
        }

        const newTarget = target.replace("#", "");
        document.getElementById(newTarget).style.display = "block";
      });
    }
  }

  // 회원가입 전화번호 010 자동입력
  function autoTextInputHandler() {
    if(!phoneInput) {
      return false;
    }
    
    phoneInput.addEventListener("click", function(e){
      if(this.value === "") {
        this.value = "010";
      }
    });
  }

  // "-" 자동 입력
  const autoHypenPhone = function(str){
    str = str.replace(/[^0-9]/g, '');
    let tmp = '';
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{              
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }
  }

  
  

  function init() {
    hbgBtnEvHandler();
    gnbMenuClose();
    slideContainerWidthCalc();
    loopHandler();
    locationHandler();
    autoTextInputHandler();
    if(phoneInput) {
      phoneInput.onkeyup = function(){
        this.value = autoHypenPhone( this.value ) ;  
      }
    }
    window.addEventListener("resize", function () {
      slideContainerWidthCalc();
    });
  }

  

  document.addEventListener("DOMContentLoaded", function () {
    init();

  });
}(window));

function popupClose() {
  const popUp = document.querySelector(".pop-wrap");
  popUp.classList.remove("active");
}