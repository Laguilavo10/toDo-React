import React, { useState } from "react";

export const CreateTodo = ({ Tareas, setToDos, usuariosArray, usuario}) => {
  const [cerrado, setcerrado] = useState(true);
  // console.log(usuarios)
  function numeroAMes(numero) {
    let meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    return meses[numero - 1];
  }

  function crearToDo(a, Tareas, setToDos, usuariosArray, usuario) {
    a.preventDefault();
    let today = new Date();
    let now = today.toLocaleDateString("en-ES");
    let [mes, dia, año] = now.split("/");
    mes = numeroAMes(mes);
    if (a.target.form[0].value === '') {
      return
    }
    Tareas.push({
      text: a.target.form[0].value,
      completed: false,
      fechaCreacion: {
        dia,
        mes,
        año,
      },
    });

    let nuevoItem = [...Tareas];
    
    setToDos(nuevoItem);
    
    console.log(nuevoItem)
    console.log(Tareas)
    console.log(usuario)
    console.log(usuariosArray)
    localStorage.setItem('profile', JSON.stringify(usuariosArray))
    a.target.form[0].value = "";
  }

  return (
    <>
      <button
        className="create-todo icons"
        onClick={() => {
          setcerrado(false);
        }}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"
          alt=""
        />
      </button>

      {/* MODAL */}
      <div className={`modal-create-todo ${cerrado && "invisible"} `}>
        <button className='icons' onClick={() => {setcerrado(true)}}>
          X
        </button>
        <h3>Crear nuevo ToDO</h3>
        <form>
          <input type="text" />
          <button className='icons' onClick={(a) => {crearToDo(a, Tareas, setToDos, usuariosArray, usuario);}}>
              Crear
          </button>
        </form>
      </div>
    </>
  );
};
