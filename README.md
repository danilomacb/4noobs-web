# Roadmap

- [Sobre](#Sobre)
- [Como adaptar um 4noobs?](#Como-adaptar-um-4noobs?)
  - [Alterações obrigatórias](##Alterações-obrigatórias)
  - [Alterações recomendadas](##Alterações-recomendadas)
- [Adicionando um novo 4noobs ao site](#Adicionando-um-novo-4noobs-ao-site)
- [Adicionando uma nova categoria ao site](#Adicionando-uma-nova-categoria-ao-site)
- [Estilos em code snippets](#Estilos-em-code-snippets)
- [Problemas / em andamento](#Problemas-/-em-andamento)

# Sobre

Este projeto é uma página web feita com React como objetivo exibir todos os 4noobs em apenas um lugar e com um dark theme padrão.

Este projeto está sendo hospedado em: [https://4noobs.netlify.app/](https://4noobs.netlify.app/)

# Como adaptar um 4noobs?

Para que um 4noobs seja renderizado corretamente na plataforma é necessário fazer algumas alterações no repositório, e também existem algumas recomendações para melhorar a experiência do usuário.

## Alterações obrigatórias

1. O nome do arquivo do readme deve ser `README.md`, pois o projeto busca especificamente por esse arquivo.
2. O readme deve conter um roadmap com os links para os arquivos, senão fica impossível de navegar pelos arquivos no site.
3. Os outros arquivos de markdown devem estar dentro da pasta 4noobsDocs, e as imagens devem ficar dentro da pasta 4noobsAssets. As pastas devem possuir esse nome específico pois é a partir dele que serão feitas alterações no arquivo, logo se possuísse um nome genérico poderiam ocorrer alterações indesejadas.

## Alterações recomendadas

1. Siga o modelo do [4noobs-model](https://github.com/danilomacb/4noobs-model).
2. Não coloque espaço e nem acentuação nos nomes dos arquivos.
3. Crie arquivos com nomes ordenados.
4. Coloque links nos arquivos para voltar, avançar e retornar ao roadmap.
5. Use imagens locais, imagens com origens externas também irão funcionar, porém existe a possibilidade delas serem alteradas, removidas, ou não serem exibidas por outros motivos, então use imagens locais de preferência.
6. Tome cuidado com imagens com fundo transparente, lembre-se que o site possui temas claro e escuro.
7. Não utilize tabelas, elas não funcionam muito bem de forma responsiva, e as tabelas que ultrapassam a largura da tela possuem uma barra lateral própria, porém seria melhor não utilizar tabelas.

# Adicionando um novo 4noobs ao site

Dentro da pasta `src` existe um arquivo chamado `4noobs.json`, que contém as informações dos 4noobs que serão exibidos. Esse arquivo é separado por categoria, então basta escolher uma categoria e adicionar um json dentro do array da categoria escolhida, contendo o nome que será exibido na `SideBar`, o nome do usuário e nome do repositório do github.

# Adicionando uma nova categoria ao site

Na `SideBar` as categorias não são dinâmicas, então será necessário alterar o código do component `SideBar`. Existe um componente chamado `Category` que recebe 2 props, um desses props é o title que será usado para exibir na `SideBar`, e o outro é um array que contém a chave corresponde no `4noobs.json`, então basta criar uma nova instância do component `Category` na `SideBar` com os devidos props.

# Estilos em code snippets

No site os code snippets possuem estilização para facilitar o entendimento do código, porém nem todas as linguagens serão estilizadas, abaixo possui a lista de linguagens e siglas que são aceitas.

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

1. Fazer as alterações necessárias nos repositórios originais dos 4noobs restantes e adicioná-los no site.
2. No momento somente links em markdown estão sendo convertidos para o component Link do React Router Dom, ou seja, links em HTML irão recarregar a página. Esse não é um erro crítico, porém é um comportamento que não deveria acontecer em uma aplicação feita em React.
3. Muitas imagens só são exibidas de forma clara com fundo branco, agora com o tema dark será necessário editar algumas imagens.
4. Existem alguns links que redirecionam para uma parte específica de uma página, geralmente até um h1 ou h2. Esses links na plataforma redirecionam apenas para o topo da página no momento.
