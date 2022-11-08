import React, {useState}from "react";
import "./index.css";
import { CreateTodo } from "./components/CreateTodo";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { CreateProfile } from "./components/CreateProfile";
import { Profile } from "./components/Profile";

// console.log(todo)
export let todo = [
  { text: "Guardar las etiquetas en el LocalStorage", completed: true },

  { text: "Hacer el boton de eliminar Tarea", completed: false },

  { text: "Terminar el generador de contraseñas", completed: false },

  { text: "Revisar Logical Nullish Assignment", completed: false },
];

let usuarios = [
  {
    nombre: "Andres Laguilavo",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5p81IgpgYHIH4d50ZsVISnCLulPACHzyAPu1DGkMIQ&s",
  },
  {
    nombre: "Rocio Ruiz",
    picture:
      "https://img.freepik.com/vector-premium/madre-feliz-dibujos-animados-abrazando-su-hijo_29190-4562.jpg?w=2000",
  },
  {
    nombre: "Visitante",
    picture:
      "https://img.icons8.com/ios-filled/50/null/guest-male--v1.png",
  },
];

function App() {  
  const [usuarioActivo, setUsuarioActivo] = useState(usuarios.find((a)=> a.nombre === 'Visitante'))

  // export setUsuarioActivo 
  
  return (
    <>
      <div className="profiles-container">
        {usuarios.map((a) => {
          return <Profile key={a.nombre} name={a.nombre} picture={a.picture}  onClick={() =>console.log('dsjak')}/>;
        })}
        <CreateProfile />
      </div>

      <TodoCounter user={usuarioActivo}/>

      <TodoSearch />

      <TodoList>
        {todo.map((a) => (
          <TodoItem key={a.text} text={a.text} completed={a.completed} />
        ))}
      </TodoList>

      <CreateTodo />
    </>
  );
}

export default App;
