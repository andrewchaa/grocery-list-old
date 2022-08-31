require('dotenv').config();
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ItemAPI = require('./datasources/ItemApi');

const server = new ApolloServer({
  context: async () => {},
  typeDefs,
  resolvers,
  dataSources: () => ({
    itemAPI: new ItemAPI()
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    `);
});
