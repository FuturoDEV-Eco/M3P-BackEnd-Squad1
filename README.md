[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)
[![Git](https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)


# **🚮 RECICLA 365 API**

O **Recicla365** é uma plataforma que facilita o gerenciamento de resíduos e o acesso a pontos de coleta de materiais recicláveis. Usuários podem:
- **Cadastrar** novos pontos de coleta.
- **Encontrar** pontos de coleta próximos.
- **Visualizar** informações sobre os materiais aceitos em cada ponto.
- **Registrar** suas contribuições para a reciclagem.

![swagger](https://github.com/user-attachments/assets/49f5bd89-95dc-4b3f-a6d3-9bedf7cf793e)

## 🚀 **Tecnologias utilizadas**

- **Node.js**: Plataforma para executar JavaScript no servidor back-end.
- **Express**: Framework web para construir API RESTful.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Sequelize**: ORM para interação com PostgreSQL.
- **pg**: Cliente PostgreSQL.
- **pg-hstore**: Serializa e desserializa dados JSON para o PostgreSQL.
- **Axios**: Biblioteca para requisições HTTP.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **bcryptjs**: Hashing de senhas.
- **jsonwebtoken**: Criação e verificação de tokens JWT.
- **Swagger**: Interface gráfica para documentar e testar APIs.
- **Docker**: Plataforma para contêineres, facilitando o desenvolvimento e deploy.

## 🛠️ **Principais rotas do projeto**

- **Rota de Usuários**: Cadastro, atualização, exclusão, listagem e login.
- **Rota dos Locais de Coleta**: Após login, o usuário pode cadastrar, editar, excluir e listar seus locais de coleta, além de acessar um link do Google Maps.
- **Rota de Dashboard**: Rota pública que exibe todos os locais cadastrados, com informações sobre a quantidade de usuários e locais ativos.

## 🗄️ **Organização do banco de dados**

### **Tabela: usuários**

- `id`: ID único (Chave primária)
- `nome`: Nome do usuário
- `email`: Email (único)
- `password`: Senha (hash)
- `cpf`: CPF (único)
- `sexo`: Gênero (opcional)
- `data_nascimento`: Data de nascimento (opcional)
- `cep`, `logradouro`, `cidade`, `bairro`, `uf`, `complemento`: Informações de endereço
- `createdAt`, `updatedAt`: Datas de criação e atualização

### **Tabela: locais_coleta**

- `id`: ID único do local (Chave primária)
- `nome`, `descricao`: Nome e descrição do local
- `cep`, `logradouro`, `numero`, `cidade`, `bairro`, `uf`, `complemento`: Endereço completo do local
- `lat`, `lon`: Latitude e longitude
- `googleMapsLink`: Link do Google Maps
- `contato`: Telefone do local
- `tipo_residuos`: Tipos de resíduos aceitos (array)
- `usuario_id`: ID do usuário que cadastrou (Chave estrangeira)
- `createdAt`, `updatedAt`: Datas de criação e atualização

### **Relacionamento entre tabelas**

A relação entre **usuários** e **locais_coleta** é de um-para-muitos, onde um usuário pode cadastrar vários locais de coleta.

## 🌍 **Deploy com Render**

![Captura de tela Deploy com Render](https://github.com/user-attachments/assets/b1f5617d-282d-40b8-bb7f-32f4f47560f3)

## 🏃‍♂️ **Como rodar o projeto**

### 1. Instalar dependências:
```bash
npm install
cp .env_example .env
```

### 2. Rodar com Docker:
```bash
docker-compose up --build
```

### 3. Ambiente de desenvolvimento:
```bash
npm run start:dev
```

## 🧬 **Trabalhando com Migrations**

### Criar uma nova migration:
```bash
npx sequelize-cli migration:generate --name criar_tabela_usuarios
```

### Rodar as migrations:
```bash
npx sequelize db:migrate
```

### Reverter a última migration:
```bash
npx sequelize-cli db:migrate:undo
```

### Reverter todas as migrations:
```bash
npx sequelize-cli db:migrate:undo:all
```

## 🌱 **Trabalhando com Seeders**

### Rodar os seeders:
```bash
npx sequelize db:seed:all
```

## 📄 **Documentação do Sequelize**
Acesse: [Sequelize Docs](https://sequelize.org/docs/v6/core-concepts/model-basics/)

## 🧩 **Trabalhando com Documentação**

### Gerar o Swagger.json usando AutoGen:
```bash
npm run swagger
```

### Acessar o Swagger no navegador:
- URL: `http://localhost:3000/docs/`

## 📦 **Bibliotecas utilizadas**
- `npm install sequelize`
- `npm install pg`
- `npm install -g sequelize-cli`
- `npm install dotenv`
- `npm install jsonwebtoken`
- `npm install axios`
- `npm install swagger-ui-express`
- `npm install swagger-autogen`

## 💻 **Desenvolvedores**
- **Deyse Aiala**: :octocat: [GitHub](https://github.com/deyseaiala)
- **Viviani Harima**: :octocat: [GitHub](https://github.com/vivianiharima)
- **Lucas Pedro**: :octocat: [GitHub](https://github.com/lucasplcorrea)
- **André Luiz**: :octocat: [GitHub](https://github.com/andreluizamorimdev)
