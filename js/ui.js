(function() {

  // 텍스트 변수
  const ONSTRING = "on";
  const REMSTRING = "rem";

  // function headerFixHandler() {
  //   const header = document.querySelector("header");

  //   let scrollPos = window.scrollY;
  //   console.log(scrollPos);
  //   if(scrollPos > 50) {
  //     header.style.position = "fixed";
  //   }
  // }
  // window.addEventListener("scroll", function(){
  //   headerFixHandler();
  // });

  
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

      conRig.style.width = (winW - (conLefW + conPoLeft + 17)) * 0.1 + REMSTRING;
      container.style.height = (slide.getBoundingClientRect().height) * 0.1 + REMSTRING;
    });
  }

  // tab
  function tabEventHandler() {
    const tabBtn = document.querySelectorAll(".tab-btn");
    const tabContent = document.querySelectorAll(".tab-cont");
    if(!tabBtn) {
      return;
    }

    [].forEach.call(tabBtn, function(btn, idx){

      btn.addEventListener("click", function(e){
        e.preventDefault();

        const a = btn.getAttribute("href");
        const b = a.replace("#", "");

        [].forEach.call(tabBtn, function(item, x){
          item.classList.remove(ONSTRING);
          tabContent[x].classList.remove(ONSTRING);

        });
        document.getElementById(b).classList.add(ONSTRING);

        this.classList.add(ONSTRING);
        
      });
    });
  }

  window.addEventListener("resize", function () {
    slideContainerWidthCalc();
  });

  document.addEventListener("DOMContentLoaded", function () {
    hbgBtnEvHandler();
    gnbMenuClose();
    slideContainerWidthCalc();
    tabEventHandler();
  });
}(window));
