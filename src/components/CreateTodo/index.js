import React, { useState } from "react";

export const CreateTodo = (props) => {
  const [cerrado, setcerrado] = useState(true);
  // console.log()
  // console.log(props)

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


    // let prueba = JSON.parse(localStorage.getItem('profile'))
    // let saber = prueba.findIndex((a)=>(a.nombre === usuario.nombre))
    // let nuevoItem = [...Tareas];
    // prueba[saber].tasks = [...nuevoItem]
    // setToDos(prueba);
    // localStorage.setItem('profile', JSON.stringify(prueba))
    // a.target.form[0].value = "";

    let prueba = JSON.parse(localStorage.getItem('profile'))
    console.log(prueba)
    console.log(usuariosArray)
    let saber = prueba.findIndex((a)=>(a.nombre === usuario.nombre))
    let nuevoItem = [...Tareas];
    prueba[saber].tasks = [...nuevoItem]
    setToDos(nuevoItem);
    localStorage.setItem('profile', JSON.stringify(prueba))
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
      <div className={`modal ${cerrado && "invisible"} `}>
        <button className='icons' onClick={() => {setcerrado(true)}}>
          X
        </button>
        <h3>Crear nuevo ToDO</h3>
        <form>
          <input type="text" />
          <button className='icons' onClick={(a) => {crearToDo(a, props.Tareas, props.setToDos, props.usuariosArray, props.usuario);}}>
              Crear
          </button>
        </form>
      </div>
    </>
  );
};
