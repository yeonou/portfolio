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
    
    
    /* Close Button */
    
    $('#p_close_btn').click(function(){
        window.close();        
    });
    
    
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
    $('#works_slide ul').width(workSlideNum*workSlideImgW);//works slide 총 넓이 
    
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
    
});

