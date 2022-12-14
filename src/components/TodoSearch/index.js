import React from 'react'

export function TodoSearch({buscarTodo, setBuscarTodo}) {
  return(
    <>
      <div className='search-container'>
        <div className='input-search'>
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="" />
          <input type="text" placeholder='Buscar ToDo' value={buscarTodo} onChange={(event)=>setBuscarTodo(event.target.value)} />
        </div>
        <button type='button' className='icons'>ToDo</button>
      </div>
    </>
  )
}


