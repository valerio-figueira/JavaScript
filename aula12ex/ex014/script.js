function carregar(){
    var body = document.getElementsByTagName('body')[0]
    var h1 = document.getElementsByTagName('h1')[0]
    var p = document.getElementsByTagName('p')[0]
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora >= 0 && hora < 12) {
        img.src = 'imgs/manhã.png'
        body.style.background = '#d6ffaf'
        h1.style.color = 'black'
        p.style.color = 'black'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imgs/tarde.png'
        body.style.background = "#b98d52"
    } else {
        img.src = 'imgs/noite.png'
        body.style.background = "#393939"
    }
}