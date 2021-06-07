import * as utils from './../lib/utils'

export function createPmsInterfacesListFromFeed()
{
    utils.createListFromFeed('pms-list').then((pmsList) =>
    {
        const container = document.querySelector('html > body > main > .container')
        container.innerHTML = ''
        container.appendChild(pmsList)
        import('./../assets/styles/pms-interfaces/main.scss').then(() =>
        {
            container.style.display = 'block'    
        })
        
    })   
}