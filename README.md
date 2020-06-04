<h1 align="center"><img src="https://user-images.githubusercontent.com/58083563/83713394-597f1b80-a5fe-11ea-8e6f-e5bca3ade2c3.png" alt="Graphql" width="200" />
</h1>

<h3 align="center">Api feita com GraphQL</h3>

## :computer: Como Rodar
- cd graphql-api
- npm install
- create database products-graphql
- npx knex migrate:latest
- npm start

## :hammer: Tecnologias
- Apollo-server
- Node
- Nodemon
- Knex
- Mysql

## :book: Queries

```graphql
  products {
    id name quantity price
  }
  
  product(id: 1) {
    id name quantity price
  }
```

## :notebook: Mutations

```graphql
  newProduct(data: ProductInput) {
      id name quantity price
  }
  
  updateProduct(id: Int, data: ProductInput) {
      id name quantity price
  }
  
  deleteProduct(id: Int) {
      id name quantity price
   }
```

> Que a força esteja com você :muscle:
