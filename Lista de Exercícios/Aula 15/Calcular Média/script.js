let res = document.getElementById('res')
let td = document.getElementsByTagName('td')
let input = document.getElementById('notas')
let mediaText = document.querySelector('#média')
let resultado = document.querySelector('#aprovação')

function enviar(){
    let i
    if(Number(input.value) > 10 || Number(input.value) < 0){
        alert('Valor inválido')
    } else{
        for(i = 0; i < td.length - 2; i++){
            if(td[i].textContent == ''){
                td[i].textContent = `${notas[i] = Number.parseFloat(input.value)}`
                break;
            }
        }
    }
}

function calcular(){
    let media = 0
    for(i = 0; i < td.length - 2; i++){
        media += notas[i]
    }
    media = media / (td.length - 2)

    if(media >= 7 && media < 10){
        resultado.style.color = 'green'
        resultado.textContent = `Aprovado!`
    } else if(media < 7){
        resultado.style.color = 'crimson'
        resultado.textContent = `Reprovado!`
    } else{
        resultado.style.color = 'green'
        resultado.textContent = `Aprovado com distinção!`
    }

    mediaText.textContent += `Média: ${media}`
}

function limpar(){
    for(let i = 0; i < td.length; i++){
        td[i].textContent = null
    }
}