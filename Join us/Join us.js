import '../public/js/jquery-1.9.1.min.js';
import '../../js/scrollReveal.js'
$(function(){
    $(".header").load("../public/header.html")
    $(".footer").load("../public/footer.html")
    //动画滚动
    var config = {
        reset: true,
        easing: 'ease-in-out',
        viewportFactor: 1,
    }
    window.scrollReveal = new scrollReveal(config);
    $("#tr_").click(function(){
        $(".bottom").slideToggle(500)
    })
    $("table tr:first").css("display","none")
    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $("table tr:first").css("display","block")
        }else{
            $("table tr:first").css("display","none")
        }
    })
})