let g = ['F', 'M'] 

let p = document.createElement('p')
let img = document.createElement('img')

function verificar(){
    let text = document.getElementById('gender')
    let res = document.getElementById('res')
    
    let gender = String(text.value)
    
    p.style.color = 'black'
    
    res.appendChild(p)
    res.appendChild(img)

    if(gender == 'F' || gender == 'f'){
        p.innerText = 'É mulher!'
        img.setAttribute('src', 'imgs/mulher.png')
    } else if(gender == 'M' || gender == 'm'){
        p.innerText = 'É homem!'
        img.setAttribute('src', 'imgs/homem.png')
    } else{
        p.style.color = 'crimson'
        p.innerText = `[ERRO] Não é humano!`
        img.setAttribute('src', '')
    }
}