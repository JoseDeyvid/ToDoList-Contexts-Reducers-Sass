import { useTodos } from "../contexts/TodosContext";
import styles from "./Header.module.scss";

const Header = () => {
  const { setModalIsActive } = useTodos();
  const showModalHandler = () => {
    setModalIsActive(true);
  };
  return (
    <header className={styles.headerContainer}>
      <h1>To-Do List With React</h1>
      <button onClick={showModalHandler}>+ Add Task</button>
    </header>
  );
};

export default Header;
