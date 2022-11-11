import React, {useState, useEffect} from 'react'
// import '../index.css'

export function TodoCounter({user, usersLS}) {
  let tareasPendientes = user.tasks.length
  const [first, setfirst] = useState(user.default)
  useEffect(() => {
    setfirst(user.default)
  }, [user.default, user])
  
  function uwu() {
    setfirst(!first)
    user.default = !first

    let usersNew = usersLS.map((a)=>{
      if (a.default) {
        a.default = false
      }
      return a
    })
    let i = usersLS.findIndex((a)=>(a.nombre === user.nombre))
    usersNew[i].default = user.default
    localStorage.setItem('usuarios', JSON.stringify(usersLS))
  }
  return (
    <>

    <div className="switch-button">
      <span>Default</span>
      <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"
      onChange={(a)=>(uwu())}
      checked={first}/>
      <label htmlFor="switch-label" className="switch-button__label"></label>
    </div>

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



