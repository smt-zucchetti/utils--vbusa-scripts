import jquery from 'jquery'
import fancybox from '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'

jquery('#easy-form').fancybox(
{
    src: 'https://www.verticalbookingusa.com/quick-form.html', 
    type: 'iframe',
    iframe: {
        css: {
            width: '300px',
            height: '290px'     
        }
    }
})
   