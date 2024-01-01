import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTask, editTodo, fetchTodos, toggleTodo } from "../../redux/todo/todoActions"
import EditTodoForm from '../EditForm/EditTodoForm'
import TodoForm from '../Form/TodoForm'
import Todo from '../Task/Todo'
import "./TodoContainer.css"


function ToDoContainer() {

  const dispatch = useDispatch()
  const {todos} = useSelector(state => state.todo)

  useEffect(() => {
    dispatch(fetchTodos())
  }, []);


  const addNewTodo = (todoName, desc) => {
    dispatch(addTodo(todoName, desc));
  }

  const deleteNewTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  const toggleNewTodo = (id, done) => {
    dispatch(toggleTodo(id, done));
  }

  const editNewTodo = (id) => {
    dispatch(editTodo(id));
  }

  const editNewTask = (value, desc, id) => {
    dispatch(editTask(value, desc, id));
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>  
      <TodoForm  addTodo={addNewTodo} />
      {/* display todos */}
      {todos.map((todo) => (
        todo.isEditing ? 
          (<EditTodoForm task={todo} editTodo={editNewTask} />

        ) :(
        
        <Todo
          key={todo.id}
          task={todo}
          toggleComplete={toggleNewTodo}
          deleteTodo={deleteNewTodo}
          editTodo={editNewTodo}
        />)
      ))}
    
    </div>
  )
}

export default ToDoContainer