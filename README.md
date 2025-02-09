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

3. Instale a API "Services/api":
    ```bash
    npm install services/api
    ```

## Utilização

### Configuração da API

Esta API deve ser do arquivo [API_WebLocalize](https://github.com/FelpaGava/API_WebLocalize), o qual se encontra em meu perfil.

1. Crie um arquivo de configuração para a API, por exemplo, `apiConfig.js`:
    ```javascript
    import Api from 'services/api';

    const api = new Api({
        baseURL: 'https://sua-api-url.com',
    });

    export default api;
    ```

### Utilizando a API no Projeto

2. Execute o projeto:
    ```bash
    npm start
    ```

Agora você deve ver os dados sendo carregados da API e exibidos no seu aplicativo React.

## Contribuição

Se você quiser contribuir com este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.

## Autor

Autor: [Marcos Felipe Gava da Cruz]

Contato: [marcosfelipegava@gmail.com]

LinkedIn: [(https://www.linkedin.com/in/marcos-felipe-gava-093910263/)]