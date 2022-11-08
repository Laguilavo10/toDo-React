import React from "react";
// import { usuarios } from "../../App";

export function CreateProfile() {
  // const crearUsuario = () => {
  //   usuarios.push({
  //     nombre: "Nicolas Forero",
  //     picture:
  //       "https://upload.wikimedia.org/wikipedia/commons/2/24/%C3%81lvaro_Uribe_%28cropped%29.jpg",
  //     tasks: [],
  //   });
  //   console.log(usuarios);
  // };

  return (
    <div
      className="new-profile icons"
      // onClick={() => {
      //   crearUsuario();
      // }}
    >
      <img
        src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png"
        alt=""
      />
      {/* <span>Crear Usuario</span> */}
    </div>
  );
}
