import React from 'react'
// import {todo} from '../../App.js'



export function TodoItem(props, {check}) {


  
  return (
    <>
      <li className='item-todo'>
          <img 
            src={`https://img.icons8.com/ios-glyphs/30/000000/checked--v1.png`} 
            alt="check" id='check' 
            className='icons'/>

          <span className=''>{props.text}</span>

        <img src="https://img.icons8.com/ios-glyphs/30/null/xbox-x.png" alt="delete" id='delete' className='icons'/>
        <span className='created-date'>Creado el 24/nov</span>
      </li>
    </>
  )
}

