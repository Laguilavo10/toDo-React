import React from 'react'


export function TodoItem(props) {
// const [isCheck, setIsCheck] = useState(props.completed)
  let fechaToDo = Object.values(props.fechaCreacion).join("/")

  return (
    <>
      <li className='item-todo'>
          <img 
            src={`https://img.icons8.com/ios-glyphs/30/${props.completed ? '008000' : '000000'}/checked--v1.png`} //condicional que me valida para cambiar el color del check
            // src={`../../assets/checked-${props.completed}.png`} //condicional que me valida para cambiar el color del check
            alt="check" id='check' 
            className='icons'
            onClick={()=>{props.onChecked()}}
            />

          <span className={`${props.completed && 'todo-checked'}`}>{props.text}</span>
        <div className='delete-container'>
          <img src="https://img.icons8.com/ios-filled/50/null/x.png" alt="delete" id='delete' className='icons' onClick={props.onDelete}/>

        </div>
        <span className='created-date'>Creado el {fechaToDo}</span>
      </li>
    </>
  )
}

