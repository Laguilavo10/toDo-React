import React, { useState } from "react";

export const CreateTodo = (props) => {
  const [abierto, setAbierto] = useState(false);

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

  function crearToDo(a, tasks, setToDos) {
    a.preventDefault();
    let today = new Date();
    let now = today.toLocaleDateString("en-ES");
    let [mes, dia, año] = now.split("/");
    mes = numeroAMes(mes);
    if (a.target.form[0].value === '') {
      return
    }

    tasks.push({
      text: a.target.form[0].value,
      completed: false,
      fechaCreacion: {
        dia,
        mes,
        año,
      },
    });

    let i = props.users.findIndex((a)=>(a.nombre === props.usuarioActivo.nombre))
    let nuevoItem = [...tasks];
    props.users[i].tasks= [...nuevoItem]
    setToDos(nuevoItem);
    localStorage.setItem('profile', JSON.stringify(prueba))
    a.target.form[0].value = "";
    localStorage.setItem('usuarios', JSON.stringify(props.users))
  }

  return (
    <>
      <button
        className="create-todo icons"
        onClick={() => {
          setAbierto(true);
        }}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"
          alt=""
        />
      </button>

      {/* MODAL */}
      <div className={`modal ${!abierto && "invisible"} `}>
        <button className='icons' onClick={() => {setAbierto(false)}}>
          X
        </button>
        <h3>Crear nuevo ToDO</h3>
        <form>
          <input type="text" />
          <button className='icons' onClick={(a) => {crearToDo(a, props.tasks, props.setToDos);}}>
              Crear
          </button>
        </form>
      </div>
    </>
  );
};
