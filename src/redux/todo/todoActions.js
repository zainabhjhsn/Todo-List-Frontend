import axios from "axios";
import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    TOGGLE_TODO_REQUEST,
    TOGGLE_TODO_SUCCESS,
    TOGGLE_TODO_FAILURE,
    EDIT_TODO_REQUEST,
    EDIT_TODO_SUCCESS,
    EDIT_TODO_FAILURE,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILURE
} from "./todoTypes";

export const fetchTodosRequest = () => {
    return {
        type: FETCH_TODOS_REQUEST,
    };
}
export const fetchTodosSuccess = todos => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos,
    };
}
export const fetchTodosFailure = error => {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: error,
    };
}


export const addTodoRequest = () => {
    return {
        type: ADD_TODO_REQUEST,
    };
}
export const addTodoSuccess = todos => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: todos,
    };
}
export const addTodoFailure = error => {
    return {
        type: ADD_TODO_FAILURE,
        payload: error,
    };
}


export const deleteTodoRequest = () => {
    return {
        type: DELETE_TODO_REQUEST,
    };
}
export const deleteTodoSuccess = todo => {
    return {
        type: DELETE_TODO_SUCCESS,
        payload: todo,
    };
}
export const deleteTodoFailure = error => {
    return {
        type: DELETE_TODO_FAILURE,
        payload: error,
    };
}


export const toggleTodoRequest = () => {
    return {
        type: TOGGLE_TODO_REQUEST,
    };
}
export const toggleTodoSuccess = todo => {
    return {
        type: TOGGLE_TODO_SUCCESS,
        payload: todo,
    };
}
export const toggleTodoFailure = error => {
    return {
        type: TOGGLE_TODO_FAILURE,
        payload: error,
    };
}


export const editTodoRequest = () => {
    return {
        type: EDIT_TODO_REQUEST,
    };
}
export const editTodoSuccess = todos => {
    return {
        type: EDIT_TODO_SUCCESS,
        payload: todos,
    };
}
export const editTodoFailure = error => {
    return {
        type: EDIT_TODO_FAILURE,
        payload: error,
    };
}


export const editTaskRequest = () => {
    return {
        type: EDIT_TASK_REQUEST,
    };
}
export const editTaskSuccess = todos => {
    return {
        type: EDIT_TASK_SUCCESS,
        payload: todos,
    };
}
export const editTaskFailure = error => {
    return {
        type: EDIT_TASK_FAILURE,
        payload: error,
    };
}


export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        axios
            .get("http://localhost:3001/task")
            .then(response => {
                const todos = response.data;
                dispatch(fetchTodosSuccess(todos));
            })
            .catch(error => {
                dispatch(fetchTodosFailure(error.message));
            });
    };
}

export const addTodo = (todoName, desc) => {
    return (dispatch) => {
        dispatch(addTodoRequest());
        axios
            .post("http://localhost:3001/task", {
                title: todoName,
                description: desc,
            })
            .then(response => {
                const newTodo = response.data;
                dispatch(addTodoSuccess(newTodo));
            })
            .catch(error => {
                dispatch(addTodoFailure(error.message));
            });
    };
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(deleteTodoRequest());
        axios
            .delete(`http://localhost:3001/task/${id}`)
            .then(response => {
                const newTodos = response.data;
                dispatch(deleteTodoSuccess(newTodos));
            })
            .catch(error => {
                dispatch(deleteTodoFailure(error.message));
            });
    };
}

export const toggleTodo = (id, done) => {
    return (dispatch) => {
        dispatch(toggleTodoRequest());
        axios
            .patch(`http://localhost:3001/task/${id}`, {
                done: !done,
            })
            .then(response => {
                const newTodos = response.data;
                dispatch(toggleTodoSuccess(newTodos));
            })
            .catch(error => {
                dispatch(toggleTodoFailure(error.message));
            });
    };
}

export const editTodo = (id) => {
    return (dispatch) => {
        dispatch(editTodoRequest());
        axios
            .patch(`http://localhost:3001/task/${id}`)
            .then(response => {
                const newTodos = response.data;
                dispatch(editTodoSuccess(newTodos));
            })
            .catch(error => {
                dispatch(editTodoFailure(error.message));
            });
    };
}

export const editTask = (value, desc, id) => {
    return (dispatch) => {
        dispatch(editTaskRequest());
        axios
            .patch(`http://localhost:3001/task/${id}`, {
                title: value,
                description: desc,
            })
            .then(response => {
                const newTodos = response.data;
                dispatch(editTaskSuccess(newTodos));
            })
            .catch(error => {
                dispatch(editTaskFailure(error.message));
            });
    };
}