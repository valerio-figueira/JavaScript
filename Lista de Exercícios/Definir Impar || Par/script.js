const body = document.getElementsByTagName('body')

const title = document.createElement('h1')
const main = document.createElement('main')
const section = document.createElement('section')
const header = document.createElement('header')
const article = document.createElement('article')
const h2 = document.createElement('h2')


body[0].style.width = '70%'
body[0].style.margin = 'auto'
body[0].style.background = 'midnightblue'

body[0].appendChild(header)
body[0].appendChild(main)

header.style.background = 'azure'
header.style.borderRadius = '4px'
header.appendChild(title)

title.textContent = 'Ímpar || Par'
title.style.padding = '12px'
title.style.color = 'midnightblue'

main.appendChild(section)
main.style.background = 'azure'
main.style.borderRadius = '4px'

section.style.height = '400px'
section.style.padding = '18px'

//BUTTONS
const input = document.createElement('input')
const btn = document.createElement('input')
const div = document.createElement('div')

section.appendChild(div)
div.appendChild(input)
div.appendChild(btn)

div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.padding = '18px'

input.setAttribute('type', 'number')

btn.setAttribute('type', 'button')
btn.setAttribute('value', 'Enviar')
btn.style.padding = '8px'
btn.style.marginLeft = '6px'

section.appendChild(article)
article.appendChild(h2)
h2.textContent = '[RESULTADO]'
h2.style.color = 'azure'
h2.style.padding = '8px'
h2.style.background = 'midnightblue'
h2.style.textAlign = 'center'



btn.addEventListener('click', function (){
    let x = Number(input.value)
    if(x % 2 == 0){
        h2.textContent = 'Par'
        h2.style.color = '#83d80c'
        h2.style.padding = '8px'
        h2.style.background = 'midnightblue'        
    } else{
        h2.textContent = 'Ímpar'
        h2.style.color = 'gold'
        h2.style.padding = '8px'
        h2.style.background = 'midnightblue'        
    }
})