import React from 'react'

const TodoForm = () => {

  const onFormSubmit = (event) => { 

  }
  const onInputChange = (e) => { 

  }
  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          className="input"
          onchange={onInputChange}
        />
      </form>
    </>
  )
}

export default TodoForm