import React from 'react'
import "./TodoContainer.css"
import TodoForm from '../Form/TodoForm'
import EditTodoForm from '../EditForm/EditTodoForm'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Task/Todo';

function ToDoContainer() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //first arg is the current state, second arg is the new state
    //setTodos([...todos, todo]); //this will add the new todo to the end of the array
    //...todos is a spread operator, it will take the current todos and spread them out
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, done: false, isEditing: false },
    ]);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          //suppose to update
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          //do nothing
          return todo;
        }
      })
    );
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }


  const editTask = (value, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          //suppose to update
          return {
            ...todo,
            task: value,
            isEditing: !todo.isEditing,
          };
        } else {
          //do nothing
          return todo;
        }
      })
    );
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>  
      <TodoForm  addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) => (
        todo.isEditing ? 
          (<EditTodoForm task={todo} editTodo={editTask} />

        ) :(
        
        <Todo
          key={todo.id}
          task={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />)
      ))}
    
    </div>
  )
}

export default ToDoContainer