import React from 'react'
import Add from "./Add";
import List from "./List";

export default function Home() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Grocery List</h1>
        </div>
        <List />
        <Add />
      </div>
    </div>)
}
