const perguntas = ["1 - Telefonou para a vítima?",
"2 - Esteve no local do crime?",
"3 - Mora perto da vítima?",
"4 - Devia para a vítima?",
"5 - Já trabalhou com a vítima?"]
let cont = 0

for (let i = 0; i<=4; i++) {
    const resposta = Number(prompt(perguntas[i]+"\nDigite 1 para Sim e 2 para Não"))
    if (resposta === 1) {
        cont++
    }
}

if (cont === 2) {
    console.log("Suspeito")
} else if (cont>2 && cont<=4) {
    console.log("Cúmplice")
} else if (cont>4) {
    console.log("Assassino")
} else {
    console.log("Inocente")
}