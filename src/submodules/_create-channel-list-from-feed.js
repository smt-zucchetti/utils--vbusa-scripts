import * as utils from './../lib/utils'

export function createChannelListFromFeed()
{
    utils.createListFromFeed('pms-list').then((channelList) =>
    {
        const container = document.querySelector('html > body > main > .container')
        container.innerHTML = ''
        container.appendChild(channelList)
        import('./../assets/styles/pms-interfaces/main.scss').then(() =>
        {
            container.style.display = 'block'    
        })
        
    })   
}