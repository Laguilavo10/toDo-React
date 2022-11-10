import React, { useState } from "react";
import "./index.css";
import { CreateTodo } from "./components/CreateTodo";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { CreateProfile } from "./components/CreateProfile";
import { Profile } from "./components/Profile";

let usuarios = [
  {
    id:0,
    nombre: "Incognito",
    picture:
      "https://uploads-ssl.webflow.com/6246bd29cda6cb50b4a9920e/62a060a9be0c5462c8f1a0bf_istockphoto-1352857051-612x612-1.jpeg",
    tasks: [
      {
        text: "dasbdjkjshdjksah",
        completed: false,
        fechaCreacion: {
          dia: "10",
          mes: "Nov",
          año: "2022",
        },
      },
    ],
  },
  {
    id:1,
    nombre: "Andres Laguilavo",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5p81IgpgYHIH4d50ZsVISnCLulPACHzyAPu1DGkMIQ&s",
    tasks: [
      {
        text: "Crear logica del Modal de creacion de TODOs",
        completed: false,
        fechaCreacion: {
          dia: "8",
          mes: "Nov",
          año: "2022",
        },
      },
    ],
  },
];

function App() {
  let users = JSON.parse(localStorage.getItem('profile'))

  if (!users) {
    localStorage.setItem('profile', JSON.stringify(usuarios))
  }

  const [usuarioActivo, setUsuarioActivo] = useState(users[0]);

  const [buscarTodo, setBuscarTodo] = useState("");

  const [toDos, setToDos] = useState(usuarioActivo.tasks);
  const [isCheck, setIsCheck] = useState(false);

  let toDoArray = [];

  if (buscarTodo === "") {
    toDoArray = toDos;
  } else {
    let buscarTodoMinusculas = buscarTodo.toLowerCase();
    toDoArray = usuarioActivo.tasks.filter((a) =>
      a.text.toLowerCase().includes(buscarTodoMinusculas)
    );
  }
// console.log(users)
  return (
    <>
      <div className="profiles-container">
        {
        users.map((usuario) => {
          return (
            <Profile
              key={usuario.nombre}
              name={usuario.nombre}
              picture={usuario.picture}
              onSelect={() => {
                setUsuarioActivo(usuario);
                setToDos(usuario.tasks);
              }}
              userActive={usuarioActivo}
            />
          );
        })}  
        <CreateProfile arrayPerfiles={users} setUsuarioActivo={setUsuarioActivo}/>
      </div>

      <div className="todo-container">
        <TodoCounter user={usuarioActivo} />

        <TodoSearch buscarTodo={buscarTodo} setBuscarTodo={setBuscarTodo} />

        <TodoList>
          {toDoArray.map((a, index) => (
            <TodoItem
              key={index}
              reference={index}
              text={a.text}
              completed={a.completed}
              fechaCreacion={a.fechaCreacion}
              onChecked={() => {
                a.completed ? (a.completed = false) : (a.completed = true);//sirve de toggle para poder tachar y destachar el toDo
                console.log(a)
                // let userSelect = usuarios.find((b)=>(b.nombre === usuarioActivo.nombre))
                // console.log(userSelect)
                // console.log(usuarioActivo)
                console.log(usuarioActivo.tasks)
                usuarios[usuarioActivo.id].tasks = [...usuarioActivo.tasks]
                console.log(usuarios)
                localStorage.setItem('profile', JSON.stringify(usuarios))
                setIsCheck (true)
              }}
              onDelete={()=>{
                usuarioActivo.tasks.splice(index, 1)
                let nose = [...usuarioActivo.tasks]
                setToDos(nose)
                let userSelect = usuarios.find((a)=>(a.nombre === usuarioActivo.nombre))
                usuarios[userSelect.id].tasks = [...usuarioActivo.tasks]
                localStorage.setItem('profile', JSON.stringify(usuarios))
              }}
            />
          ))}
        </TodoList>

        <CreateTodo Tareas={usuarioActivo.tasks} setToDos={setToDos} usuariosArray={usuarios} usuario={usuarioActivo}/>
      </div>
    </>
  );
}

export default App;
