import React from "react"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import Todos from "./components/Todos"

const App = () => {
  return (
    <>
      <Header />
      <TodoForm />
      <Todos />
    </>
  )
}

export default App
