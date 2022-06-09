function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    res.style.textAlign = 'center'


    if(Number(fano.value) == 0 || Number(fano.value) > ano){
        res.style.color = 'crimson'
        res.innerHTML = '[ERRO] Ano inválido'
    } else{
        res.style.color = 'black'
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos.`
        var gênero = null

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 3){
                img.setAttribute('src', 'imgs/bebê-menino.png')
            } else if(idade <= 12){
                img.setAttribute('src', 'imgs/criança-menino.png')
            } else if(idade <= 27){
                img.setAttribute('src', 'imgs/homem-jovem.png')
            } else if(idade <= 50){
                img.setAttribute('src', 'imgs/homem-adulto.png')
            } else{
                img.setAttribute('src', 'imgs/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade <= 3){
                img.setAttribute('src', 'imgs/bebê-menina.png')
            } else if(idade <= 12){
                img.setAttribute('src', 'imgs/criança-menina.png')
            } else if(idade <= 27){
                img.setAttribute('src', 'imgs/mulher-jovem.png')
            } else if(idade <= 50){
                img.setAttribute('src', 'imgs/mulher-adulta.png')
            } else{
                img.setAttribute('src', 'imgs/idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}