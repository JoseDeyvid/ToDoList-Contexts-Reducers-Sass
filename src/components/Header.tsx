import styles from "./Header.module.scss"

type Props = {
  setModalIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ setModalIsActive }: Props) => {
  const showModalHandler = () => {
    setModalIsActive(true);
  }
  return (
    <header className={styles.headerContainer}>
      <h1>To-Do List With React</h1>
      <button onClick={showModalHandler}>+ Add Task</button>
    </header>
  )
}

export default Header