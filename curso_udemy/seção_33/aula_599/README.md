# README

## Introdução

Este é um projeto de estrutura de página web responsiva, criado utilizando HTML e CSS. O objetivo é criar uma página que se adapte a diferentes tamanhos de tela, desde dispositivos móveis até computadores desktop.

## Componentes

### Estilos Globais

* `* { padding: 0; margin: 0; box-sizing: border-box; }`: Remove o preenchimento e margem padrão de todos os elementos e define o box-sizing para incluir o preenchimento e borda na largura e altura.

### Propriedades de Rolagem do HTML

* `html { scroll-behavior: smooth; }`: Define o comportamento de rolagem da página para ser suave.

### Estilos do Corpo da Página

* `body { font-family: sans-serif; }`: Define a família de fontes da página.

### Contêiner de Grade

* `.grid { padding: 15px; max-width: 1200px; margin: 0 auto; padding-top: 73px; }`: Define o contêiner de grade com preenchimento interno, largura máxima e margem automática.
* `.grid::after { content: ""; display: block; clear: both; }`: Limpa os elementos flutuantes e define o estilo de display em blocos.

### Colunas dentro do Contêiner de Grade

* `.grid .col { width: 300px; height: 300px; float: left; padding: 15px; }`: Define as colunas dentro do contêiner de grade com largura, altura, flutuação e preenchimento interno.

### Conteúdo das Colunas

* `.grid .col-content { width: 100%; height: 100%; background-color: darkslategray; color: white; border-radius: 20px; text-align: center; box-shadow: 5px 5px 5px lightseagreen; }`: Define o conteúdo das colunas com largura, altura, cor de fundo, cor do texto, borda arredondada e efeito de sombra.

### Menu de Navegação

* `.menu { width: 100%; position: fixed; background-color: lightslategrey; }`: Define o menu de navegação com largura, posição fixa e cor de fundo.
* `.menu ul { list-style: none; display: block; max-width: 1200px; padding: 0 30px; margin: 0 auto; }`: Define a lista de itens do menu com estilo de display em blocos, largura máxima e preenchimento interno.
* `.menu ul li { float: left; }`: Define os itens do menu como flutuantes à esquerda.
* `.menu ul li a { display: block; color: white; padding: 20px; text-decoration: none; transition: all 300ms ease-in-out; }`: Define os links do menu com estilo de display em blocos, cor do texto, preenchimento interno e efeito de transição.
* `.menu ul li a:hover { background-color: lightskyblue; color: slategray; border-radius: 0 10px; }`: Define o efeito de hover dos links do menu com cor de fundo, cor do texto e borda arredondada.

### Página Completa

* `.full-page { padding: 0 30px; max-width: 100%; padding-top: 73px; height: 100vh; background-color: aquamarine; }`: Define a página completa com preenchimento interno, largura máxima, altura e cor de fundo.
* `.full-page-content { max-width: 1200px; padding: 0 30px; margin: 0 auto; }`: Define o conteúdo da página completa com largura máxima, preenchimento interno e margem automática.

### Responsividade

* `@media all and (max-width: 568px) { .grid .col { width: 100%; } }`: Define a responsividade para telas pequenas (dispositivos móveis).
* `@media all and (min-width: 569px) and (max-width: 768px) { .grid .col { width: 50%; } }`: Define a responsividade para telas médias (tablets).
* `@media all and (min-width: 769px) and (max-width: 1200px) { .grid .col { width: 33.33%; } }`: Define a responsividade para telas grandes (computadores desktop).
* `@media all and (min-width: 1200px) { .grid .col { width: 25%; } }`: Define a responsividade para telas extra grandes (computadores desktop com resolução alta).

## Uso

Para usar este projeto, basta copiar o código HTML e CSS e colá-lo em um arquivo de texto. Em seguida, salve o arquivo com a extensão `.html` e abra-o em um navegador web. A página será exibida com a estrutura de grade responsiva e o menu de navegação fixo.

## Contribuição

Se você deseja contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request com as suas alterações. Certifique-se de que as alterações sejam compatíveis com a estrutura de grade responsiva e o menu de navegação fixo.

## Licença

Este projeto é licenciado sob a licença MIT. Você é livre para usar, modificar e distribuir o código, desde que você inclua a licença e os créditos de autoria.