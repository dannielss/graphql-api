<h3 align="center"><img src="https://user-images.githubusercontent.com/58083563/83713394-597f1b80-a5fe-11ea-8e6f-e5bca3ade2c3.png" alt="Graphql" width="200" />
</h3>

<h3 align="center">Api feita com GraphQL</h3>

## :computer: Como Rodar
- cd graphql-api
- npm install
- crie seu arquivo .env
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

Query 'products':

```graphql
  products {
    id name quantity price
  }
```

Response:

```javascript
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
<hr>
Query 'product(id: Int)':

```graphql
  product(id: 1) {
    id name quantity price
  }
```
Response:

```javascript
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

Mutation 'newProduct(data: ProductInput)':

```graphql
  newProduct(data: ProductInput) {
      id name quantity price
  }
```

Response:

```javascript
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
<hr>
Mutation 'updateProduct(id: Int, data: ProductInput)':

```graphql
  updateProduct(id: Int, data: ProductInput) {
      id name quantity price
  }
```

Response:

```javascript
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
<hr>
Mutation 'deleteProduct(id: Int)':

```graphql
  deleteProduct(id: Int) {
      id name quantity price
   }
```

Response:

```javascript
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
