import React, { useEffect, useState } from 'react'
import { TaskModel } from '../utils/types'

type Props = {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>,
}

const Filter = ({ filter, setFilter }: Props) => {

  const changeFilterHandler = (newFilter: string) => {

    setFilter(newFilter);
  }

  return (
    <div>
      <h5>Filter by state</h5>
      <div>
        <button onClick={() => changeFilterHandler("todo")}>To-Do</button>
        <button onClick={() => changeFilterHandler("done")}>Done</button>
        {(filter === "done" || filter === "todo") && <button onClick={() => changeFilterHandler("all")}>Remove filters</button>}
      </div>
    </div>
  )
}

export default Filter