import { ADDNEW_TODO } from "../action/actionType";

export const todoReducer = (state = [ ], action) => {
  switch (action.type) {
    case ADDNEW_TODO:
        return [...state, action.payload]
    default:
      return state;
  }
};
