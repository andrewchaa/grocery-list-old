import React from 'react'

export default function Quantity({quantity, setQuantity}
  : {quantity: number, setQuantity: (quantity: number) => void})
  : JSX.Element {
  return (
    <input type="number" className="basis-1/5 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
      value={quantity}
      onChange={e => setQuantity(Number(e.target.value))}
    />
  )
}
