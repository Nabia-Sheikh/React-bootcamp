import { ADDNEW_TODO, DELETE_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO } from "../action/actionType";

export const todoReducer = (state = [ ], action) => {
  switch (action.type) {
    case ADDNEW_TODO:
      return [...state, action.payload]
    case GETALL_TODO:
      return action.payload
    case TOGGLE_TODO:
      return state.map((todo) => todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo)
    case UPDATE_TODO:
      return state.map((todo) => todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo)
    case DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload._id)
    default:
      return state;
  }
};
