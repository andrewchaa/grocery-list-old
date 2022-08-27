import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_GROCERIES } from '../../gqls'
import GroceryItem from './GroceryItem'

export default function List() {
  const { loading, error, data } = useQuery(GET_GROCERIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  if (!data) return <p>No data</p>

  return (
    <div>
      {data.items.map(item => (
        <div className="relative flex items-start mt-2">
          <div className="w-full">
            <GroceryItem item={item} />
          </div>
          <div className="justify-items-end text-gray-500 pl-5">
            <div className="items-end ml-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}