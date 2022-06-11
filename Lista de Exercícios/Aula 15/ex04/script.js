let g = ['F', 'M'] 

function verificar(){
    let text = document.getElementById('gender')
    let res = document.getElementById('res')
    
    let gender = String(text.value)

    let p = document.createElement('p')
    p.style.color = 'black'
    
    res.appendChild(p)

    if(gender == 'F' || gender == 'f'){
        p.innerText = 'É feminino'
    } else if(gender == 'M' || gender == 'm'){
        p.innerText = 'É masculino'
    } else{
        p.style.color = 'crimson'
        p.innerText = `[ERRO] Insira um valor válido`
    }

}