import { gql } from "@apollo/client";

export const GET_GROCERIES = gql`
  query groceries {
    items {
      name
      quantity
      pickedUp
    }
  }
`

export const ADD_GROCERY = gql`
  mutation add($name: ID!, $quantity: Int!) {
    add(name: $name, quantity: $quantity) {
      message
      success
    }
  }
`

