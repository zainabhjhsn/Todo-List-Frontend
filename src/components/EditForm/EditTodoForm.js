import React from 'react'
import { useState } from 'react'
import './EditTodoForm.css'
import axios from 'axios'

function EditTodoForm({editTodo, task}) {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // add todo
      editTodo(value, task.id);
      axios.patch(`http://localhost:3001/task/${task.id}`, {
        title: value,
      });
      // clear form after submission
      setValue('');

    }
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      className="todo-input"
      placeholder='Update the task here'
    />
    <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}
export default EditTodoForm