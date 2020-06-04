<h3 align="center"><img src="https://user-images.githubusercontent.com/58083563/83713394-597f1b80-a5fe-11ea-8e6f-e5bca3ade2c3.png" alt="Graphql" width="200" />
</h3>

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
- Graphql
- Dotenv

## :book: Queries

```graphql
  products {
    id name quantity price
  }
```
Response Query 'products'
```json
  {
    data: {
      products: [
        {
          id: 1,
          name: "Example",
          quantity: 1,
          price: 1
        }
      ]
    }
  }
```
```graphql
  product(id: 1) {
    id name quantity price
  }
```
Response Query 'product(id: Int)'
```json
  {
    data: {
      product: {
        id: 1,
        name: "Example",
        quantity: 1,
        price: 1
      }
    }
  }
```

## :notebook: Mutations

```graphql
  newProduct(data: ProductInput) {
      id name quantity price
  }
```

Response - Mutation 'newProduct(data: ProductInput)'
```json
  {
    data: {
      newProduct: {
        id: 1,
        name: "Example",
        quantity: 1,
        price: 1
      }
    }
  }
```

```graphql
  updateProduct(id: Int, data: ProductInput) {
      id name quantity price
  }
```

Response - Mutation 'updateProduct(id: Int, data: ProductInput)'

```json
  {
    data: {
      updateProduct: {
        id: 1,
        name: "New name",
        price: 1,
        quantity: 1
      }
    }
  }
```

```graphql
  deleteProduct(id: Int) {
      id name quantity price
   }
```

Response - Mutation 'deleteProduct(id: Int)'

```json
  {
    data: {
      deleteProduct: {
        id: 1,
        name: "Example",
        quantity: 1,
        price: 1
      }
    }
  }
```

> Que a força esteja com você :muscle:
