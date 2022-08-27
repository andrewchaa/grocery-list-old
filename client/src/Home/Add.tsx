import React, { useState } from 'react'
import {useMutation} from '@apollo/client'
import { ADD_GROCERY, GET_GROCERIES } from '../gqls'

export default function Add() {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [addGrocery] = useMutation(ADD_GROCERY, {
    refetchQueries: [
      {query: GET_GROCERIES}
    ]
  })

  return (
    <div>
      <div className="flex mt-4">
        <input type="text" className="basis-4/5 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Grocery"
          value={name}
          onChange={e => setName(e.target.value)}
         />
        <input type="number" className="basis-1/5 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
         />
        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={e => {
            e.preventDefault()
            addGrocery({variables: {name, quantity}})
          }}>
          Add
        </button>
      </div>
    </div>
  )
}
