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

export const UPDATE_GROCERY = gql`
  mutation update($name: ID!, $quantity: Int! $pickedUp: Boolean!) {
    update(name: $name, quantity: $quantity, pickedUp: $pickedUp) {
      message
      success
  }
}
`
