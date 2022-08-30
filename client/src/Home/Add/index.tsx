import React, { useState } from 'react'
import {useMutation} from '@apollo/client'
import { ADD_GROCERY, GET_GROCERIES } from '../../gqls'
import Name from './Name'
import Quantity from './Quantity'
import AddButton from './AddButton'

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
        <Name name={name} setName={setName} />
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <AddButton name={name} quantity={quantity} addGrocery={addGrocery} />
      </div>
    </div>
  )
}
