// Função responsável por gerar a tabuada de um número fornecido pelo usuário
function tabuada() {
    // Obtém o elemento de entrada (input) onde o usuário insere o número
    let num = document.getElementById("txtn");
    
    // Obtém o elemento select onde será exibida a tabuada
    let tab = document.getElementById("seltab");
    
    // Verifica se o campo de entrada está vazio
    if (num.value.length == 0) {
        // Se o campo estiver vazio, exibe um alerta solicitando que o usuário digite um número
        window.alert("Por favor, digite um número!");
    } else {
        // Converte o valor digitado no campo de entrada para um número
        let n = Number(num.value);
        
        // Inicializa um contador para controlar a multiplicação
        let c = 1;
        
        // Limpa o conteúdo anterior do elemento select, para que a nova tabuada seja exibida corretamente
        tab.innerHTML = " ";
        
        // Laço de repetição que vai de 1 a 10, gerando os resultados da tabuada
        while (c <= 10) {
            // Cria um novo elemento option para representar cada linha da tabuada
            let item = document.createElement("option");
            
            // Define o texto do option com o resultado da multiplicação
            item.text = `${n} x ${c} = ${n * c}`;
            
            // Atribui um valor ao option, que pode ser usado para identificá-lo posteriormente
            item.value = `tab${c}`;
            
            // Adiciona o novo option ao elemento select, que contém a tabuada
            tab.appendChild(item);
            
            // Incrementa o contador para a próxima multiplicação
            c++;
        }
    }
}
