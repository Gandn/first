$(function(){
    $(".header").load("public/header.html")
    $(".footer").load("public/footer.html")
    //滚动修改样式
    $(window).scroll(function(){
        if($(this).scrollTop()>20){
            $("#head").addClass("head-X");
            $("#head-logo").css({"width":"120px","margin-top":"4px","height":"44px"}).parent().siblings("ul").css("right","70px")
            .children("li").css("padding","0 25px");
        }else{
            $("#head").removeClass("head-X");
            $("#head-logo").css({"width":"145px","height":"54px"}).parent().siblings("ul").css("right","105px")
            .children("li").css("padding","0 30px");
        }
    })
    //第一个轮播图
    var swiper = new Swiper(".mySwiper", {
        autoplay:true,
        loop:true,
        autoplay: {
            delay:5000,
            disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      //第二个轮播图
     var swiperL = new Swiper(".mySwiperL", {
        autoplay:true,
        loop:true,
        autoplay: {
            delay:3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".mySwiperL-btn",
          },
     });
     //滚动动画
	 //ff0084
     var config = {
        reset: true, //无限次
        easing: 'ease-in-out', //速率
        viewportFactor: .7, // 当dom元素显示到指定范围执行
    }
    window.scrollReveal = new scrollReveal(config);
    //数字滚动
    $(".counter").countUp()
    //第三个轮播图
    var swiperP= new Swiper(".mySwiper_P", {
        loop:true, //无限轮播
        speed:800, //图片走动时间
        slidesPerView: 1.2, //默认显示几张
        navigation: {
            prevEl: '.tab-l',
            nextEl: ".tab-r"
          },
          on: {
            slideChange() {
              this.active = this.realIndex
              $(".p_tab li").eq(this.active)
              .css({display:"block"}).siblings()
              .css({display:"none"})
            }
          }
      });
      //第四个轮播图
      var swiperF= new Swiper(".mySwiperF", {
        speed:300,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          on: {
            slideChange: function () {
              $(".paging-con").animate({marginLeft:-(this.activeIndex*215)+'px'})
            },
          }
      });
      //第五个轮播图
      var swiperN= new Swiper(".mySwiperN", {
        loop:true,
        slidesPerView: 3,
        speed:800,
        autoplay:{
          delay:3000,
          disableOnInteraction: false
        },
        navigation: {
          prevEl: '.mySwipeN-l',
          nextEl: ".mySwipeN-r"
        }
      });
})