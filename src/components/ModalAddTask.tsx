import React, { useState } from 'react'
import { TaskModel } from '../utils/types'

type Props = {
  setModalIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  tasks: TaskModel[]
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}

const ModalAddTask = ({ setModalIsActive, tasks, setTasks }: Props) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const closeModalHandler = () => {
    setModalIsActive(false);
  }

  const addTaskHandler = () => {

    const task: TaskModel = {
      id: tasks.length,
      title,
      description,
      done: false
    }

    if (title.trim() && description.trim()) {
      setTasks((prev) => [
        ...prev,
        task
      ])
      setTitle("")
      setDescription("")
      closeModalHandler()
    } else {
      alert("Nenhum campo pode estar vazio!")
    }
  }
  return (
    <div>
      <h3>Add a new task</h3>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button onClick={addTaskHandler}>Add Task</button>
      <button onClick={closeModalHandler}>X</button>
    </div>
  )
}

export default ModalAddTask