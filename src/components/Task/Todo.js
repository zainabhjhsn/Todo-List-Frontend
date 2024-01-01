import React from 'react'
import "./Todo.css"
import CheckedIcon from '../../constants/svgs/check'
import EditIcon from '../../constants/svgs/edit'
import DeleteIcon from '../../constants/svgs/delete'    

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="Todo">
        <p className={`${task.done ? "completed" : "incompleted"}`}>{task.title}</p>
        <p className={`${task.done ? "completed" : "incompleted"}`}>{task.description}</p>
        <div className="TodoIcons">
          
            <div onClick={() => toggleComplete(task.id, task.done)} >
              <CheckedIcon />
            </div>
            
            <div  onClick={() => editTodo(task.id)} >
              <EditIcon className="edit-icon"/>
            </div>

            <div onClick={() => deleteTodo(task.id)}>
              <DeleteIcon className="delete-icon"  />
            </div>
           
        </div>
       
    </div>
    
  )
}

export default Todo
