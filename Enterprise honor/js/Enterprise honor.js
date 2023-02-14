import '../../public/js/jquery-1.9.1.min.js';
import '../../js/scrollReveal.js';
$(function(){
    $(".header").load("../public/header.html")
    $(".footer").load("../public/footer.html")
    //动画滚动
    var config = {
        reset: true,
        easing: 'ease-in-out',
        viewportFactor: .5,
    }
    window.scrollReveal = new scrollReveal(config);
})