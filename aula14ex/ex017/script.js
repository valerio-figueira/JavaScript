let p = []
let i
const max = 10

for(i = 0; i < max; i++){
    p[i] = document.createElement('p')
}

function calcular(){
    let number = document.getElementById('number')
    let res = document.getElementById('res')

    if(number.value.length == 0){
        alert('Por favor, digite um número')
    } else{
        let n = Number(number.value)
        
        p[0].style.marginTop = '8px'
    
        for(i = 1; i <= max; i++){
            res.appendChild(p[i - 1])
            p[i - 1].innerHTML = `${n} * ${i} = ${n*i}`
        }
    }
    

}