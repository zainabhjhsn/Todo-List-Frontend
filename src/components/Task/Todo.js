import React from 'react'
import "./Todo.css"
import CheckedIcon from '../../constants/svgs/check'
import EditIcon from '../../constants/svgs/edit'
import DeleteIcon from '../../constants/svgs/delete'    

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="Todo">
        <p>{task.task}</p>
        <div className="TodoIcons">
            <CheckedIcon className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}/>
            <EditIcon className="edit-icon" onClick={() => editTodo(task.id)} />
            <DeleteIcon className="delete-icon" onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo
