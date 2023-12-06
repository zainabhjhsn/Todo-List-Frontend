import React from 'react'
import { useState } from 'react'
import './TodoForm.css'

function ToDoForm({addTodo}) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      // add todo
      addTodo(title, desc);
      // clear form after submission
      setTitle('');
      setDesc('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input 
      type="text" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)}
      className="todo-input-name"
      placeholder='Task Name:'
    />
    
     <input 
      type="text" 
      value={desc} 
      onChange={(e) => setDesc(e.target.value)}
      className="todo-input-desc"
      placeholder='What is the task?'
    />
    <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm