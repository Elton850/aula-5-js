const arrayNumeros = []
const arrayPar = []
const arrayImpar = []

for (let i = 1; i<=20; i++) {
    const numero = Number(prompt("Digite um número"))
    if (numero%2 === 0) {
        arrayPar.push(numero)
    } else {
        arrayImpar.push(numero)
    }
    arrayNumeros.push(numero)
}

console.log(arrayNumeros)
console.log(arrayPar)
console.log(arrayImpar)