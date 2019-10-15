import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../../redux';

export default function ({items}) {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const handleChange = todoId => e => {
    dispatch(toggleTodoAction(todoId));
  };

  const handleClick = todoId => e => {
    dispatch(deleteTodoAction(todoId));
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        { todos.map(todo => (
          <li key={todo.id}>
            <span className={todo.complete ? 'complete' : null}>{ todo.name }</span>
            <input type='checkbox' onChange={handleChange(todo.id)} />
            <button onClick={handleClick(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}