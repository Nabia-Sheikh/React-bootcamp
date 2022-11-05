import { ADDNEW_TODO, GETALL_TODO } from "./actionType";
import axios from "axios";

const API_URL = "http://localhost:5000"

export const addTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/api/addTodo`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
        console.log("Error while calling addNewTodo API ", error.message)
  }
}

export const getTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/api/getTodo`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
        console.log("Error while calling getTodo API ", error.message)
  }
}
