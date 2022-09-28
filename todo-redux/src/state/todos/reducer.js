import { ADD_TODO } from './actionTypes';
import { REMOVE_TODO } from './actionTypes';
import { DONE_TODO } from './actionTypes';

const INITIAL_STATE = {
  todos: []
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            completed: false
          }
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    case DONE_TODO:
      return {
        ...state,
        todos: 
           state.todos.map(todo => {
            return{
            id: todo.id,
            title: todo.title,
            completed:true
          }
           }) 
        
      };
    default:
      return state;
  };
}

