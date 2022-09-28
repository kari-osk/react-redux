import { ADD_TODO } from './actionTypes';
import { REMOVE_TODO } from './actionTypes';
import { DONE_TODO } from './actionTypes';

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      title
    }
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  }
}

export function doneTodo(id) {
  return {
    type: DONE_TODO,
    payload: {
      id
    }
  }
}