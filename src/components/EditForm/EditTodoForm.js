import React from 'react'
import { useState } from 'react'
import './EditTodoForm.css'
import axios from 'axios'

function EditTodoForm({editTodo, task}) {
  
  const [titleName, setTitleName] = useState(task.title)
  const [desc, setDesc] = useState(task.description)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleName) {
      // add todo
      editTodo(titleName, desc, task.id);
      axios.patch(`http://localhost:3001/task/${task.id}`, {
        title: titleName,
        description: desc
      });
      // clear form after submission
      setTitleName('');
      setDesc('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input 
      type="text" 
      value={titleName} 
      onChange={(e) => setTitleName(e.target.value)}
      className="todo-input-name"
      placeholder='Task Name'
    />
    <input 
      type="text" 
      value={desc} 
      onChange={(e) => setDesc(e.target.value)}
      className="todo-input-desc"
      placeholder='What is the task?'
    />
    <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}
export default EditTodoForm