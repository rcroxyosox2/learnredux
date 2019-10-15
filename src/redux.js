import { createStore } from 'redux';
import uuid from 'uuid/v4';

const reducer = function(state, {type, payload}) {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === payload ? {...todo, complete: !todo.complete } : todo )
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      }
    default:
      return state
  }
};

export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const toggleTodoAction = (todo) => ({
  type: 'TOGGLE_TODO',
  payload: todo
});

export const deleteTodoAction = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId
});

const initialState = {
  todos: [
    {
      id: uuid(),
      name: 'Go to the gym',
      complete: false
    },
    {
      id: uuid(),
      name: 'Do something else',
      complete: true
    },
    {
      id: uuid(),
      name: 'buy gift',
      complete: false
    },
  ]
};

export const store  = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);