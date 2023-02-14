import '../public/js/jquery-1.9.1.min.js';
import './map.js';
import '../js/scrollReveal.js';
$(function(){
    $(".header").load("../public/header.html")
    $(".footer").load("../public/footer.html")
    $("table tr input,table tr textarea").focus(function(){
        $(this).css("background","#fff")
    })
    $("table tr input,table tr textarea").blur(function(){
        $(this).css("background","#f7f7f7")
    })
    $("#sub").click(function(){
        if($(":input").val()==''){
            alert("提交内容不能为空")
        }else{
            alert("提交成功")
        }
    })
    //滚动动画
    var config = {
        reset: true,
        easing: 'ease-in-out',
        viewportFactor: .7,
    }
    window.scrollReveal = new scrollReveal(config);
})