# Express-JS Rocket-X Launches API


<br />

A API consome dados de uma API externa, a API da **SpaceX REST API** para criar um pequeno serviço de dados, na forma de uma API REST que disponibiliza rotas para os seguintes dados da API externa:[^1]

- Próximo lançamento;
- Último lançamento;
- Próximos lançamentos;
- Lançamentos passados;

<br />

[SpaceX REST API - Github](https://github.com/r-spacex/SpaceX-API)

<br />

Ademais, existe um sistema mocado de autenticação para o uso das rotas que simula uma requisição de Login para poder utilizar as rotas de dados.

<br />

Desse modo, o usuário deve primeiramente realizar uma requizição POST para a URL:

<br />

```
/api/v1/login
```

<br  />

Passando no corpo da requisição um JSON com as propriedades **username** e **password**, para receber na resposta um token JWT (JSON Web Token):


```
{
    "username": "john",
    "password": "secret"
}
```

<br />

O token recebido na resposta da requisição POST é usado para se poder acessar os dados desta API.
Caso seja usado alguma ferramenta de teste de requisições como Postman, o token deve ser copiado e colocado no cabeçalho das requisições GET para acessar as 04 rotas de dados:

<br />

```
headers.authorization = 'Bearer <valor do token>';
```

<br />

### Abaixo, temos um exemplo de requisição feita com o framework Postman:

![Imagem da resposta de uma rota da api](/public/images/req-get-with-jwt-authentication.png)


<br />

O processo de requisição dos dados neste projeto começa, então, usando do módulo **Request** para realizar uma chamada GET com o Express-JS na API Rest de origem dos dados e pegar todos os lançamentos realizados. 

<br />

Em seguida, os controles para as 04 rotas foram criados com o auxilio de um arquivo de serviço que faz a chamada à API externa usando do modulo Request. Ademais, os controles também usam de um middleware para padronizar o tratamento de erros em todos os controles.

<br />

As rotas foram construídas encima das seguintes URLs:

1. Próximo lançamento
```
/api/v1/launches/next
```

<br />

2. Próximos lançamentos
```
/api/v1/launches/next-list
```

<br />

3. Último lançamento
```
/api/v1/launches/last
```

<br />

4. Lançamentos passados
```
/api/v1/launches/past
```

<br />

Também foi utilizado a dependência Cors para Node-JS, para permitir testar a requisição no ambiente local!

<br />

[SpaceX](https://www.spacex.com/)

<br />


### Imagem da resposta para a rota /api/v1/launches/next:  

![Imagem da resposta de uma rota da api](/public/images/rocket-x-launches-api.png)


<br />


### Imagem de uma requisição feita para a rota GET /api/v1/launches/next com a passagem do token no cabeçalho e o retorno dos dados da API:  

![Imagem de uma requisição feita para a rota GET](/public/images/rocket-x-launches-api-02.png)



<br />

<br />
<br />

[^1]:SpaceX REST API - Github 
