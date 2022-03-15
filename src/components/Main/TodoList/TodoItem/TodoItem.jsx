import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"

const TodoItem = ({ id, text, title, image }) => {
  const { deleteTodo } = useContext(TodoListContext)

  const deleteHandler = () => deleteTodo(id)

  return (
    <section className="d-flex flex-column align-items-center">
      <div className="card border-dark" style={{width: '20rem'}}>
        <img src={image} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body text-dark bg-light">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="/" class="card-link">#{title}</a>
        </div>
        <div className="card-body text-white bg-secondary d-flex flex-column align-items-center">
          <button onClick={deleteHandler} type="button" className="btn btn-danger">Remove Post</button>
        </div>
      </div>
    </section>
  )
}

export default TodoItem