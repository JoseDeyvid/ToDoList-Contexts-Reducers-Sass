import { useEffect, useState } from 'react'
import styles from './App.module.scss'

// Components
import Filter from './components/Filter'
import Header from './components/Header'
import List from './components/List'
import { TaskModel } from './utils/types'
import ModalAddTask from './components/ModalAddTask'

function App() {

  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [filter, setFilter] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>(tasks);
  const [modalIsActive, setModalIsActive] = useState(false);

  useEffect(() => {
    switch (filter) {

      case "done":
        setFilteredTasks(tasks.filter((task) => task.done))
        break
      case "todo":
        setFilteredTasks(tasks.filter((task) => !task.done))
        break

      default:
        setFilteredTasks(tasks.filter((task) => task))
    }
  }, [filter, tasks])
  return (
    <div className={styles.app}>
      <Header setModalIsActive={setModalIsActive} />
      <main>
        <Filter filter={filter} setFilter={setFilter} />
        <List tasks={filteredTasks} setTasks={setTasks} />
        {modalIsActive && <ModalAddTask setModalIsActive={setModalIsActive} tasks={tasks} setTasks={setTasks} />}
      </main>
    </div>
  )
}

export default App
