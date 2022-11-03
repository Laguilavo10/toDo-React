import React from 'react'
import './index.css'
import { CreateTodo } from "./components/CreateTodo";
import { TodoCounter } from "./components/TodoCounter";
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
// import TodoCounter from './components/TodoCounter.js';
// import TodoSearch from './components/TodoSearch.js'
// import TodoList from './components/TodoList.js'
// // import TodoItem from './components/TodoItem.js'
// import {CreateTodo} from './components/CreateTodo.js'

// console.log(todo)
let todo = [

  {text:'Guardar las etiquetas en el LocalStorage', completed:false},

  {text:'Hacer el boton de eliminar Tarea', completed:false},

  {text:'Terminar el generador de contraseñas', completed:false},

  {text:'Revisar Logical Nullish Assignment', completed:false},

]

function App() {
  return (
    <>
      <TodoCounter daklsnd='jol'>
          <p>
            dsadsadhjgashjdashjgdjh
          </p>
          <span>
            <p></p>
          </span>
      </TodoCounter>

      <TodoSearch/>
      <TodoList uwu='sahjgdv'>
        {todo.map((a)=><TodoItem key={a.text} text={a.text} completed={a.completed}/>)}
      </TodoList>
      <CreateTodo/>

    </>
  )
}

export default App;



