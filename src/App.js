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
    tasks: [],
  },
  {
    nombre: "Rocio Ruiz",
    picture:
      "https://img.freepik.com/vector-premium/madre-feliz-dibujos-animados-abrazando-su-hijo_29190-4562.jpg?w=2000",
    tasks: [
      { text: "Guardar las etiquetas en el LocalStorage", completed: true },
    ],
  },
  {
    nombre: "Random",
    picture: "https://img.icons8.com/ios-filled/50/null/guest-male--v1.png",
    tasks: [
      { text: "Guardar las etiquetas en el LocalStorage", completed: true },

      { text: "Hacer el boton de eliminar Tarea", completed: false },

      { text: "Terminar el generador de contraseñas", completed: false },

      { text: "Revisar Logical Nullish Assignment", completed: false },
    ],
  },
];

function App() {
  const [usuarioActivo, setUsuarioActivo] = useState(
    usuarios.find((a) => a.nombre === "Random")
  );
  const cambiarUsuario = (user) => {
    setUsuarioActivo(user);
  };

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
                cambiarUsuario(usuario);
              }}
            />
          );
        })}
        <CreateProfile />
      </div>

      <TodoCounter user={usuarioActivo} />

      <TodoSearch />

      <TodoList>
        {usuarioActivo.tasks.map((a) => (
          <TodoItem key={a.text} text={a.text} completed={a.completed} />
        ))}
      </TodoList>

      <CreateTodo />
    </>
  );
}

export default App;
