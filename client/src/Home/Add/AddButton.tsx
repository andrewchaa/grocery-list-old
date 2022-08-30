import React from 'react'

export default function AddButton({name, quantity, addGrocery}: {
      name: string,
      quantity: number,
      addGrocery: any
    })
  : JSX.Element {
  return (
    <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      onClick={e => {
        e.preventDefault()
        addGrocery({ variables: { name, quantity } })
      }}>
      Add
    </button>
  )
}
