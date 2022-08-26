import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_GROCERIES } from '../gqls'

export default function List() {
  const { loading, error, data } = useQuery(GET_GROCERIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  if (!data) return <p>No data</p>

  return (
    <div>
      {data.items.map(item => (
        <div key={item.id} className="flex mb-4 items-center">
          <p className="w-full text-grey-darkest">
          {item.id} {item.quantity} {item.pickedUp ? 'picked up' : 'left'}
          </p>
          <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
          <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
        </div>
      ))}
    </div>
  )
}
