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

O código é apresentado em duas partes, sendo todo ele encontrado dentro da pasta '/FullSite'. Nessa pasta existem os códigos para o servidor (pasta '/server') e para a aplicação (pasta '/store')

#### Pasta '/server'

Dentro da pasta server apresentam-se os arquivos para o servidor.

- Arquivo '.env' que apresenta a informação da conexão com o servidor MongoDB;
- Pasta '/bin', onde é iniciado o servidor;
- Pasta '/data', onde são armazeados e encontrados os arquivos de imagem e audio do servidor;
- Pasta '/models', onde são apresentados os modelos do MongoDB do usuário e do produto;
- Pasta '/src', onde é apresentado toda a lógica do servidor:
  - Arquivo 'app.js' que apresenta-se como o arquivo principal do desenvolvimento do servidor;
  - Pasta '/routes', onde são apresentadas as funções de requisição para cada rota acessada.
  
#### Pasta '/store'

O código desenvolvido é apresentado dentro da pasta '/src', apresentando os arquivos básicos da funcionalidade do React e os desenvolvidos para esse projeto.

- Arquivos 'App.js' e 'index.js' são os arquivos bases padrão do React;
- Arquivo 'context.js' que apresenta a base da utilização do Context disponível pelo React;
- Arquivo 'GlobalStyle.js' apresentado uma estilização padrão adotado por todas as páginas;
- Pasta '/images' onde é armazeado as imagens padrões da aplicação;
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

Para utilizar rodar o código desenvolvido, deve-se realizar a instalação do Nodejs em https://nodejs.org/pt-br/ e do React em https://reactjs.org/docs/getting-started.html. Para realizar as instalações dos pacotes utilizados, basta abrir a pasta '/server' dentro do terminal e utilizar o comando `npm install`. Além disso, deve-se fazer o mesmo para a pasta '/store'.

Assim, para funcionar o código, deve-se abrir em um terminal a pasta '/server' e utilizar o comando `npm run start`. Em seguida, irá aparecer que o servidor está funcionando em http://localhost:5000/ - http://{ip}:5000. Assim, deve-se colocar o valor de {ip} como o valor do endereço dentro do arquivo '.env' pasta '/store' (deve ficar REAT_APP_IP={valor do ip que o servidor está funcionando}, sem os {}). Por fim, deve-se abrir em um novo terminal a pasta '/store' e utilizar o comando `npm start`, iniciando a aplicação. Assim, deve abrir uma janela com a página no navegador, mas caso não ocorra, pode acessar em http://localhost:3000 (na mesma máquina que está rodando os terminais) ou http://{ip que colocou no .env / que está rodando o servidor}:3000, sendo possível, esse ultimo, o acesso em qualquer dispositivo na rede local.

### Problems

Nenhum problema a decarar.

### Comments

Nenhum Comentario a decarar.
