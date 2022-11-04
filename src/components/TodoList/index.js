import React from 'react'

export  function TodoList(props) {
  return (
    <>
    <div className='list-todo'>
      <h4>Tareas por hacer</h4>
        <section>
            <ul>
              {props.children}
            </ul>
        </section>


    </div>
    </>

  )
}


