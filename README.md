# Link

Este projeto está sendo hospedado em: [https://4noobs.netlify.app/](https://4noobs.netlify.app/)

# Sobre

Este projeto é feito com React e tem como objetivo exibir todos os 4noobs em apenas um lugar. Ele vai ler e exibir os arquivos markdown, e irá fazer modificações nos links e origens de imagens para que a navegação na página seja possível, para isso é preciso serguir as regras abaixo.

# Regras

1. O nome do readme deve ser `README.md`.
2. O readme deve conter um roadmap com os links para os arquivos, senão fica impossível de navegar pelos arquivos no site.
3. Os outros arquivos de markdown devem estar dentro da pasta 4noobsDocs, e as imagens devem ficar dentro da pasta 4noobsAssets. As pastas devem possuir esse nome específico pois é a partir dele que serão feitas alterações no arquivo, logo se possuisse um nome genérico poderiam ocorrer alterações indesejadas.

# Recomendações

1. Siga o modelo do [4noobs-model](https://github.com/danilomacb/4noobs-model).
2. Não coloque espaço e nem acentuação nos nomes dos arquivos.
3. Crie arquivos com nomes ordenados.
4. Coloque links nos arquivos para voltar, avançar e retornar ao roadmap.
5. Use imagens locais, imagens com origens externas tabém irão funcionar, porém existe a possibilidade delas serem alteradas, removidas, ou não serem exibidas por outros motivos, então use imagens locais de preferência.
6. Tome cuidado com imagens com fundo transparente, lembre-se que o site possui temas claro e escuro.

# Adicionando um novo 4noobs

Adicionar um novo 4noobs não vai ser uma tarefa difícil, dentro da pasta `src` existe um arquivo chamado `4noobs.json`, que contém as informações dos 4noobs que serão exibidos. Esse arquivo é separado por categoria, então basta escolher uma categoria e adicionar um json dentro do array da categoria escolhida, contendo o nome que será exibido na `SideBar`, o nome do usuário e nome do repositório do github.

# Adicionando uma nova categoria

Adicionar uma nova categoria é um pouco mais complicado, pois na `SideBar` as categorias não são dinâmicas, então vai ser necessário alterar o código do component `SideBar`. Porém existe um componente chamado `Category` que recebe 2 props, um title que será usado para exibir na `SideBar`, e um array que contém a chave corresponde no `4noobs.json`, então basta criar uma nova instância na `SideBar`.

# Estilos em code snippets

<table>
  <tr>
    <th>Linguagens Registradas</th>
    <th>Classes</th>
  </tr>
  <tr>
    <td>Bash</td>
    <td>bash, sh</td>
  </tr>
  <tr>
    <td>C</td>
    <td>c</td>
  </tr>
  <tr>
    <td>C++</td>
    <td>cpp, c++</td>
  </tr>
  <tr>
    <td>C#</td>
    <td>csharp, cs</td>
  </tr>
  <tr>
    <td>Elixir</td>
    <td>elixir</td>
  </tr>
  <tr>
    <td>GO</td>
    <td>golang, go</td>
  </tr>
  <tr>
    <td>HTML</td>
    <td>html</td>
  </tr>
  <tr>
    <td>Java</td>
    <td>java</td>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>javascript, js, jsx</td>
  </tr>
  <tr>
    <td>Markdown</td>
    <td>markdown, md</td>
  </tr>
  <tr>
    <td>PHP</td>
    <td>php</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>python, py</td>
  </tr>
  <tr>
    <td>Ruby</td>
    <td>ruby, rb</td>
  </tr>
  <tr>
    <td>Rust</td>
    <td>rust, rs</td>
  </tr>
</table>

# Problemas / em andamento

1. Por enquanto quase todos os repositórios que estão sendo utilizados são forks, então será necessário alterar todos os 4noobs para que funcione da forma correta no site.
2. No momento somente links em markdown estão sendo convertidos para o component Link do react router dom, ou seja, links em HTML irão recarregar a página.
3. Muitas imagens só são exibidas de forma clara com fundo branco, agora com o tema dark será necessário editar algumas imagens.
4. Tabelas não funcionam muito bem de forma responsiva, as tabelas que ultrapassam a largura da tela possuem uma barra lateral própria, porém seria melhor não utilizar tabelas, principalmente na home.
5. Existem alguns links que redirecionam para uma parte específica de uma página, geralmente até um h1 ou h2. Esses links na plataforma redirecionam apenas para o topo da página no momento.
