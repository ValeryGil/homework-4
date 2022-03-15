import { useContext, useState } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"

const Form = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  
  const { createTodo } = useContext(TodoListContext)
  
  const titleHandler = (e) => setTitle(e.target.value)
  const textHandler = (e) => setText(e.target.value)
  const imageHandler = (e) => setImage(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault()

    const titleTrim = title.trim()
    const textTrim = text.trim()
    const imageTrim = image.trim()
    if (titleTrim && textTrim && imageTrim) {
      createTodo(titleTrim, textTrim, imageTrim)
      setTitle('')
      setText('')
      setImage('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control my-2"
          placeholder="Text Header..." 
          value={title} 
          onChange={titleHandler} 
        />
        <input 
          type="text" 
          className="form-control my-2"
          placeholder="Text Post..." 
          value={text} 
          onChange={textHandler}
        />
        <input 
          type="text" 
          className="form-control"
          placeholder="Add Photo..." 
          value={image} 
          onChange={imageHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  )
}

export default Form