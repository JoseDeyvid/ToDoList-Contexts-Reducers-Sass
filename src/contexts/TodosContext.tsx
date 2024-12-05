import { createContext, Reducer, useReducer } from "react";
import { ContextProps, TaskModel } from "../utils/types";

type TodosValues = {

}

export const TodosContext = createContext({} as TodosValues)


const TodosProvider = ({ children }: ContextProps) => {
    const initialTodos: TaskModel[] = []
    // Arrumar linha debaixo(ver documentação apresentada em uma aula mais a frente do curso que ele usar ts com context e redux)
    const [todos, dispatch] = useReducer<Reducer<any, TaskModel[]>>(todosReducer, initialTodos) 
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {children}
        </TodosContext.Provider>
    )
}

const todosReducer = (state: TaskModel[], action: any)  =>  {

    // switch (action.type) {
    //     case "add":

    // }
}

export default TodosProvider;