import { useEffect, useState } from "react";
import styles from "./App.module.scss";

// Components
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import { TaskModel } from "./utils/types";
import ModalAddTask from "./components/ModalAddTask";
import { useTodos } from "./contexts/TodosContext";

function App() {
  const { todos, modalIsActive } = useTodos();
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>(todos.tasks);

  useEffect(() => {
    switch (filter) {
      case "done":
        setFilteredTasks(todos.tasks.filter((task) => task.done));
        break;
      case "todo":
        setFilteredTasks(todos.tasks.filter((task) => !task.done));
        break;
      default:
        setFilteredTasks(todos.tasks.filter((task) => task));
    }
  }, [filter, todos]);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Filter filter={filter} setFilter={setFilter} />
        <List tasks={filteredTasks} />
        {modalIsActive && <ModalAddTask />}
      </main>
    </div>
  );
}

export default App;
