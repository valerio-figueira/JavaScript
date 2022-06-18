var x = 10
var y = 15

if(y > 10){
    x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)


function logName(){
    const name = 'Valerio'
    console.log(name)
}

const name = 'João'

console.log(name)

logName()





/* ARROW FUNCTION */

const sum = function sum(a, b){
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

const arrowSum2 = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(10, 10))
console.log(arrowSum2(10, 15))


const greeting = (name) => {
    if(name){
        return 'Olá, ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Gandalf'))
console.log(greeting())



const testeArrow = () => console.log('testou!')


testeArrow()


const user = {
    name: 'Gandalf',
    sayUserName(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log('Username: ' + this.name)
        }, 700)
    }
}

user.sayUserName()