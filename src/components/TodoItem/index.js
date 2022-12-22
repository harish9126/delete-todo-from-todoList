import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p className="title">{title}</p>
      <button type="button" onClick={onDeleteTodo} className="delete-button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
