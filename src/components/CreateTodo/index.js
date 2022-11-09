import React, {useState} from "react";

export const CreateTodo = (props) => {
  const [cerrado, setcerrado] = useState(true)
  // console.log(props.onCreate)
  return (
    <>
      <button className="create-todo icons" onClick={()=>{setcerrado(false)}}>
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"
          alt=""
        />
      </button>
      <div className={`modal-create-todo ${cerrado && 'invisible'}`}>
        <button onClick={()=>{setcerrado(true)}}>X</button>
        <h3>Crear nuevo ToDO</h3>
        <form action="">
        <input type="text" />
        <button onClick={props.onCreate} >Crear</button>
        </form>
      </div>
    </>
  );
};
