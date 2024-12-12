import styles from "./Task.module.scss";
import { TaskModel } from "../utils/types";
import { FaTrash } from "react-icons/fa";
import { useTodos } from "../contexts/TodosContext";

type Props = {
  task: TaskModel;
};

const Task = ({ task }: Props) => {
  const { dispatch } = useTodos();

  const toggleTaskHandler = (id: string) => {
    dispatch({ type: "toggle", payload: task.id });
    // setTasks((prev) =>
    //   prev.map((task) => {
    //     if (task.id === id) {
    //       task.done = !task.done;
    //     }
    //     return task;
    //   })
    // );
  };

  const removeTaskHandler = () => {
    dispatch({ type: "delete", payload: task.id });
    // setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className={`${task.done ? styles.done : ""}`}>{task.title}</h2>
      <p className={`${task.done ? styles.done : ""}`}>{task.description}</p>
      <div
        className={styles.toogleBtn}
        onClick={() => toggleTaskHandler(task.id)}
      >
        <input type="radio" checked={task.done} readOnly />
        <label>{task.done ? "Done" : "To-Do"}</label>
      </div>
      <button className={styles.removeBtn} onClick={removeTaskHandler}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Task;
