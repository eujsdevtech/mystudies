// Seleciona o elemento de entrada (input) com o id 'fnum', que contém o número a ser adicionado
let num = document.getElementById("fnum")
// Seleciona o elemento select com o id 'flista', que exibirá a lista de números adicionados
let lista = document.getElementById("flista")
// Seleciona o elemento div com o id 'res', onde serão exibidos os resultados finais
let res = document.getElementById("res")
// Inicializa um array vazio para armazenar os valores numéricos adicionados
let valores = []

// Função que verifica se o número está entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true // Retorna verdadeiro se o número estiver no intervalo
    } else {
        return false // Retorna falso caso contrário
    }
}

// Função que verifica se o número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true // Retorna verdadeiro se o número já estiver na lista
    } else {
        return false // Retorna falso se o número ainda não foi adicionado
    }
}

// Função chamada ao adicionar um novo número
function adicionar() {
    // Verifica se o número é válido (entre 1 e 100) e se não está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adiciona o número ao array de valores
        valores.push(Number(num.value))
        // Cria um novo elemento de opção (option) na lista
        let item = document.createElement("option")
        // Define o texto do item como o valor adicionado
        item.text = `Valor ${num.value} adicionado.`
        // Adiciona o item à lista visual
        lista.appendChild(item)
        // Limpa a área de resultado
        res.innerHTML = " "
    } else {
        // Exibe um alerta se o valor for inválido ou já estiver na lista
        window.alert("Valor inválido ou já encontra dentro da lista.")
    }
    // Limpa o campo de entrada e define o foco nele
    num.value = " "
    num.focus()
}

// Função chamada ao finalizar a adição de números
function finalizar() {
    // Verifica se a lista de valores está vazia
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar!") // Alerta se não houver números
    } else {
        let tot = valores.length // Total de números adicionados
        let maior = valores[0] // Inicializa a variável 'maior' com o primeiro valor da lista
        let menor = valores[0] // Inicializa a variável 'menor' com o primeiro valor da lista
        let soma = 0 // Inicializa a soma dos números como 0
        let media = 0 // Inicializa a média dos números como 0
        
        // Loop para calcular soma, maior e menor valor
        for (let pos in valores) {
            soma += valores[pos] // Soma todos os valores
            if (valores[pos] > maior)
                maior = valores[pos] // Atualiza o maior valor, se encontrar um número maior
            if (valores[pos] < menor)
                menor = valores[pos] // Atualiza o menor valor, se encontrar um número menor
        }
        
        // Calcula a média dos valores
        media = soma / tot

        // Exibe os resultados na área de resultado 'res'
        res.innerHTML = " "
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor listado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor listado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores listados são ${media}.</p>`
    }
}
