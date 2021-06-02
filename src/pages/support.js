
    $(function() {
        function isHandheld(){
            return $(window).width() < 780;
        }
        //attach a "fixed" class to menu when menu is out of view
        let h_height = $('header').height() +  $('main .hero-container').height()
        function makeMenuFixed(){
            if(isHandheld()){
                $('#menu').removeClass('menu-fixed');
            }else{
                diff = $(window).scrollTop() - h_height;
                diff >= 0?$('#menu').addClass('menu-fixed'):$('#menu').removeClass('menu-fixed');
            }
        }
        //on page load
        makeMenuFixed();
        //on window resize
        $(window).on('resize', function(){
            makeMenuFixed();
        });
        //when window scroll
        $(window).scroll(function() {
            makeMenuFixed();
        });
        
        
        //when menu item is clicked on
        $('#menu > a').click(function(e){
            e.preventDefault();
        
            //hilight it
            $('#menu > a').each(function(k,v){
                $(v).removeClass('active');
            });
            $(this).addClass('active');
        
            //and scroll to it
            var v_id = $(this).data('id');
            $('html, body').animate({
                scrollTop: $('#' + v_id).offset().top
            }, 1000);
        });
    
    });
 		   
