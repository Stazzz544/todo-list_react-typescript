import { Dispatch } from "react"
import { newTodoType, TodoAction, TodoActionTypes } from "../types/todoTypes"


export const addTodo = (inputValue:string, dispatch:Dispatch<TodoAction>): void | boolean => {
	if (!inputValue) {
		dispatch({ type: TodoActionTypes.ERROR_TODO, payload: 'Вы ничего не ввели' })
		return false
	}
	const newTodo: newTodoType = {
		checked: false,
		id: Date.now(),
		text: inputValue,
	}
	dispatch({ type: TodoActionTypes.ADD_TODO, payload: newTodo })
}

export const changeInputValueTodo = (event: React.FormEvent<HTMLInputElement>,  dispatch:Dispatch<TodoAction>): void => {
	dispatch({ type: TodoActionTypes.CHANGE_INPUT_VALUE_TODO, payload: event.currentTarget.value })
}

export const removeTodo = (id: number, checked: boolean,  dispatch:Dispatch<TodoAction>): void => {
	checked ?
		dispatch({ type: TodoActionTypes.REMOVE_TODO, payload: id })
		:
		dispatch({ type: TodoActionTypes.ERROR_TODO, payload: 'Задача не отмечена как выполненая. Поставьте галочку' })
}

export const todoChecked = (id: number,  dispatch:Dispatch<TodoAction>): void => {
	dispatch({ type: TodoActionTypes.CHECK_TODO, payload: id })
}
export const todoUnChecked = (id: number,  dispatch:Dispatch<TodoAction>): void => {
	dispatch({ type: TodoActionTypes.UNCHECK_TODO, payload: id })
}