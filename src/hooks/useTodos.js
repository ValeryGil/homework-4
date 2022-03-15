import { useEffect, useState } from "react"

const LSTodosKey = 'todos'

const useTodos = () => {
  
  const [todos, setTodos] = useState([])
  
  const createTodo = (title, text, image) => {
    const newTodo = {
      id: Date.now(),
      title,
      text,
      image,
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
  }
    
  const completedTodo = (id) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }
    
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter((todo) => todo.id !== id))
  }
    
  const clearAllTodo = () => {
    setTodos([])
  }
    
  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSTodosKey)
    if (dataFromLS) {
      setTodos(JSON.parse(dataFromLS))
    //} else {
      //fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
        //.then(res => res.json())
        //.then(data => data.map(({ title, userId, ...rest }) => ({ ...rest, text: title })))
        //.then(data => data.map((todo) => {
          //return {
            //id: todo.id,
            //text: todo.title,
            //completed: todo.completed,
          //}
        //}))
        //.then(setTodos) //.then((mapData) => setTodos(mapData))
    }
  }, [])
    
  useEffect(() => {
    localStorage.setItem(LSTodosKey, JSON.stringify(todos))
  }, [todos])

  return {
    todos,
    createTodo,
    completedTodo,
    deleteTodo,
    clearAllTodo,
  }
}

export default useTodos