import React, { useState } from 'react'
import { TaskModel } from '../utils/types'
import Task from './Task'

type Props = {
    tasks: TaskModel[],
    setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}

const List = ({ tasks, setTasks }: Props) => {

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} setTasks={setTasks} />
            ))}
        </div>
    )
}

export default List