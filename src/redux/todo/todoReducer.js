import { 
    FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, 
    ADD_TODO_SUCCESS, ADD_TODO_REQUEST, ADD_TODO_FAILURE,
    DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
    TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE,
    EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE,
    EDIT_TASK_REQUEST, EDIT_TASK_SUCCESS, EDIT_TASK_FAILURE
} from './todoTypes'

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                loading: false,
                todos: action.payload,
                error: ''
            }
        case FETCH_TODOS_FAILURE:
            return {
                loading: false,
                todos: [],
                error: action.payload
            }

        case ADD_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                loading: false,
                todos: [...state.todos, action.payload],
                error: ''
            }
        case ADD_TODO_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case DELETE_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_TODO_SUCCESS:
            return {
                loading: false,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                error: ''
            }
        case DELETE_TODO_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        
        case TOGGLE_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TOGGLE_TODO_SUCCESS:
            return {
                loading: false,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo
                }),
                error: ''
            }
        case TOGGLE_TODO_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        
        case EDIT_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_TODO_SUCCESS:
            return {
                loading: false,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            title: action.payload.title,
                            description: action.payload.description,
                            isEditing: !todo.isEditing
                        }
                    }
                    return todo
                }),
                error: ''
            }
        case EDIT_TODO_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        
        case EDIT_TASK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_TASK_SUCCESS:
            return {
                loading: false,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            title: action.payload.title,
                            description: action.payload.description,
                            isEditing: !todo.isEditing
                        }
                    }
                    return todo
                }),
                error: ''
            }
        case EDIT_TASK_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

            

        default: return state
    }
}

export default reducer