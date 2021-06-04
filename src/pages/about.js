import jquery from 'jquery'
import fancybox from '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'

jquery('#youtube-about-popup').fancybox(
{
    src: 'https://www.youtube.com/embed/OwfCcDX44a4?autoplay=1',
    type: 'iframe'
})

   