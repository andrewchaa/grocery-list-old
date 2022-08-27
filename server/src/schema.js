const {gql} = require('apollo-server');

const typeDefs = gql`
type Item {
  name: ID!
  quantity: Int!
  pickedUp: Boolean!
}

type Query {
  items: [Item]!
  item(name: ID!): Item
}

type Mutation {
  add(name: ID!, quantity: Int!): ItemsUpdateResponse!
  update(name: ID!, quantity: Int!, pickedUp: Boolean!): ItemsUpdateResponse!
  remove(name: ID!): ItemsUpdateResponse
}

type ItemsUpdateResponse {
  success: Boolean!
  message: String
}`

module.exports = typeDefs;
