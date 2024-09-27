// Função para verificar a idade e gênero da pessoa com base no ano de nascimento e exibir uma imagem correspondente
function verificar() {
    
    // Obtém o ano atual
    var data = new Date()
    var ano = data.getFullYear()

    // Pega o valor do ano de nascimento inserido pelo usuário
    var fano = window.document.getElementById("txtano")

    // Pega o elemento onde o resultado será exibido
    var res = window.document.getElementById("res")

    // Verifica se o ano de nascimento está vazio ou se é maior que o ano atual
    if (fano.value.length == 0 || fano.value > ano) {
        // Exibe um alerta se os dados estiverem incorretos
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        // Obtém os botões de seleção de gênero (masculino ou feminino)
        var fsex = window.document.getElementsByName("radsex")
        
        // Calcula a idade com base no ano de nascimento
        var idade = ano - fano.value

        // Variável para armazenar o gênero
        var genêro = ""
        
        // Cria um elemento de imagem para exibir a foto correspondente
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.width = "300px"
        img.style.height = "300px"
        img.style.marginTop = "1.5rem"

        // Verifica se o gênero selecionado é masculino
        if (fsex[0].checked) {
            genêro = "Homem"
            
            // Exibe uma imagem com base na faixa etária
            if (idade >= 0 && idade < 8) {
                img.setAttribute("src", "image/bebe.png") // Bebê
            } else if (idade <= 22) {
                img.setAttribute("src", "image/homem_jv.png") // Jovem adulto
            } else if (idade <= 50) {
                img.setAttribute("src", "image/homem_adt.png") // Adulto
            } else {
                img.setAttribute("src", "image/homem_id.png") // Idoso
            }
        
        // Verifica se o gênero selecionado é feminino
        } else if (fsex[1].checked) {
            genêro = "Mulher"
            
            // Exibe uma imagem com base na faixa etária
            if (idade >= 0 && idade < 8) {
                img.setAttribute("src", "image/bebe.png") // Bebê
            } else if (idade <= 22) {
                img.setAttribute("src", "image/mulher_jv.png") // Jovem adulta
            } else if (idade <= 50) {
                img.setAttribute("src", "image/mulher_adt.png") // Adulta
            } else {
                img.setAttribute("src", "image/mulher_id.png") // Idosa
            }
        }

        // Exibe o resultado com o gênero e a idade detectados
        res.innerHTML = `Detectamos, um <strong>${genêro}</strong> com ${idade} anos.`
        
        // Adiciona a imagem ao elemento de resultado
        res.appendChild(img)
    }
}
