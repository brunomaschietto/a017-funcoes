// function imprimeNome() {
//     const nome = prompt('Digite seu nome')
//     console.log(`Olá ${nome}`)
// }

// imprimeNome();


// function imprimeTabuada() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`6 x ${i} = ${i * 6}`)
//     }
// }
// console.log('Tabuada do 6:\n')
// imprimeTabuada();

//Arrow function 

const imprimeNome = () => {
    const nome = prompt('Digite seu nome')
    console.log(`Olá ${nome}`)
}
imprimeNome();

const imprimeTabuada = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(`6 x ${i} = ${i * 6}`)
    }
}
console.log('Tabuada do 6:\n')
imprimeTabuada();
