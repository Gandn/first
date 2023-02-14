import './../../public/js/jquery-1.9.1.min.js';
import '../../js/jquery.countup.min.js'
import '../../js/jquery.waypoints.min.js'
import '../../js/scrollReveal.js'
$(function(){
    $(".header").load("../public/header.html")
    $(".footer").load("../public/footer.html")
    //数字滚动
    $(".counter").countUp() 
    //锚点滚动时间
        $('a[href*=#],area[href*=#]').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({
                scrollTop: targetOffset
              },
              1000);
              return false;
            }
          }
        });
    //动画滚动
    var config = {
        reset: true,
        easing: 'ease-in-out',
        viewportFactor: .4,
    }
    window.scrollReveal = new scrollReveal(config);
})