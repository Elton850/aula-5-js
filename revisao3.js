const texto = String(prompt("Digite um texto:"))
const consoantes = "bcçdfghjklmnpqrstvwxyz"
let contador = 0


for (letra of texto.toLowerCase()) {
    if (consoantes.includes(letra)) {
        contador++
    }
}
console.log(contador)