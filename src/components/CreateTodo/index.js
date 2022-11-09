import React, { useState } from "react";

export const CreateTodo = ({ Tareas, setToDos }) => {
  const [cerrado, setcerrado] = useState(true);

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

  function crearToDo(a, Tareas, setToDos) {
    a.preventDefault();
    let today = new Date();
    let now = today.toLocaleDateString("en-ES");
    let [mes, dia, año] = now.split("/");
    mes = numeroAMes(mes);

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
      <div className={`modal-create-todo ${cerrado && "invisible"}`}>
        <button onClick={() => {setcerrado(true)}}>
          X
        </button>
        <h3>Crear nuevo ToDO</h3>
        <form action="">
          <input type="text" />
          <button onClick={(a) => {crearToDo(a, Tareas, setToDos);}}>
              Crear
          </button>
        </form>
      </div>
    </>
  );
};
