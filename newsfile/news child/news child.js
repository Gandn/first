import '../../public/js/jquery-1.9.1.min.js';
$(function(){
    $(".header").load("../../public/header.html",function(){
        $.each($(".header-f a"),function(i,v){
            $(v).attr("href","../"+$(v).attr("href")+"")
        })
    })
    $(".footer").load("../../public/footer.html",function(){
        $.each($('.foo-box img'),function(i,v){
            $(v).attr("src","../"+$(v).attr("src")+"")
        })
    })
})