let num = [5, 8, 6, 0]

num[3] = 8 // substitui o valor zero por 3

num.push(0)
num.push(2)

num.sort() //reordenar os valores do vetor

console.log(`Total de posições do vetor: ${num.length}`)

console.log(num)

console.log(`O segundo valor do vetor é ${num[1]}`)

/*
for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let valor = 8
let pos = num.indexOf(valor)

console.log(`A posição de ${valor} no vetor é: ${pos}`) //buscar a posição de elementos no valor

if(pos == -1){
    console.log(`Valor não encontrado`)
} else{
    console.log(`Valor ${valor} encontrado! Sua posição: ${pos}`)
}