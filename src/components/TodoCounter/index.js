import React from 'react'
// import '../index.css'

export function TodoCounter({user}) {
  let tareasPendientes = user.tasks.length
  return (
    <>
    {/* <div>
      <span>Default</span>
      <button>onClick</button>
    </div> */}
    <header className='header-todo'>
      <div>
        <h1>Hi, {user.nombre}</h1>
        <p>{tareasPendientes > 1 || tareasPendientes === 0 ? `${tareasPendientes} Tareas Pendientes` : `${tareasPendientes} Tarea Pendiente`}</p>
        {/* <p>{tareasPendientes} Tareas Pendientes</p> */}
      </div>
      <img src={user.picture} alt="" />
    </header>
    </>
  )
}



