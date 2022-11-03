import React from 'react'

export  function TodoList(props) {
  return (
    <>
      <section>
          <ul>
            {props.children}
          </ul>
      </section>
    </>

  )
}


