
(function(window){
  const hbgBtn = document.querySelector(".header__btn");
  let boolean = false;
  console.log(hbgBtn);
  hbgBtn.addEventListener("click", function(){
    if(!boolean) {
      this.classList.add("on");
      boolean = true;
    }else {
      this.classList.remove("on");
      boolean = false;
    }
  });
}());

