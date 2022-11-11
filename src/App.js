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
  // {
  //   default:false,
  //   nombre: "Andres Laguilavo",
  //   picture:
  //     "https://uploads-ssl.webflow.com/6246bd29cda6cb50b4a9920e/62a060a9be0c5462c8f1a0bf_istockphoto-1352857051-612x612-1.jpeg",
  //   tasks: [
  //     {
  //       text: "dasbdjkjshdjksah",
  //       completed: false,
  //       fechaCreacion: {
  //         dia: "10",
  //         mes: "Nov",
  //         año: "2022",
  //       },
  //     },
  //   ],
  // },
  {
    default:true,
    nombre: "Visitante",
    picture: "https://img.icons8.com/ios-filled/50/null/guest-male--v1.png",
    tasks: [
      // {
      //   text: "Guardar los ToDos y los perfile en el LocalStorage",
      //   completed: false,
      //   fechaCreacion: {
      //     dia: "8",
      //     mes: "Nov",
      //     año: "2022",
      //   },
      // },
    ],
  },
];


function App() {

  let usersLS = JSON.parse(localStorage.getItem('usuarios'))
  
  if (!usersLS) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    usersLS = JSON.parse(localStorage.getItem('usuarios'))
  }
  
  const [usuarioActivo, setUsuarioActivo] = useState(
    usersLS.find((a)=>(a.default)) || usersLS[0]);

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
  return (
    <>
      <div className="profiles-container">
        {usersLS.map((usuario) => {
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
        <CreateProfile usersLS={usersLS} setUsuarioActivo={setUsuarioActivo} setToDos={setToDos}/>
      </div>

      <div className="todo-container">
        <TodoCounter user={usuarioActivo} usersLS={usersLS}/>

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
                !isCheck ? setIsCheck(true) : setIsCheck(false);
                a.completed ? (a.completed = false) : (a.completed = true); //sirve de toggle para poder tachar y destachar el toDo
                let i = usersLS.findIndex((a)=>(a.nombre === usuarioActivo.nombre))
                usersLS[i].tasks = [...usuarioActivo.tasks]
                localStorage.setItem('usuarios', JSON.stringify(usersLS))
              }}
              onDelete={()=>{
                usuarioActivo.tasks.splice(index, 1)
                let toDoEdited = [...usuarioActivo.tasks]

                let i = usersLS.findIndex((a)=>(a.nombre === usuarioActivo.nombre))
                usersLS[i].tasks = [...toDoEdited]
                setToDos(toDoEdited)
                localStorage.setItem('usuarios', JSON.stringify(usersLS))
              }}
            />
          ))}
        </TodoList>

        <CreateTodo usuarioActivo={usuarioActivo} tasks={usuarioActivo.tasks} setToDos={setToDos} users={usersLS}/>
      </div>
    </>
  );
}

export default App;
