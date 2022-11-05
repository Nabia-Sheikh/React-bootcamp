import { ADDNEW_TODO, GETALL_TODO } from "../action/actionType";

export const todoReducer = (state = [ ], action) => {
  switch (action.type) {
    case ADDNEW_TODO:
      return [...state, action.payload]
    case GETALL_TODO:
      return action.payload
    default:
      return state;
  }
};
