# 📋 README - Teste Técnico

Este projeto foi desenvolvido como parte de um teste técnico para demonstrar minhas habilidades em desenvolvimento de software, integração com banco de dados e boas práticas de configuração. Abaixo, você encontrará instruções claras e detalhadas para configurar e executar o projeto.

---

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

- **SQL Server**: Para gerenciar o banco de dados.
- **.NET SDK**: Versão utilizada no projeto: 9.0.100.
- **NODE.JS**: Versão utilizada no projeto: v20.17.0.

---

## 🗄️ Configuração do Banco de Dados

### 1. Conectando ao SQL Server

1. Inicie o aplicativo do SQL Server.
2. No **SQL Server Management Studio (SSMS)**, clique em "Conectar o Pesquisador de Objetos".
3. Copie o **Nome do Servidor** exibido na tela de conexão.
4. Certifique-se de que a autenticação está configurada como **"Autenticação do Windows"**.

### 2. Configurando a Conexão no Projeto

1. No projeto, localize o arquivo `appsettings.json`.
2. Substitua o valor de `"server=*INSIRA AQUI*"` no campo `"DefaultConnection"` pelo nome do seu servidor copiado anteriormente. Exemplo:
   
   ```json
   "DefaultConnection": "server=NOME_DO_SEU_SERVIDOR;Database=API_PontosTuristicos;Trusted_Connection=True;trustservercertificate=true"

## 🛠️ Criando e Configurando o Banco de Dados

### 1. Instrução para utilização da ferramenta.

Instale a ferramenta global do EF Core

```bash
dotnet tool install --global dotnet-ef
```

Ou, se já tiver instalado e precisar atualizar:

```Bash
dotnet tool update --global dotnet-ef
```

Em seguida, executar o comando:

```bash
dotnet ef database update
```

### 2. Executando a criação do Banco de Dados.

***Como executar No Visual Studio:***

- Abrir o Console do Gerenciador de Pacotes NuGet;
- Ir em Ferramentas → Gerenciador de Pacotes NuGet → Console do Gerenciador de Pacotes;
- Digitar e executar update-database;

***No Visual Studio Code:***

- Abrir o Terminal no VS Code (Ctrl + ` ou Exibir → Terminal).
- Certificar-se de estar na pasta raiz do projeto.
- Executar:

    ```bash
    dotnet ef database update
    ```

Execute o comando abaixo para executar as migrações ao banco de dados:


```update-database```

### 2. Verificando o Banco de Dados

1. No **SQL Server Management Studio**, verifique se o banco de dados foi criado com sucesso.
2. Confira se todas as tabelas e estruturas estão corretamente configuradas.

***API_PontosTuristicos:***

**Tabelas**
- Locais
- Cidades
- Estados

---

## 🚀 Executando a Aplicação

1. No **Visual Studio**, compile a solução.
2. Execute o projeto utilizando o comando `F5` ou clicando em **Iniciar**.
3. A API estará disponível no endereço padrão (geralmente `https://localhost:5019` ou `http://localhost:5018`).

1. No **Visual Studio Code**
2. Abra o terminal (Ctrl + ` ou Exibir → Terminal).
3. Certifique-se de estar na pasta do projeto.
4. Execute o seguinte comando para rodar a aplicação:

```
dotnet run
```

## 💻 URL - Caminho para testes:

   http://localhost:5018/swagger

---

---

---

# React WebLocalize

Este projeto utiliza a API "Services/api" para fornecer funcionalidades de localização. Este guia irá ajudá-lo a instalar e utilizar a API no seu projeto.

## Instalação

1. Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/seu-usuario/react-WebLocalize.git
    cd react-WebLocalize
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Em caso de incompatibilidade com o arquivo `package-lock.json`, faça a exlusão do arquivo e o instale novamente, com o comando: 

```bash
npm install
```

## Utilização

### Configuração da API

A API já se encontra no projeto, dentro da pasta **Back-end**. Para configurar o endereço da API no Front-end, edite o arquivo `Services/api.jsx`:

1. Arquivo de configuração para a API. Aqui o usuario irá configurar a URL da rota da API, caso sua porta for diferente do padrão estabelecido. `Services/api.jsx`:
    ```javascript
    import Api from 'services/api';

    const api = new Api({
        baseURL: 'http://localhost:5018/api/',
    });

    export default api;
    ```

### Utilizando a API no Projeto

2. Execute o projeto:
    ```bash
    npm run dev
    ```

Agora você deve ver os dados sendo carregados da API e exibidos no seu aplicativo React.

## Contribuição

Se você quiser contribuir com este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.

## 📝 Considerações Finais

Este projeto foi desenvolvido com atenção aos detalhes, seguindo boas práticas de desenvolvimento e configuração. Estou extremamente motivado para contribuir com a equipe e agregar valor à empresa. Caso haja alguma dúvida ou feedback, estou à disposição para discutir e aprimorar ainda mais este trabalho.

Agradeço pela oportunidade e espero fazer parte do time!

---

## Autor

Autor: [Marcos Felipe Gava da Cruz]

Contato: [marcosfelipegava@gmail.com]

LinkedIn: [(https://www.linkedin.com/in/marcos-felipe-gava-093910263/)]