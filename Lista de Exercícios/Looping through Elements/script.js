const inputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')
const res = document.querySelector('#res')

btn.addEventListener('click', function(){
    let media = 0
    for(const input of inputs){
        if(Number(input.value) > 0 && Number(input.value) <= 10){
            media += Number(input.value)
        } else{
            res.textContent = 'Valor inválido'
            break;
        }
        
    }
    res.innerHTML = `${media / (inputs.length - 1)}` 
})