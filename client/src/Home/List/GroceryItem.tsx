import React from 'react'

export default function GroceryItem({item}) {
  return (
    <div className="flex items-center h-5">
      <input
        id={item.name}
        aria-describedby={item.name}
        name="grocery"
        type="checkbox"
        className="justify-items-start focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
      <label htmlFor="grocery"
        className="justify-items-center w-full pl-2 font-medium text-gray-700">
        {item.name}
      </label>
      <div className="justify-items-end">{item.quantity}</div>
    </div>

  )
}
