// Write your code here
import './index.css'

function TodoItem(props) {
  const {title, deleteTitle} = props
  const deleteItem = () => {
    deleteTitle(title)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
