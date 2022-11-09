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
  {
    id:1,
    nombre: "Visitante",
    picture:
      "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000",
    tasks: [
      {
        text: "Crear logica del Modal de creacion de TODOsxx",
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
    id:2,
    nombre: "Rocio Ruiz",
    picture:
      "https://img.freepik.com/vector-premium/madre-feliz-dibujos-animados-abrazando-su-hijo_29190-4562.jpg?w=2000",
    tasks: [
      {
        text: "Querer al hijo",
        completed: false,
        fechaCreacion: {
          dia: "10",
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
  const [isCheck, setIsCheck] = useState(usuarioActivo.completed);

  let toDoArray = [];

  if (buscarTodo === "") {
    toDoArray = toDos;
  } else {
    let buscarTodoMinusculas = buscarTodo.toLowerCase();
    toDoArray = usuarioActivo.tasks.filter((a) =>
      a.text.toLowerCase().includes(buscarTodoMinusculas)
    );
  }

  return (
    <>
      <div className="profiles-container">
        {
        
        users.map((usuario) => {
          // console.log(usuario)
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
        <CreateProfile />
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
                // console.log(usuarios)
                !isCheck ? setIsCheck(true) : setIsCheck(false);
                a.completed ? (a.completed = false) : (a.completed = true);//sirve de toggle para poder tachar y destachar el toDo
                let userSelect = usuarios.find((a)=>(a.nombre === usuarioActivo.nombre))
                usuarios[userSelect.id].tasks = [...toDoArray]
                localStorage.setItem('profile', JSON.stringify(usuarios))
              }}
              onDelete={()=>{
                usuarioActivo.tasks.splice(index, 1)
                let nose = [...usuarioActivo.tasks]
                setToDos(nose)
                let userSelect = usuarios.find((a)=>(a.nombre === usuarioActivo.nombre))
                usuarios[userSelect.id].tasks = [...toDoArray]
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
