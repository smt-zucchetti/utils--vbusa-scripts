console.log('webpack working')
    $('#youtube-about-popup').click(function(e){
        e.preventDefault();
        
        $.fancybox({
            href: "https://www.youtube.com/embed/OwfCcDX44a4?autoplay=1", 
            type: "iframe",
            padding: 0,
            afterClose: function() {
                $('#bg').hide();
            },
            helpers: {
                overlay: {
                  locked: false
                }
            }
        });
    });
   
   