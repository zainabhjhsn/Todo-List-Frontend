import React from 'react'
import "./TodoContainer.css"
import TodoForm from '../Form/TodoForm'
import EditTodoForm from '../EditForm/EditTodoForm'
import { useState, useEffect } from 'react'
import Todo from '../Task/Todo';
import Axios from 'axios';
import axios from 'axios'


function ToDoContainer() {
  
  const [todos, setTodos] = useState([]);

  const getTodos = async() => {
    const response = await Axios.get('http://localhost:3001/task');
    setTodos(response.data);
  }

  useEffect(() => {
    getTodos();
  }, []);


  const addTodo = (todoName, desc) => {
    //first arg is the current state, second arg is the new state
    //setTodos([...todos, todo]); //this will add the new todo to the end of the array
    //...todos is a spread operator, it will take the current todos and spread them out
    setTodos([
      ...todos,
      { id: null, title: todoName, description: desc, done: false, isEditing: false },
    ]);
    axios.post('http://localhost:3001/task', {
      title: todoName,
    }).then((response) => {
      setTodos([
        ...todos,
        { id: response.data.id, title: todoName, description: desc, done: false, isEditing: false },
      ]);
    }).catch((error) => {
      console.log(error);
    });
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
    axios.patch(`http://localhost:3001/task/${id}`, {
      //here we are updating the done property of the todo
      //we are setting it to the opposite of what it is
      //if it is true, we set it to false
      //if it is false, we set it to true
      //we are using the find method to find the todo with the id that we are passing in
      //then we are getting the done property of that todo
      //then we are setting it to the opposite of what it is
      done: !todos.find((todo) => todo.id === id).done,
    });
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    axios.delete(`http://localhost:3001/task/${id}`);
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }


  const editTask = (value, desc, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          //suppose to update
          return {
            ...todo,
            title: value,
            description: desc,
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