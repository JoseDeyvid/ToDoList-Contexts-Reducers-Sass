import { useState } from 'react'
import styles from './App.module.scss'

// Components
import Filter from './components/Filter'
import Header from './components/Header'
import List from './components/List'
import { TaskModel } from './utils/types'
import ModalAddTask from './components/ModalAddTask'

function App() {

  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [modalIsActive, setModalIsActive] = useState(false);
  return (
    <div className={styles.app}>
      <Header setModalIsActive={setModalIsActive} />
      <main>
        <Filter />
        <List tasks={tasks} setTasks={setTasks} />
        {modalIsActive && <ModalAddTask setModalIsActive={setModalIsActive} tasks={tasks} setTasks={setTasks} />}
      </main>
    </div>
  )
}

export default App
