$(document).ready(function(){
    //타이틀 검색 포커스
    $("#title form.search input").focus(function(){
        $(this).parent().addClass("focus");
    });
    $("#title form.search input").blur(function(){
        $(this).parent().removeClass("focus");
    });
    // 빙그레맛 리스트 오버
    $("#taste .inner ul.list li a").hover(
        function(){
            $(this).parent().css("box-shadow","2px 2px 5px #ccc"); //this는 이벤트가 발생한 요소를 의미한다.  //parent()앞 요소의 부모를 의미(li)
    },
    function(){
            $(this).parent().css("box-shadow","initial");
    
     } );       

     $("#community .inner > article > a").hover(
        function(){
            $(this).parent().addClass("art"); //this는 이벤트가 발생한 요소를 의미한다.  //parent()앞 요소의 부모를 의미(li)
    },
    function(){
            $(this).parent().removeClass("art");
    
     } );  
     $("aside#quick span").hide()
     let winH = $(window).height(); // 브라우저창 높이값

     let tasteul = $("#taste .inner ul.list").offset().top;
     let tasteulH = $("#taste .inner ul.list").height()/2;
    
     let shopul = $("#shop .inner ul.list li").offset().top;
     let shopulH = $("#shop .inner ul.list li").height()/2;
     
     let article = $("#community .inner > article").offset().top;
     let articleH = $("#community .inner > article").height()/2;
     console.log("tasteul 높이값"+tasteul);
     console.log("tasteulH 높이값"+tasteulH);
     console.log("winH 높이값"+winH);
     

     $(window).on("scroll",function(){
        console.log("scrollTop값:"+$(window).scrollTop())
       //객체의 .offset().top 값 - 윈도우 높이값 + 객체의 높이값 /2
       //scrolltop 스크롤을 내려 이동한 만큼의 값(px)
       
        //빙그레맛
        if($(window).scrollTop()>tasteul-winH+tasteulH){
            $("#taste .inner ul.list li").addClass("tasteliup delay")
        }
        if($(window).scrollTop()<tasteul-winH+tasteulH){
            $("#taste .inner ul.list li").removeClass("tasteliup delay")
        }
        
        //사이드메뉴
        if($(window).scrollTop()>tasteul-winH+tasteulH){
            $("aside#quick span").fadeIn();
        }
        if($(window).scrollTop()<tasteul-winH+tasteulH){
            $("aside#quick span").fadeOut();
        }
        //브랜드숍
        if($(window).scrollTop()>shopul-winH+shopulH){
            $("#shop .inner ul.list li").addClass("tasteliup delay")
        }
        if($(window).scrollTop()<shopul-winH+shopulH){
            $("#shop .inner ul.list li").removeClass("tasteliup delay")
        }
        //아티클
        if($(window).scrollTop()>article-winH+articleH){
            $("#community .inner > article").addClass("tasteliup ")
        }
        if($(window).scrollTop()<article-winH+articleH){
            $("#community .inner > article").removeClass("tasteliup ")
        }
     });
        //빙그레맛, 브랜드숍 hover시 delay없애기
        $("#taste .inner ul.list li,#shop .inner ul.list li").hover(function(){
            $(this).removeClass("delay");
        });
        $(window).scroll(function(){
            if($(window).scrollTop() > 0 ){
                $('header .inner').addClass('on')
            }else{
                $('header .inner').removeClass('on')
            }
            
        })
    });      