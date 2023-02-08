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

//썸네일을 눌렀을 때 팝업창이 등장하는 함수&이미지 주소 연결
const thumbnails = document.querySelectorAll(".box_gallery > li");
const overlay = document.querySelector(".slide-overlay");
let slidePhoto = document.querySelectorAll(".slides > li>img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    // 썸네일 원본 사진과 갤러리 슬라이드 이미지 소스 링크 연결
    for (let i = 0; i < thumbnails.length; i++) {
      let photo = thumbnails[i].lastElementChild;
      slidePhoto[i].src = photo.href;
    }
  });
});
document.querySelector(".close-btn").addEventListener("click", () => {
  overlay.style.display = "none";
});

/*메뉴 클릭시 이동
$(".menu>li").click(function(){
  click_num=$(this).index();
  cnt=click_num;
  page_y=$(".scroll").eq(click_num).offset().top;
  $("html").animate({scrollTop:page_y},400);
 })
 */


//scrollTop
  //조건1. top을 클릭했을 때 
  $(".topBtn").click(function(e){
    e.preventDefault(); //a태그의 효과제거(제일상단으로 이동되는 효과->태그에 기본적으로 있는 이벤트 효과 제거)
    $("html").animate({scrollTop:0},500)
   });
   //조건2. top을 클릭했을 때 천천히 시간을 줘서 상단으로 이동
   
   $(window).scroll(function(){
    if($("html").scrollTop()>100){//html의 상단top을 기준으로 스크롤이 100보다 클 때
       $(".topBtn").fadeIn(100)//.top이 나타난다.
       }
    else{
       $(".topBtn").fadeOut(100)//.top이 사라진다.
       }   
   });