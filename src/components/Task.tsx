import React from 'react'
import { TaskModel } from '../utils/types'

type Props = {
  task: TaskModel,
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}

const Task = ({ task, setTasks }: Props) => {

  const toggleTaskHandler = (id: number) => {
    setTasks((prev) => prev.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task
    }))


  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <div onClick={() => toggleTaskHandler(task.id)}>
        <input type="radio" checked={task.done} readOnly />
        <label>{task.done ? "Done" : "To-Do"}</label>
      </div>
    </div>
  )
}

export default Task