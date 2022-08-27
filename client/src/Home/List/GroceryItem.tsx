import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_GROCERIES, UPDATE_GROCERY } from '../../gqls'

export default function GroceryItem({item}) {
  const [pickedUp, setPickedUp] = useState(false)
  const [updateGrocery] = useMutation(UPDATE_GROCERY, {
    refetchQueries: [
      {query: GET_GROCERIES}
    ]
  })

  const handleLienThrough = value =>
    pickedUp
      ? <p className="line-through">{value}</p>
      : <p>{value}</p>


  return (
    <div className="flex items-center h-5">
      <input
        onClick={e => {
          setPickedUp(!pickedUp)
          updateGrocery({variables: {name: item.name, quantity: item.quantity, pickedUp: !pickedUp}})
        }}
        checked={pickedUp}
        aria-describedby={item.name}
        name="grocery"
        type="checkbox"
        className="justify-items-start focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
      <label htmlFor="grocery"
        className="justify-items-center w-full pl-2 font-medium text-gray-700">
          {handleLienThrough(item.name)}
      </label>
      <div className="justify-items-end">{handleLienThrough(item.quantity)}</div>
    </div>

  )
}
