import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../redux/action'
import Todo from './Todo'

const Todos = () => {

  const dispatch = useDispatch()

  const todos = useSelector(state => state.todo)

  useEffect(() => {
    dispatch( getTodo() )
  }, [ dispatch ])

  return (
    <article>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  )
}

export default Todos