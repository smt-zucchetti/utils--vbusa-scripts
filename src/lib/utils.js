export async function createListFromFeed(listClassName)
{
    return returnElementWhenAvailable('ul.list-partners').then((ul) =>
    {
        const newUl = document.createElement('ul')
        newUl.classList.add(listClassName)
     
        Array.from(ul.children).forEach(li => 
        {
            const image = li.querySelector('img')
            let newImage 
            if(image)
            {
                const source = image.getAttribute('src')
                newImage = document.createElement('img')
                newImage.classList.add(listClassName + '--image')
                newImage.setAttribute('src', 'https://verticalbooking.com' + source)
            }
            
            const textDiv = li.querySelector('.partner-name > p')
            let newSpan
            if(textDiv)
            {
                const text = textDiv.textContent
                newSpan = document.createElement('span')
                newSpan.classList.add(listClassName + '--text-span')
                newSpan.textContent = text
            }
            
            if(image && textDiv)
            {
                const newLi = document.createElement('li')
                newLi.classList.add(listClassName + '--list-item')
                newLi.appendChild(newImage)
                newLi.appendChild(newSpan)
                
                newUl.appendChild(newLi)
            }
        })
        
        return newUl
    })  
}
    
async function returnElementWhenAvailable(selector)
{
    await getElementBySelector(selector)
    return document.querySelector(selector)    
}   
    
async function getElementBySelector(selector)
{
	while(!document.querySelector(selector)) 
	{
	  await new Promise(r => setTimeout(r, 100))
	}
}