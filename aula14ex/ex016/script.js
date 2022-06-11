function start(){
    let inicio = document.getElementById('início')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')



    let p = document.createElement('p')
    p.style.color = 'crimson'
    p.style.margin = '0'
    p.style.paddingBottom = '15px'
    p.style.textAlign = 'center'
    res.appendChild(p)




    if(fim == 0 && inicio == 0 && passo == 0){
        alert('[ERRO] O contador não pode ter todos os campos vazios.')
    } else if(inicio > 0 && fim == 0){
        alert('[ERRO] O contador deve ter um valor final')
    } else if(passo <= 0){
        alert('[ERRO] Selecione um valor para o passo')
        passo = 1
    } else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            res.innerHTML = null
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{27A1}`
            }
        } else{
            res.innerHTML = null
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}