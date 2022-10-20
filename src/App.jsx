import React from 'react'
import {TodoCounter} from './components/TodoCounter.jsx';
import {CreateTodo} from './components/CreateTodo.jsx'
import {TodoSearch} from './components/TodoSearch.jsx'
import {TodoList} from './components/TodoList.jsx'

function App() {
  return (
    <>
    <TodoCounter />
    <TodoSearch/>
    <TodoList/>
    <CreateTodo />
    </>
  )
}

export default App;
