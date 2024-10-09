function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    //Barra de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Condição de pesquisa
    if (campoPesquisa == "") {
      section.innerHTML = "<p>A equipe buscada não foi encontrada!</p>"
      return
    }
    //Condição para modificar o imput do usuário para letras minúscolas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para acumular o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    // Itera sobre os dados da pesquisa (assumindo que 'dados' é um array)
    for (let data of dados) {
      titulo = data.titulo.toLowerCase()
      descricao = data.descricao.toLowerCase()
      // Constrói o HTML de um resultado individual usando template literals
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${data.titulo}</a> 
          </h2>
          <p class="descricao-meta">${data.descricao}</p>
          <a href="${data.link}" target="_blank" rel="next"> Clique e saiba mais!</a>
        </div>
      `;
      }
    }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado!</p>"
  }
  
    // Insere o HTML dos resultados na seção correspondente
    section.innerHTML = resultados;
  };