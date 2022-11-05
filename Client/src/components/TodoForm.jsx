import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/action"

const TodoForm = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    setText(" ")
  }
  const onInputChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          placeholder="Add a todo"
          className="input"
          value={text}
          onChange={onInputChange}
        />
      </form>
    </>
  )
}

export default TodoForm
