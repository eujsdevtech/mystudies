function contar() {
    // Obtém os valores dos campos de entrada (início, fim, passo) e do elemento de resultado
    let ini = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res");

    // Verifica se algum dos campos está vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!";
    } else {
        res.innerHTML = "Contando: <br>";
        let i = Number(ini.value);  // Converte o valor inicial para número
        let f = Number(fim.value);  // Converte o valor final para número
        let p = Number(passo.value);  // Converte o passo para número
        
        // Se o valor do passo for inválido (zero ou negativo), define o passo como 1
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }

        // Contagem crescente (do menor para o maior)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;  // Adiciona o valor atual seguido de um emoji de seta
            }
        } 
        // Contagem regressiva (do maior para o menor)
        else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `;  // Adiciona o valor atual seguido de um emoji de seta
            }
        }
        
        // Adiciona o emoji de bandeira para indicar o fim da contagem
        res.innerHTML += `\u{1F3C1}`;
    }
}
