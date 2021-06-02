
    $('#easy-form').click(function(e){
        e.preventDefault();

        $.fancybox({
            href: "https://www.verticalbookingusa.com/quick-form.html", 
            type: "iframe",
            padding: 0,
            
            width: 300,
            height: 290,
            fitToView: false,
            autoSize: false,
            autoDimensions: false,
        });
    });
   