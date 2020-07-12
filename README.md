# Sobre

Este projeto é feito com React e tem como objetivo exibir todos os 4noobs em apenas um lugar. Ele vai ler e exibir os arquivos markdown, e irá fazer modificações nos links e origens de imagens para que a navegação na página seja possível, para isso é preciso serguir as regras abaixo.

# Regras

1. O nome do readme deve ser README.md
2. O readme deve conter um roadmap com os links para os arquivos, senão fica impossível de navegar pelos arquivos no site
3. Os outros arquivos de markdown devem estar dentro da pasta 4noobsDocs, sem subpastas dentro da mesma
4. As imagens devem ficar dentro da pasta 4noobsAssets, sem subpastas dentro da mesma
5. Os links e imagens devem começar com ./
6. Links para o roadmap (README.md) devem ser ../README.md

# Recomendações

1. Siga o modelo do [4noobs-model](https://github.com/danilomacb/4noobs-model)
2. Não coloque espaço e nem acentuação nos nomes dos arquivos
3. Crie arquivos com nomes ordenados
4. Caso queira criar subcategorias coloque no início do nome do arquivo. Ex.: 1-Categoria_1-Nome.md
5. Coloque links nos arquivos para voltar, avançar e retornar ao roadmap

# Adicionando um novo 4noobs

Adicionar um novo 4noobs não vai ser uma tarefa difícil, dentro da pasta src existe um arquivo chamado 4noobs.json, que é de lá quem vem as informações dos 4noobs que serão exibidos. Esse arquivo é separado por categoria, então basta escolher uma categoria e adicionar um json dentro do array da mesma contendo o nome que será exibido na sidebar, o nome do usuário e do repositório do github. Agora adicionar uma nova categoria é um pouco mais complicado, pois na sidebar as categorias não são dinâmicas, então vai ser necessário alterar o código do component SideBar.js
