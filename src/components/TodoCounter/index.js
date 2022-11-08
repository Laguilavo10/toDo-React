import userEvent from '@testing-library/user-event'
import React from 'react'
// import '../index.css'

export function TodoCounter({user}) {
  return (
    <>
    <header className='header-todo'>
      <div>
        <h1>Hi, {user.nombre}</h1>
        <p>10 Tareas pendientes</p>
      </div>
      <img src={user.picture} alt="" />
    </header>
    </>
  )
}



