
export interface TodoState {
	todos: Array<{text: string, checked: boolean, id: number}>,
	error: null | string,
	inputValue: string,
}

export enum TodoActionTypes {
	ADD_TODO = 'ADD_TODO',
	REMOVE_TODO = 'REMOVE_TODO',
	CHECK_TODO = 'CHECK_TODO',
	UNCHECK_TODO = 'UNCHECK_TODO',
	ERROR_TODO = 'ERROR_TODO',
	CHANGE_INPUT_VALUE_TODO = 'CHANGE_INPUT_VALUE_TODO',
}

export interface newTodoType{
	text: string,
	checked: boolean,
	id: number
}

interface ActionAddTodo {
	type: TodoActionTypes.ADD_TODO,
	payload: {text: string, checked: boolean, id: number},
}

interface ActionRemoveTodo {
	type: TodoActionTypes.REMOVE_TODO,
	payload: number,
}

interface ActionCheckTodo {
	type: TodoActionTypes.CHECK_TODO,
	payload: number,
}

interface ActionUnCheckTodo {
	type: TodoActionTypes.UNCHECK_TODO,
	payload: number,
}

interface ActionErrorTodo {
	type: TodoActionTypes.ERROR_TODO
	payload: string
}

interface ActionChangeInputValueTodo {
	type: TodoActionTypes.CHANGE_INPUT_VALUE_TODO
	payload: string
}

export type TodoAction = ActionAddTodo | ActionRemoveTodo | ActionCheckTodo | ActionErrorTodo | ActionUnCheckTodo | ActionChangeInputValueTodo