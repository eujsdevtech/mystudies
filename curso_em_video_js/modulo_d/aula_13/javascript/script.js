// Função principal que é chamada ao carregar a página
function carregar() {
    // Obtém a referência do elemento HTML com o ID "msg" (onde será exibida a mensagem)
    var msg = window.document.getElementById("msg");
    
    // Obtém a referência do elemento HTML com o ID "imagem" (onde será exibida a imagem)
    var img = window.document.getElementById("imagem");
    
    // Cria um objeto Date que representa a data e hora atual
    var data = new Date();
    
    // Obtém a hora atual (apenas as horas) do objeto Date
    var hora = data.getHours();
    
    // Atualiza o conteúdo do elemento "msg" para exibir a hora atual
    msg.innerHTML = `Agora são ${hora} horas.`;
    
    // Verifica o intervalo de tempo para determinar qual imagem exibir e qual cor de fundo aplicar
    
    // Se a hora estiver entre 0 e 12 (manhã)
    if (hora >= 0 && hora < 12) {
        // Altera a imagem para "amanhecer"
        img.src = "image/amanhecer.png";
        // Define a cor de fundo da página para um tom de verde (#68733F)
        document.body.style.background = "#68733F";
    
    // Se a hora estiver entre 12 e 18 (tarde)
    } else if (hora >= 12 && hora < 18) {
        // Altera a imagem para "entardecer"
        img.src = "image/entardecer.png";
        // Define a cor de fundo da página para um tom laranja (#F27830)
        document.body.style.background = "#F27830";
    
    // Se a hora for maior ou igual a 18 (noite)
    } else {
        // Altera a imagem para "anoitecer"
        img.src = "image/anoitecer.png";
        // Define a cor de fundo da página para um tom roxo escuro (#5F4C73)
        document.body.style.background = "#5F4C73";
    }
}
