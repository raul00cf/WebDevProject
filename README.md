# WebDevProject

## Students
- Raul Cotrim Ferreira - 10748330

## Project Report

### Requirements

Como requisito do projeto de e-commerce aqui desenvolvido, temos:

- O sistema desenvolvido precisa ter 2 tipos de usuários: Cliente e Administrador
  - O administrador é responsável pelo registro e gerenciamente dos cliente e dos produtos ou serviços prestados. A aplicação tem o padrão de usuário e senha para o acesso do adminstrador
  - Os clientes são usuários que têm acesso ao sistema para comprar os produtos, apresentando a necessidade de login para finalizar o processo
- As informações mínimas que devem ser salvas dos usuários são nome, número de identificação, endereço, telefone e email (o usuário de administrador não precisa fornecer o endereço).
- Os produtos e/ou serviços devem ser salvos incluindo minimamente seu nome, número de identificação, descrição, preço, quantidade em estoque e quantidade vendida. 
- As compras são guardadas em um carrinho de compras e a mesma é finalizada utilizando o cartão de crédito. A quantidade de produtos vendidos será reduzida da quantidade do produto em estoque. Os produtos do carrinho de compras só podem ser esvaziados pelo cliente ou pelo pagamento da compra.
- O administrador pode realizar as operações básicas de consulta, adição, remoção e edição dos produtos da plataforma.
-  O site desenvolvido deve apresentar uma funcionalidade única, não havendo a necessidade de ser complexa.
- O sistema deve ser acessível e promover uma boa usabilidade.

### Project Description

Esse projeto apresenta-se no desenvolvimento de uma plataforma online de vendas de carros. Dentro dessa plataforma, será apresentado diferentes tipos de carros, podendo ser carros esportivos, sedans, hatches e SUVs de diferentes cores. Além disso, o comprador tem a oportunidade de ouvir e testar o motor dos carros anteriormente a compra.

Para realizar a compra, o usuário deverá se inscrever no website utilizando o seu email e senha, além de fornecer dados como nome, endereço e telefone. Com a conta criada, o usuário tem a possibilidade de realizar as compras, além de alterar as informações da conta, adicionar informações como data de nascimento e gênero e revisar compras anteriores realizadas na conta. Por fim, vale ressaltar que durante a compra, o usuário deverá apresentar seu número de cartão de crédito, além da seleção de quantas parcelas para a finalização da compra.

O site também apresenta a funcionalidade para administradores da plataforma, em que o administrador poderá fazer a adição, remoção e alteração dos carros apresentados no servidor, além de ter a liberdade de verificar e deletar os usuários presentes na plataforma.

É possível fazer a verificação das páginas presentes no site na plataforma Figma: https://www.figma.com/file/cvPb6Ms3RUTIOx7YrlrcsF/The-CarStore-MockUP?node-id=0%3A1

Além disso, é possível, a partir da plataforma Figma, verificar o funcionamento básico das telas apresentadas: https://www.figma.com/proto/cvPb6Ms3RUTIOx7YrlrcsF/The-CarStore-MockUP?node-id=1%3A136&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A136

### Comments About the Code

O código desenvolvido é apresentado dentro da pasta '/src', apresentando os arquivos básicos da funcionalidade do React e os desenvolvidos para esse projeto.

- Arquivos 'App.js' e 'index.js' são os arquivos bases padrão do React;
- Arquivo 'context.js' que apresenta a base da utilização do Context disponível pelo React;
- Arquivo 'GlobalStyle.js' apresentado uma estilização padrão adotado por todas as páginas;
- Pasta '/audio' onde é armazenado os arquivos de audio para a funcionalidade de corneta;
- Pasta '/images' onde é armazeado os arquivos de imagens das páginas;
- Pasta '/Helpers' que apresentam funções e arquivos de suporte para o funcionamento das páginas, de forma a manter a organização;
- Pasta '/Hooks' que apresentam os controles da maioria dos hooks e estados utilizados nas páginas;
- Pasta '/Components' que apresentam os componentes utilizados, apresentando:
  - Arquivo 'Home.js' apresentando a central da página desenvolvida;
  - Pastas para cada componente, apresentando dentro um arquivo 'index.js' apresentando a parte lógica de Javascript/React e um arquivo '{nomeDaPasta}.styles.js' que apresenta a estilização do componente.

### Test Plan

Nenhuma ferramenta de teste foi utilizada, sendo os testes feitos a partir da build de desenvolvedor disponível pelo React.

### Test Results

A partir dos testes feitos, a página apresenta-se funcional, apresentando o sistema de armazenamento de sessão e local para simular a utilização de um banco de dados.

### Build Procedures

Para utilizar rodar o código desenvolvido, deve-se realizar a instalação do Nodejs em https://nodejs.org/pt-br/ e do React em https://reactjs.org/docs/getting-started.html. Com o React instalado, deve-se fazer o download da pasta 'store' e utilizá-la para o React. Para finalizar a instalação e iniciar o funcionamento da página, deve-se, no terminal, ir até a pasta 'store' baixada e utilizar os comandos:

- npm i react-router-dom
- npm i styled-components

Assim, para funcionar o código, deve-se, na pasta 'store' utilizar o comando 'npm start', iniciando o programa. Deve abrir uma janela com a página no navegador, mas caso não ocorra, pode acessar em http://localhost:3000 ou http://{ip}:3000, sendo possível, esse ultimo, o acesso em qualquer dispositivo na rede local.

### Problems

Nenhum problema a decarar.

### Comments

Nenhum Comentario a decarar.
