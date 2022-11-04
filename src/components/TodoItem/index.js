import React from 'react'

export function TodoItem(props) {

  return (
    <>
      <li className='item-todo'>
        {/* <div> */}
          <img src="https://img.icons8.com/ios-glyphs/30/323232/checked--v1.png" alt="check" id='check' className='icons'/>
          <span>{props.text}</span>
        {/* </div> */}
        <img src="https://img.icons8.com/ios-glyphs/30/null/xbox-x.png" alt="delete" id='delete' className='icons'/>
        <span className='created-date'>Creado el 24/nov</span>
      </li>
    </>
  )
}

