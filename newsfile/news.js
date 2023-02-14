import '../public/js/jquery-1.9.1.min.js';
$(function(){
    var t
    var a
    $(".header").load("../public/header.html")
    $(".footer").load("../public/footer.html")
    $.ajax({
        type:"GET",
        url:"./news.json",
        dataType:"json",
        success:function(a){
            var text=''
            var tet=''
            var tet2=''
            var content=''
            var content2=''
            $.each(a,function(index,val){
              if(index<=0){
                $.each(val,function(i,val){
                text='<img class="img" src='+val['images']+'></img>'+
                '<div class="right"><h3>'+val['title']+'</h3>'+
                '<p class="p">'+val['tit']+'</p><p><a>'+val['date']+'</a>'
                +'<a href="javascript:vido(null)">'+val['details']+'</a></p></div>'
                })
              }
              if(index<=1){
                $.each(val,function(i,v){
                    if(i<=0){
                        tet='<ul><li><img src='+v['images']+'></img>'
                        +'<div class="right"><span>'+v['date']+'</span><h3>'+v['title']+'</h3><p>'+v['tit']+'</p><a href="javascript:vido(null)">'+v['details']+'</a></div></li></ul>'
                    }
                    if(i<=1){
                        tet2='<li><img src='+v['images']+'></img>'
                        +'<div class="right"><span>'+v['date']+'</span><h3>'+v['title']+'</h3><a href="javascript:vido(null)">'+v['details']+'</a></div></li>'
                    }
                })
              }
              if(index==2){
                $("#Company_bottom").prepend("<ul class='ul same'></ul>")
                $.each(val,function(i,value){
                   a = i+1
                   if(i<4){
                    content='<li><img src='+value['images']+'></img>'
                    +'<div class="right"><h3>'+value['title']+'</h3><p>'+value['date']+'</p><a href="javascript:vido(null)">'+value['details']+'</a></div></li>'
                    $(".ul").append(content)
                   }
                })
                var tit = a/4
                $(".Company-bottom-x").append("<ul></ul>")
                for(var i=1;i<=tit;i++){
                  $(".Company-bottom-x ul").append("<li>"+i+"</li>")
                  }
                  $(".Company-bottom-x ul li").eq(0).addClass("active")
                  $(".Company-bottom-x ul li").click(function(){
                    $(this).addClass("active").siblings().removeClass("active")
                    $(".ul").empty()
                    $.ajax({
                      type:"GET",
                      url:"./news.json",
                      dataType:"json",
                      success:function(a){
                        var num = 4
                        var $li_active=$(".Company-bottom-x ul li.active").text() 
                        var $li_x = $(".Company-bottom-x ul li.active").text()-1  
                        $.each(a,function(index,val){
                          if(index==2){
                           $.each(val,function(i,value){
                           if((i<num*$li_active) && (i>=num*$li_x)){
                            content2='<li><img src='+value['images']+'></img>'
                            +'<div class="right"><h3>'+value['title']+'</h3><p>'+value['date']+'</p><a href="javascript:vido(null)">'+value['details']+'</a></div></li>'
                            console.log(i)
                          }
                            $(".ul").append(content2)
                           })
                          }
                        })
                      }
                    })
                  })
              }
            })
            $("#same").html(text)
            $("#same_r").html(tet)
            $("#same_r ul").append(tet2)
            var $index = $("#same_r ul li").index()
            $("#same_r ul").hover(function(){
                clearInterval(t)
             },function(){
             t=setInterval(function(){
              $index++
               if($index>1){
                $index=0
               }
                auto()
              },2500)
            }).trigger("mouseout")
            function auto(){
              if($("#same_r ul").is(":animated")==false){
                $("#same_r ul").animate({"marginLeft":-$("#same_r ul").find("li").width()},1000,function(){
                  $("#same_r ul").css("marginLeft","0").find("li:first").appendTo($("#same_r ul"))
                })
              }
              $("#same_r ul").parent().next().find("li").eq($index)
              .addClass("back").siblings().removeClass("back")
            }
            $("#same_r ul").parent().next().find("li").mouseover(function(){
              $(this).addClass("back").siblings().removeClass("back")
              $("#same_r ul").animate({"marginLeft":-$("#same_r ul").find("li").width()*$(this).index()})
            })
        }
    })
})