$(function(){
        
    /* Menu 버튼 */
    
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
    
    
    /* Close 버튼 */
    
    $('#p_close_btn').click(function(){
        window.close();        
    });
    
    /* Top Button */
            
    $('.top_btn').hide();
    $(window).scroll(function(){        
        var scrollTopNum = $(document).scrollTop();    
        if( scrollTopNum >= 100 ){
            $('.top_btn').fadeIn();
        }if(scrollTopNum < 100 ){
            $('.top_btn').fadeOut();
        }   
    });

    $('.top_btn').click(function(event){
	     event.preventDefault();
	     $('html,body').stop().animate({scrollTop:0},500);
    });
            
    /* Works Slide*/
    
    var slideNum = $('#works_slide li').length;
    var slideImgW = $('#works_slide').width();
    $('#works_slide ul').width(slideNum*slideImgW);
        
    /* Works Slide Page */
    
    $('.total_area').append(slideNum);
    $('.slide_page').find('.current_area').append('<ul class="current"></ul>');
    var i=0;
    while(i<slideNum){
        $('.current_area').find('ul').append('<li>'+(i+1)+'</li>');
        i = i+1;
    }
    var slideNumH = $('.current_area').height();
    $('.current').height(slideNum*slideNumH);
    
    /* Works Slide Button */
    
    var currentNum = 0;
    $('.left_btn').hide();    
    $('.right_btn').on('click',function(event){
        event.preventDefault();        
        if(currentNum === 0){            
            $('.left_btn').fadeIn();
        }
        currentNum++;
        if(currentNum === (slideNum-1)){
            $('.right_btn').fadeOut();
        }
        if(currentNum >= slideNum){
            currentNum = slideNum-1;
        }
        var moveLeft = currentNum*slideImgW;
        $('#works_slide ul').animate({left:-moveLeft},600);
                
        var moveTop = currentNum*slideNumH;
        $('.current').animate({top:-moveTop},600);
    });
    
    $('.left_btn').on('click',function(event){
        event.preventDefault();
        if(currentNum == (slideNum-1)){
            $('.right_btn').fadeIn();
        }    
        currentNum--;        
        if(currentNum == 0){
            $('.left_btn').fadeOut();
        }
        if(currentNum <= 0){
            currentNum = 0;
        }
        var moveLeft = currentNum*slideImgW;
        $('#works_slide ul').animate({left:-moveLeft},600);
                
        var moveTop = currentNum*slideNumH;
        $('.current').animate({top:-moveTop},600);       
    });
    
});

