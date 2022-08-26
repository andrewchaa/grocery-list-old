import React, { useState } from 'react'
import {gql, useMutation} from '@apollo/client'
import { ADD_GROCERY, GET_GROCERIES } from '../gqls'

export default function Add() {
  const [id, setId] = useState('')
  const [addGrocery] = useMutation(ADD_GROCERY, {
    refetchQueries: [
      {query: GET_GROCERIES}
    ]
  })

  return (
    <div>
      <div className="flex mt-4">
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"
          value={id}
          onChange={e => setId(e.target.value)}
         />
        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={e => {
            e.preventDefault()
            addGrocery({variables: {id: id, quantity: 1}})
          }}>
          Add
        </button>
      </div>
    </div>
  )
}
