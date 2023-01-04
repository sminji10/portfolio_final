//scroll effect
/*cnt=0;
        time=0;
        $("html").animate({scrollTop:0},400);
        $(document).on("mousewheel",
                      function(){
         wheel=event.wheelDelta;
         clearTimeout(time);
         time=setTimeout(function(){
          if(wheel>0){
           if(cnt==0)return false;
           cnt=cnt-1;
           page_y=$(".scroll").eq(cnt).offset().top;
           $("html").animate({scrollTop:page_y},400);
          }
          else{
           if(cnt==4)return false;
           cnt=cnt+1;
           page_y=$(".scroll").eq(cnt).offset().top;
           $("html").animate({scrollTop:page_y},400);
          }
         })
        })
        */

//design section swiper
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: -290,
        slidesPerGroup: 1,
        autoplay: { //자동재생0
          delay: 3000, //머무는 시간
          disableOnInteraction: false,//자동재생 여부 설정
        },
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {//화살표 여부 설정
          nextEl: ".swiper_btn_next",
          prevEl: ".swiper_btn_prev",
        },
      });


//click popup
      var img = document.getElementsByClassName('click_img_1');
      for (var x = 0; x < img.length; x++){
        img.item(x).onclick=function() {window.open(this.src)};
      }
