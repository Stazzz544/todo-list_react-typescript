import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import './Todo.css'
import { 
	addTodo, 
	changeInputValueTodo, 
	removeTodo, 
	todoChecked, 
	todoUnChecked } from "./TodoActionCreators"

const Todo: React.FC = () => {

	const dispatch = useDispatch()
	const { error, todos, inputValue } = useTypedSelector(state => state.todoReducer)
	let check: boolean = false
	

	return (
		<div className="todos_wrapper">
			<div className="todos_input-wrapper">
				<input onInput={(event) => changeInputValueTodo(event, dispatch)}
					className="todos_input"
					value={inputValue}
					type="text" />
				<button className="todos_addBtn" onClick={() => addTodo(inputValue, dispatch)}>add todo</button>
			</div>
			{error ? <div className="todo-error">{error}</div> : <></>}
			{
				todos.length < 1 ?
					<div className='todo-no-todo'>no todos...</div>
					:
					<div>
						<div>
							{todos.map(todo => {
								if (!todo.checked) {
									return (
										<div key={todo.id} className="todo-wrapper">
											<input onChange={() => { todoChecked(todo.id, dispatch) }} className="todo-input" id={todo.id.toString()} type="checkbox" />
											<label className="todo-label" htmlFor={todo.id.toString()}></label>
											<div className="todo-text" key={todo.id}>{todo.text}</div>
											<button className="todo-delBtn" onClick={() => { removeTodo(todo.id, todo.checked, dispatch) }}>del</button>
										</div>)
								} else { return <></> }
							}
							)}
						</div>
						<div className="todo-wrapper-done">
							{
								todos.forEach(todo => { 
									todo.checked ? check = true : check = false
								})
							}
							{check ? <div>Завершенные задачи:</div> : <></>}
							
							{todos.map(todo => {
								if (todo.checked) {
									return (
										<div key={todo.id} className="todo-wrapper">
											<input checked onChange={() => { todoUnChecked(todo.id, dispatch) }} className="todo-input" id={todo.id.toString()} type="checkbox" />
											<label className="todo-label" htmlFor={todo.id.toString()}></label>
											<div className="todo-text todo-text-checked" key={todo.id}>{todo.text}</div>
											<button className="todo-delBtn" onClick={() => { removeTodo(todo.id, todo.checked, dispatch) }}>del</button>
										</div>)
								} else { return <></> }
							}
							)}
						</div>
					</div>
			}

		</div>
	)
}

export default Todo