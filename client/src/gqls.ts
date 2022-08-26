import { gql } from "@apollo/client";

export const GET_GROCERIES = gql`
  query groceries {
    items {
      id
      quantity
      pickedUp
    }
  }
`

export const ADD_GROCERY = gql`
  mutation add($id: ID!, $quantity: Int!) {
    add(id: $id, quantity: $quantity) {
      items {
        id
        quantity
      }
      message
      success
    }
  }
`

