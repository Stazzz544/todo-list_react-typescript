import { TodoAction, TodoActionTypes, TodoState } from "../../types/todoTypes"

const inicialState: TodoState = {
	todos:[],
	error: null,
	inputValue: '',
}

export const todoReducer = (state = inicialState, action: TodoAction): TodoState => {
	switch(action.type){
		case TodoActionTypes.ADD_TODO:
			return {error: null, inputValue: '', todos: [...state.todos, action.payload], }
		case TodoActionTypes.CHECK_TODO:
			return {error: null, inputValue: state.inputValue, todos: [...state.todos.map(todo => {
				if (todo.id === action.payload) {
					todo.checked = true
					return todo
				}
				return todo
			})]}
		case TodoActionTypes.UNCHECK_TODO:
			return {error: null, inputValue: state.inputValue, todos: [...state.todos.map(todo => {
				if (todo.id === action.payload) {
				todo.checked = false
				return todo 
				} 
				return todo
			})]}
		case TodoActionTypes.REMOVE_TODO:
			return {error: null, inputValue: state.inputValue, todos: [...state.todos.filter(todo => {  // ИСПАВИТЬ !!!
				if (todo.id !== action.payload) {
					return todo
				}})]}
		case TodoActionTypes.CHANGE_INPUT_VALUE_TODO:
			return {error: null, inputValue: action.payload, todos: [...state.todos]}
		case TodoActionTypes.ERROR_TODO:
			return {error: action.payload, inputValue: state.inputValue, todos: [...state.todos]}
		
		default:
			return state
	}
}