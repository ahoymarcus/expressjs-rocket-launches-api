# Express-JS Rocket-X Launches API


<br />

O app consome dados da API **SpaceX REST API** para criar um pequeno serviço de dados, na forma de uma API que que disponibilizar rotas para os seguintes dados:

- Próximo lançamento;
- Último lançamento;
- Próximos lançamentos;
- Lançamentos passados;

<br />

Esse projeto começa, então, usando do módulo **Request** para realizar uma chamada GET com o Express-JS na API Rest de origem dos dados e pegar todos os lançamentos realizados. 

<br />

Em seguida, os controles para as 04 rotas foram criados com o auxilio de um arquivo de serviço que faz a chamada à API externa usando do modulo Request. Ademais, os controles também usam de um middleware para padronizar o tratamento de erros em todos os controles.

<br />

As rotas foram construídas encima das seguintes URLs:

1. Próximo lançamento
```
/api/v1/spaceXApi/next
```

<br />

2. Próximos lançamentos
```
/api/v1/spaceXApi/next-list
```

<br />

3. Último lançamento
```
/api/v1/spaceXApi/last
```

<br />

4. Lançamentos passados
```
/api/v1/spaceXApi/past
```

<br />


[]()

<br />


### Imagem da resposta para a rota /api/v1/spaceXApi/next:  

![Imagem da resposta de uma rota da api](/public/images/rocket-x-launches-api.png)



<br />
<br />


