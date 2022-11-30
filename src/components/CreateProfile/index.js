import React, {useState} from "react";

export function CreateProfile(props) {
  const [abierto, setAbierto] = useState(false)
  const crearUsuario = (event) => {
    event.preventDefault()
    let nombre = event.target.form[0].value
    let picture = event.target.form[1].value
    let i = props.usersLS.length 
    if (!nombre && !picture) {
      return
    }
    console.log(props)
    props.usersLS.push(
      {
        default:false,
        nombre,
        picture,
        tasks : []
      }
    )
    console.log(props.usersLS)
    localStorage.setItem('usuarios', JSON.stringify(props.usersLS))
    props.setUsuarioActivo(props.usersLS[i])
    props.setToDos([])

  };
  return (
    <>
    <div
      className="new-profile icons"
      onClick={(a)=>(setAbierto(true))}
    >
      <img
        src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png"
        alt=""
      />
    </div>
    <div className={`modal ${!abierto && "invisible"} modal-user`}>
         <button className='icons' onClick={()=>{setAbierto(false)}}>
           X
         </button>
         <h3>Crear nuevo usuario</h3>
         <form>
           <label>Nombre usuario
             <input type="text" />
           </label>
           <label>Url Imagen Perfil
             <input type="text" placeholder="https://example.com"/>
           </label>
           <button className='icons' onClick={(event)=>{crearUsuario(event)}}>
               Crear
           </button>
         </form>
    </div>
    </>
  );
}
