import {
  ADDNEW_TODO,
  DELETE_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./actionType"
import axios from "axios"

const API_URL = "http://localhost:5000"

export const addTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/api/addTodo`, { data })
    dispatch({ type: ADDNEW_TODO, payload: res.data })
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message)
  }
}

export const getTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/api/getTodo`)
    dispatch({ type: GETALL_TODO, payload: res.data })
  } catch (error) {
    console.log("Error while calling getTodo API ", error.message)
  }
}

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/api/toggleTodo/${id}`)
    dispatch({ type: TOGGLE_TODO, payload: res.data })
  } catch (error) {
    console.log("Error while calling toggleTodo API ", error.message)
  }
}

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/api/updateTodo/${id}`, { data })
    dispatch({ type: UPDATE_TODO, payload: res.data })
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message)
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/api/deleteTodo/${id}`)
    dispatch({ type: DELETE_TODO, payload: res.data })
  } catch (error) {
    console.log("Error while calling deleteTodo API ", error.message)
  }
}
