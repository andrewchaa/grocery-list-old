const {gql} = require('apollo-server');

const typeDefs = gql`
type Item {
  id: ID!
  quantity: Int!
  pickedUp: Boolean!
}

type Query {
  items: [Item]!
  item(id: ID!): Item
}

type Mutation {
  add(
    id: ID!
    quantity: Int!
    pickedUp: Boolean!
    ): ItemsUpdateResponse!
  pickUp(id: ID!): ItemsUpdateResponse!
  remove(id: ID!): ItemsUpdateResponse
}

type ItemsUpdateResponse {
  success: Boolean!
  message: String
  items: [Item]
}`;

module.exports = typeDefs;
