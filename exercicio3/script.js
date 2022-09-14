function soma(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

function mult(x, y) {
    return x * y
}

function div(x, y) {
    return x / y
}

const num1 = +prompt('Digite um número:')
const num2 = +prompt('Digite outro número:')

console.log(soma(num1, num2))
console.log(sub(num1, num2))
console.log(mult(num1, num2))
console.log(div(num1, num2))
