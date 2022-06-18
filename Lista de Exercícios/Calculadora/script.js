let input = document.getElementsByClassName('number')
let display = document.querySelector('#display')



let num = []


for(let i = 0; i < input.length; i++){
    input[i].addEventListener('click', function(){
        num[i] = Number(input[i].value)
        display.textContent += num[i]
    })
}

