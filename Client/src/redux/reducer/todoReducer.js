import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO } from "../action/actionType";

export const todoReducer = (state = [ ], action) => {
  switch (action.type) {
    case ADDNEW_TODO:
      return [...state, action.payload]
    case GETALL_TODO:
      return action.payload
    case TOGGLE_TODO:
      return state.map((todo) => todo._id === action.payload._id ? { ...todo, done: !todo.done} : todo)
    default:
      return state;
  }
};
