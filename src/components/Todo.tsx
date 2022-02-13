import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { newTodoType, TodoActionTypes } from "../types/todoTypes"
import './Todo.css'

const Todo: React.FC = () => {

	const dispatch = useDispatch()
	const {error, todos, inputValue} = useTypedSelector(state => state.todoReducer)
	
	const addTodo = (): void | boolean => {
		if(!inputValue) {
			dispatch({type: TodoActionTypes.ERROR_TODO, payload: 'Вы ничего не ввели'})
			return false
		}
		const newTodo: newTodoType = {
			checked: false,
			id: Date.now(),
			text: inputValue,
		}
		dispatch({type: TodoActionTypes.ADD_TODO, payload: newTodo})
	}

	const changeInputValueTodo = (event: React.FormEvent<HTMLInputElement>): void => {
		dispatch({type: TodoActionTypes.CHANGE_INPUT_VALUE_TODO, payload: event.currentTarget.value})
	}

	const removeTodo = (id: number): void => {
		dispatch({type: TodoActionTypes.REMOVE_TODO, payload: id})
	}

	


	return(
		<div className="todos_wrapper">
			<div className="todos_input-wrapper">
				<input onInput={changeInputValueTodo} 
						 className="todos_input" 
						 value={inputValue}
						 type="text" />
				<button className="todos_addBtn" onClick={addTodo}>add todo</button>
			</div>
			{
				error ? <div>{error}</div> : <></>
			}
			{
			todos.length < 1 ? 
				<div>no todos...</div>
			:
			todos.map(todo => 
				<div key={todo.id} className="todo-wrapper">
					<input className="todo-input" id={todo.id.toString()} type="checkbox" />
					<label className="todo-label" htmlFor={todo.id.toString()}></label>
					<div className="todo-text" key={todo.id}>{todo.text}</div>
					<button onClick={() => {removeTodo(todo.id)}}>del</button>
				</div>
			)
			}
		</div>
	)
}

export default Todo