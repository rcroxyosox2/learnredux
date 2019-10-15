import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../redux';

export default function () {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (todo.trim() === '') return;
    dispatch(addTodoAction({
      id: uuid(),
      name: todo,
      complete: false
    }));
    setTodo('');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input type='text' name='todo' placeholder='add a todo' value={todo} onChange={handleOnChange} />
      <button type='submit'>Add todo</button>
    </form>
  );
}