
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
 		   





    var boxes = document.querySelectorAll(".shadow-box > .flex > a");
    boxes.forEach(function(el){
        
       el.addEventListener("click", function(){
           
           boxes.forEach(function(el2){
               el2.classList.remove("active");
           });
           
           this.classList.add("active");
       }); 
    });
    
    $(document).ready(function(){
        var data_id;
        $('.shadow-box a').click(function(e){
            data_id = $(this).data("id");
            if(data_id !== "google-drive" && data_id !== "external_link"){
                e.preventDefault();
    
                $('.hide-at-first').hide();
                $('.hide-at-first').each(function(i,e){
                    var id = $(e).attr('id');
                    if(id == data_id){
                        $(e).show();
                    }
                });
            }
           
        });
    });
    let anchors = document.querySelectorAll("#pod-hotel-mapping-files > a");
    anchors.forEach(function(el){
        el.addEventListener("click", function(e){
             e.preventDefault();
    
            var curDataId = this.dataset.id

             document.querySelectorAll("#pod-hotel-mapping-files > div").forEach(function(el){
                if(el.dataset.id !== curDataId){
                    el.classList.remove("active"); 
                }
             });
             
            document.querySelector("div[data-id='" + this.dataset.id + "']").classList.toggle("active");
        });
        
    });
    
    
    

