import styles from "./List.module.scss"
import { TaskModel } from '../utils/types'
import Task from './Task'

type Props = {
    tasks: TaskModel[],
    setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}

const List = ({ tasks, setTasks }: Props) => {

    return (
        <div className={styles.container}>
            {tasks.length === 0 ? <p>Não há tarefas por aqui...</p> : (
                tasks.map((task) => (
                    <Task key={task.id} task={task} setTasks={setTasks} />
                ))
            )}

        </div>
    )
}

export default List