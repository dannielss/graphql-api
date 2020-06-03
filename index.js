const { ApolloServer, gql } = require('apollo-server');
const db = require('./config/db.js');

const typeDefs = gql`
  type Product {
    id: Int
    name: String
    quantity: Int
    price: Float
  }

  input ProductInput {
    name: String
    quantity: Int
    price: Float
  }

  type Query {
    products: [Product]
    product(id: Int): Product
  }

  type Mutation {
    newProduct(data: ProductInput): Product!
    deleteProduct(id: Int): Product
    updateProduct(id: Int, data: ProductInput): Product!
  }
`;

const resolvers = {
  Query: {
    products() {
      return db('products');
    },

    product(_, args) {
      const { id } = args
      return db('products').where({ id }).first()
    }
  },

  Mutation: {
    async newProduct(_, { data }) {
      const [ id ] = await db('products').insert({...data})
      return db('products').where({ id }).first()
    },

    async deleteProduct(_, args) {
      const { id } = args;
      const product = await db('products').where({ id }).first()
      if(product) {
        await db('products').where({ id }).delete()
      }
      return product
    },

    async updateProduct(_, { id, data }) {
      const product = await db('products').where({ id })
      if(product) {
        await db('products').where({ id }).update(data)
      }
      return await db('products').where({ id }).first()
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server rodando em ${url}`);
})