const listaNumeros = []
let media = 0

for (let i = 1; i<=4; i++) {
    const numero = Number(prompt("Digite a nota:"))
    listaNumeros.push(numero)
    media = media + numero
}

console.log(`Notas: ${listaNumeros}\nMédia: ${media/4}`)