import jquery from 'jquery'
import fancybox from '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'



	function showHideMenu(){
		if(jquery(window).width() > 780){
		      jquery('nav ul').css('display','');   
		}
	}


	jquery(document).ready(function(){
        showHideMenu();
    });
    jquery(window).resize(function(){
    	showHideMenu();
    });

    //if the Solutions link is clicked in mobile, drop down menu, don't go to page   
    jquery('a[title="Solutions"]').click(function(e){
    	if(jquery(window).width() < 780 || /Android|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
            if(typeof $(this).next().attr('style') == 'undefined'){
                jquery(this).next().css('display','block');
            }else{
                jquery(this).next().toggle();
            }
    		e.preventDefault();
    	}
    });

    //add an extra class to the solutions li for styling override
    jquery('nav li').each(function(idx, el)
    {
        const aTag = jquery(this).find('a');
        if(aTag && aTag.prop('title') == 'Solutions'){
            $(this).addClass('solutions');
        }
    });

    //if an l1 page is selected in mobile, expand the menu on page load
    if( jquery(window).width() < 780 && jquery('.solutions').hasClass('active') ){
        jquery('.solutions').find('a').next().toggle();
    }

    //toggle the menu
    $('.toggle-mobile-menu').click(function(e){
    	$('nav ul:first-child').toggle();
    	e.preventDefault();
    });

    //if an l1 page is selected in mobile, don't treat "Solutions" menu item as active
    if($('li.solutions').hasClass('active') ){
        $('li.solutions ul li').each(function(i,e){
            //if one of the l1 pages is the current one
            if($(e).hasClass('active')){
                $('li.solutions').removeClass('active');
            }
        });
    }
    
    jquery('#youtube-popup').fancybox({
        src: "https://www.youtube.com/embed/8Ii61D6g41g?autoplay=1", 
        type: "iframe",
    });
    
    jquery(document).mouseup(function(e) {
        var cont = $('iframe');
        if (!cont.is(e.target) &&cont.has(e.target).length === 0) {
            jquery.fancybox.close();
        }
    });
    
    jquery('a[title="Live Chat"]').click(function(e){
       e.preventDefault();
       Intercom('show');
       return false;
    });

