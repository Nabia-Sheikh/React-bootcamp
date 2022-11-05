import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo }) => {
  return (
    <li className="task">
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
