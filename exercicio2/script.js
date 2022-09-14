function soma(num1, num2) {
    return num1 + num2
} 

console.log(soma(2, 3));

function numero(x, y) {
    if (x >= y) {
        return `O primeiro número é maior que o segundo?: ${true}`
    } else {
        return `O primeiro número é maior que o segundo?: ${false}`
    }
}

console.log(numero(2, 10))

const numeroPar = (num) => {
    if (num %2 === 0) {
        return 'Este número é par'
    } else {
        return 'Este número é ímpar'
    }
}

console.log(numeroPar(5));

const funcaoString = (nome) => {
    return `O tamanho do nome é: ${nome.length} e o nome em maisculo ${nome.toUpperCase()}`
}
console.log(funcaoString('Tamanho'));


