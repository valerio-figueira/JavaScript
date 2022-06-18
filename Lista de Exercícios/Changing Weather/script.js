let body = document.getElementsByTagName('body');

let div = document.createElement('div')
let h2 = document.createElement('h2')
let p = document.createElement('p')
let main = document.createElement('main')
let input = document.createElement('input')

body[0].appendChild(main)
main.appendChild(h2)
main.appendChild(div)
main.appendChild(p)

h2.textContent = 'Type if the weather is cold or warm'
h2.style.textAlign = 'center'
h2.style.fontSize = '18px'


input.setAttribute('type', 'text')
input.style.display = 'block'
input.style.padding = '6px'

div.style.justifyContent = 'center'

div.style.display = 'flex'
div.appendChild(input)

body[0].style.backgroundColor = 'midnightblue'

document.getElementsByTagName('h1')[0].style.color = 'azure'
document.getElementsByTagName('h1')[0].style.textAlign = 'center'

main.style.width = '50%'
main.style.height = '460px'
main.style.backgroundColor = 'azure'
main.style.margin = 'auto'
main.style.padding = '18px'
main.style.borderRadius = '6px'

input.addEventListener('input', function(){
    p.style.textAlign = 'center'
    p.textContent = 'Weather is ' + String(input.value);
})







/*let text = `Weather is ${String(input.value)}`;
const newText = text.replace('cold', 'warm');
p.textContent = newText
p.style.textAlign = 'center'

if(newText.search('warm')){
    body[0].style.backgroundColor = 'crimson'
}*/