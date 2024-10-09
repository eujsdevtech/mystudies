// Condições Simples:
var idade = 18
if (idade >= 18) {
    console.log("Parabéns, você é maior de idade!")
}

// Condições Compostas:
var saldo = -1
if (saldo >= 1) {
    console.log("Seu saldo estar positivo, contienue assim!")
} else {
    console.log("Ops! Parece que esse mês os gastos superaram suas entradas, fique atento.")
}

// Condições Aninhadas:
var idade = 35
if (idade < 16) {
    console.log("Não pode votar!")
} else if (idade < 18 || idade > 65) {
        console.log("Voto opcional!")
} else {
    console.log("Voto é obrigatório.")
}

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 12) {
    console.log("Bom dia.")
} else if(hora <= 18) {
    console.log("Boa tarde.")
} else {
    console.log("Boa noite.")
}

// Condições Múltiplas:
var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem) {
    case 0:
        console.log("Hoje é Domingo.")
        break
    case 1:
        console.log("Hoje é Segunda-feira.")
        break
    case 2:
        console.log("Hoje é Terça-feira.")
        break
    case 3:
        console.log("Hoje é Quarta-feira.")
        break
    case 4:
        console.log("Hoje é Quinta-feira.")
        break
    case 5:
        console.log("Hoje é Sexta-feira.")
        break
    case 6:
        console.log("Hoje é Sábado.")
        break
    default:
        console.log("[ERR] Dia não encontrado!")
}