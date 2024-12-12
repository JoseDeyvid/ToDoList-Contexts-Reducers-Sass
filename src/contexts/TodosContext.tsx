import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ContextProps, TaskModel } from "../utils/types";

type TodosValues = {
  todos: TodosState;
  dispatch: React.Dispatch<TodosAction>;
  modalIsActive: boolean;
  setModalIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TodosContext = createContext({} as TodosValues);

interface TodosState {
  tasks: TaskModel[];
}

type TodosAction =
  | { type: "add"; payload: TaskModel }
  | { type: "delete"; payload: string }
  | { type: "toggle"; payload: string };
const initialTodos: TodosState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const TodosProvider = ({ children }: ContextProps) => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [modalIsActive, setModalIsActive] = useState(false);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos.tasks));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{ todos, dispatch, modalIsActive, setModalIsActive }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export function useTodos() {
  return useContext(TodosContext);
}

function todosReducer(state: TodosState, action: TodosAction): TodosState {
  switch (action.type) {
    case "add":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "delete":
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    case "toggle":
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.payload) {
              task.done = !task.done;
            }
            return task;
          }),
        ],
      };
    default:
      throw new Error("Unknown action");
  }
}

export default TodosProvider;
