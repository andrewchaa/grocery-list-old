import React from 'react'

export default function Name({name, setName}
  : {name: string, setName: (name: string) => void})
  : JSX.Element {
  return (
    <input type="text" className="basis-4/5 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Grocery"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  )
}
