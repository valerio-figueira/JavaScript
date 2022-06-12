function limpar(){
    let res = document.getElementById('res')
    res.textContent = null
}


function verificar(){
    let input = document.getElementById('letter')
    let res = document.getElementById('res')
    
    let letter = String(input.value).toLocaleUpperCase()

    let p = document.createElement('p')
    p.style.color = 'black'
    
    res.appendChild(p)

    if(letter.length > 1 && (letter.match("[0-9]") || letter.match("[A-z]"))){
        p.style.color = 'crimson'
        p.innerHTML = '[ERRO] Caracteres inválidos!'
    } else if(letter.match("[0-9]")){
        p.style.color = 'crimson'
        p.innerHTML = '[ERRO] Valor numérico!'
    } else if(letter == null || letter == 0){
        p.style.color = 'crimson'
        p.innerHTML = '[ERRO] Digite uma letra!'
    } else{
        if(letter == 'A' || letter == 'E' || letter == 'I' || letter ==  'O' || letter == 'U'){
            p.innerText = 'Você digitou uma vogal'
        } else{
            p.innerText = `Você digitou uma consoante`
        }
    }

}