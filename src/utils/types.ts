import { ReactNode } from "react"

export type TaskModel = {
    id: string
    title: string,
    description: string,
    done: boolean

}

export type ContextProps = {
    children: ReactNode
}