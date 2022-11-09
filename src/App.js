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
    nombre: "Rocio Ruiz",
    picture:
      "https://img.freepik.com/vector-premium/madre-feliz-dibujos-animados-abrazando-su-hijo_29190-4562.jpg?w=2000",
    tasks: [
      {
        text: "Guardar las etiquetas en el LocalStorage",
        completed: true,
        fechaCreacion: {
          dia: "20",
          mes: "Jul",
          año: "2022",
        },
      },
    ],
  },
  {
    nombre: "Random",
    picture: "https://img.icons8.com/ios-filled/50/null/guest-male--v1.png",
    tasks: [
      {
        text: "Guardar las etiquetas en el LocalStorage",
        completed: false,
        fechaCreacion: {
          dia: "18",
          mes: "Oct",
          año: "2022",
        },
      },

      {
        text: "Hacer el boton de eliminar Tarea",
        completed: false,
        fechaCreacion: {
          dia: "23",
          mes: "Sep",
          año: "2022",
        },
      },

      {
        text: "Terminar el generador de contraseñas",
        completed: false,
        fechaCreacion: {
          dia: "30",
          mes: "Ene",
          año: "2022",
        },
      },

      {
        text: "Revisar Logical Nullish Assignment",
        completed: false,
        fechaCreacion: {
          dia: "17",
          mes: "Jul",
          año: "2022",
        },
      },
    ],
  },
];

//* sive para poder registrar la hora en la que se crea el todo

// let today = new Date();

// let now = today.toLocaleDateString('en-ES');

// let [mes, dia, año] = now.split('/')

// mes = numeroAMes(mes)

// function numeroAMes(numero) {
//   let meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
//   return meses[numero-1]
// }

function App() {
  const [usuarioActivo, setUsuarioActivo] = useState(
    usuarios.find((a) => a.nombre === "Andres Laguilavo")
  );

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

  console.log(usuarioActivo.tasks);
  return (
    <>
      <div className="profiles-container">
        {usuarios.map((usuario) => {
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
              text={a.text}
              completed={a.completed}
              fechaCreacion={a.fechaCreacion}
              onChecked={() => {
                !isCheck ? setIsCheck(true) : setIsCheck(false);
                a.completed ? (a.completed = false) : (a.completed = true); //sirve de toggle para poder tachar y destachar el toDo
              }}
            />
          ))}
        </TodoList>

        <CreateTodo Tareas={usuarioActivo.tasks} setToDos={setToDos} />
      </div>
    </>
  );
}

export default App;
