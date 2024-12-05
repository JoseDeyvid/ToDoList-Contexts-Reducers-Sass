import styles from "./ModalAddTask.module.scss"
import React, { useState } from 'react'
import { TaskModel } from '../utils/types'
import { v4 as uuid } from 'uuid'

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
      id: uuid(),
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
    <div className={styles.bgModal}>
      <div className={styles.container}>
        <h3>Add a new task</h3>
        <div className={styles.formControl}>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.formControl}>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button onClick={addTaskHandler} className={styles.btnAddTask}>Add Task</button>
        <button className={styles.btnClose} onClick={closeModalHandler}>x</button>
      </div>
    </div>
  )
}

export default ModalAddTask