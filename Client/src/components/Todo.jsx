import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import { toggleTodo } from "../redux/action"

const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  
  return (
    <li className="task"
    onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
    >
      <span>{todo.data}</span>

      <span className="icon">
        <FontAwesomeIcon icon={faTrash} />
      </span>
      <span className="icon">
        <FontAwesomeIcon icon={faPen} />
      </span>
    </li>
  )
}


export default Todo
