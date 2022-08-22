import React from 'react'

export default function Add() {

  const add = () => {
    console.log('add')
  }

  return (
    <div>
      <div className="flex mt-4">
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={add}>
          Add
        </button>
      </div>
    </div>
  )
}
