
    console.log('asdf');
    
    window.addEventListener('load', () =>
    {
        const list = document.querySelector('ul.list-partners')
        console.log('list sa', list, list.children)
        Array.from(list.children).forEach(li =>
        {
            const img = li.querySelector('img')
            img.src = `https://verticalbooking.com${img.getAttribute('src')}`   
        })
        const mainContainer = document.querySelector('main > .container')
        mainContainer.innerHTML = null
        mainContainer.appendChild(list)
        mainContainer.style.display = 'block'
        // $.ajax({
        //     url: 'https://www.verticalbooking.com/en/integrations/pms-property-management-system/',
        //     success: function(data) 
        //     {
        //         data = $(data).find('ul.list-partners');
        //         $('main > .container').html(data);
        //         alert('Done.');
        //     }
        // });   
         
         
        // $('.tabella-pms .col-logo img').each(function(i,e){
        //     var orig_src = $(e).attr('src');
        //     console.log(orig_src);
        //     $(e).attr('src', 'https://www.verticalbooking.com' + orig_src);
        // });
    });
