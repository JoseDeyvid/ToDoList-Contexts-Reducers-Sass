import styles from "./Filter.module.scss"

type Props = {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>,
}

const Filter = ({ filter, setFilter }: Props) => {

  const changeFilterHandler = (newFilter: string) => {

    setFilter(newFilter);
  }

  return (
    <div className={styles.filterContainer}>
      <h5 className={styles.title}>Filter by state</h5>
      <div className={styles.actions}>
        <button className={`${filter === "todo" ? styles.isActive : ""}`} onClick={() => changeFilterHandler("todo")}>To-Do</button>
        <button className={`${filter === "done" ? styles.isActive : ""}`} onClick={() => changeFilterHandler("done")}>Done</button>
        {(filter === "done" || filter === "todo") && <button className={styles.removeBtn} onClick={() => changeFilterHandler("all")}>Clear</button>}
      </div>
    </div>
  )
}

export default Filter