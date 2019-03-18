$(function(){
        
    /* Menu Button  */
    
    $('#toggle_btn').click(function(){
        $('#nav').fadeIn(200);
    });
    $('#close_btn').click(function(){
        $('#nav').fadeOut(200);
    });
    $('#nav').click(function(){
        $(this).fadeOut(200);
    });
    
    $('#toggle_btn').click(function(){
        $('#nav').fadeIn(200);
    });
    
    
    /* Nav 클릭시 Scroll 이동 */
    
    $('#nav li').find('a').click(function(event){
        event.preventDefault();       
        $('html,body').animate({scrollTop:$(this.hash).offset().top},600);
    });
    
    /* Close Button */
    
    $('#p_close_btn').click(function(){
        window.close();        
    });
    
    
    /* Mouse Wheel 이동 */
    
    window.onload = function () {
            $(".section").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveTop = $(this).next().offset().top;
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveTop = $(this).prev().offset().top;
                        }
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });
            });
        }
    
    
    /* Top Button */
   
    $(window).scroll(function(){        
        var scrollTopNum = $(document).scrollTop();    
        if( scrollTopNum >= 100 ){
            $('.top_btn').fadeIn();
        }if(scrollTopNum < 100 ){
            $('.top_btn').fadeOut();
        }   
    });
    $('.top_btn').hide();
    $('.top_btn').click(function(event){
	     event.preventDefault();
	     $('html,body').stop().animate({scrollTop:0},500);
    });
    
    
    
    /*  Works Slide */
    
    var workSlideNum = $('#works_slide li').length;//works slide 갯수
    var workSlideImgW = $('#works_slide').width();//works 이미지 넓이
    $('#works_slide ul').width((workSlideNum+1)*workSlideImgW);//works slide 총 넓이 
    
    $('.total_area').append(workSlideNum);//페이지 count부분에 보여질 총 갯수
    $('.slide_page').find('.current_area').append('<ul class="current"></ul>');//페이지 cout 부분에 <ul> 추가    
    var i=0;
    while(i<workSlideNum){
        $('.current_area').find('ul').append('<li>'+(i+1)+'</li>');
        i = i+1;
    }
    
    var slideCountH = $('.current_area').height();
    $('.current').height(workSlideNum*slideCountH);
       
    var workCurrentNum = 0;
    $('#works_slide .left_btn').hide();
    
    /* right button */
    $('#works_slide .right_btn').on('click',function(event){
        event.preventDefault();
         
        if( workCurrentNum === 0 ){
            $('#works_slide .left_btn').fadeIn();
        }
        workCurrentNum++;
        if( workCurrentNum === (workSlideNum-1) ){
            $(this).fadeOut();
        }
        if( workCurrentNum >= workSlideNum){
            workCurrentNum = workSlideNum-1;
        }
        
        //slide animate
        var moveLeft = workCurrentNum*workSlideImgW;
        $('#works_slide>ul').animate({left:-moveLeft},600);
        //count animate
        var moveTop = workCurrentNum*slideCountH;
        $('.current').animate({top:-moveTop},600);
    });
    
    /* left button */
    $('.left_btn').on('click',function(event){
        event.preventDefault();
        
        if( workCurrentNum === (workSlideNum-1) ){
            $('#works_slide .right_btn').fadeIn();
        }    
        workCurrentNum--;        
        if( workCurrentNum === 0 ){
            $(this).fadeOut();
        }
        if( workCurrentNum <= 0 ){
            workCurrentNum = 0;
        }
        
        //slide animate
        var moveLeft = workCurrentNum*workSlideImgW;
        $('#works_slide>ul').animate({left:-moveLeft},600);
        //count animate   
        var moveTop = workCurrentNum*slideCountH;
        $('.current').animate({top:-moveTop},600);       
    });
    
    
    /* About Slide */
    
    var aboutSlideNum = $('#about_slide li').length;
    var aboutSlideImgW = $('#about_slide').width();
    $('#about_slide ul').width(aboutSlideNum*aboutSlideImgW);
    
    var aboutCurrentNum = 0;
    $('#about_slide .left_btn').hide();
    
    /* right button */
    $('#about_slide .right_btn').on('click',function(event){
        event.preventDefault();
        if( aboutCurrentNum === 0 ){
            $('#about_slide .left_btn').fadeIn();
        }
        aboutCurrentNum++;
        if( aboutCurrentNum === (aboutSlideNum-1) ){
            $(this).fadeOut();
        }
        if( aboutCurrentNum >= aboutSlideNum ){
            aboutCurrentNum = aboutSlideNum-1 
        }
        
        //slide animate
        var moveLeft = aboutCurrentNum*aboutSlideImgW;
        $('#about_slide>ul').animate({left:-moveLeft},600);
    });
    /* left button */
    $('#about_slide .left_btn').on('click',function(event){
        event.preventDefault();
        
        if(aboutCurrentNum === (aboutSlideNum-1) ){
            $('#about_slide .right_btn').fadeIn();
        }
        aboutCurrentNum--;
        if(aboutCurrentNum === 0 ){
            $(this).fadeOut();
        }
        if( aboutCurrentNum <= 0 ){
            aboutCurrentNum = 0;
        }
        
        //slide animate
        var moveLeft = aboutCurrentNum*aboutSlideImgW;
        $('#about_slide>ul').animate({left:-moveLeft},600);
    });
    
    
    /* About Skills */
    
    $(window).scroll(function(){
        
        var scrollTop = $(window).scrollTop();
        var workTop = $('#section1').offset().top;
        var aboutTop = $('#section2').offset().top;
        if(scrollTop >= aboutTop-10 /*&& scrollTop <= aboutTop+10*/ ){ 
            activePercent();    
        }else {
            zeroPercent();
        }
        
        function activePercent(){            
            if( $('#skills').hasClass('active') === false ){
                $('.chart').each(function(i){
                    var $circleRight = $(this).find('.right .circle_inner').css({transform:'rotate(0)'}),
                    $circleLeft = $(this).find('.left .circle_inner').css({transform:'rotate(0)'}),            
                    $percentNumber = $(this).find('.percent_number'),
                    percentData = $percentNumber.text();            

                    $({percent:0}).stop().delay(150*i).animate({percent:percentData},{
                        duration:2000,
                        progress: function(){
                                var now = this.percent,
                                    deg = now * 360/100,
                                    degRight = Math.min(Math.max(deg,0),180),
                                    degLeft = Math.min(Math.max(deg-180,0),180);
                                $circleRight.css({transform:'rotate('+degRight+'deg)'});
                                $circleLeft.css({transform:'rotate('+degLeft+'deg)'});
                                $percentNumber.text(Math.floor(now));                    
                            }
                        });
                });
            };
            $('#skills').removeClass('unactive');
            $('#skills').addClass('active');
        };
        
        function zeroPercent(){
            if( $('#skills').hasClass('unactive') === false ){
                 $('.chart').each(function(){
                    var $circleRight = $(this).find('.right .circle_inner').css({transform:'rotate(0)'}),
                    $circleLeft = $(this).find('.left .circle_inner').css({transform:'rotate(0)'}),            
                    $percentNumber = $(this).find('.percent_number'),
                    percentData = $percentNumber.text();
                });   
            };
            $('#skills').removeClass('active');
            $('#skills').addClass('unactive');
        };
        
    });

    
    /* Contact Hover */
    
    $('#contact li').hover(function(){
             var contactSrc = $(this).attr('class');
             $(this).find('img').attr('src','./images/contact_'+contactSrc+'_hover.png');
    }, function(){
             var contactSrc = $(this).attr('class');
             $(this).find('img').attr('src','./images/contact_'+contactSrc+'.png');
    }, 300);
      
    
});

