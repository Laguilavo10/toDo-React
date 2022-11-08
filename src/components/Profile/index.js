import React from "react";

export function Profile(props) {
    console.log(props)
  return (
    <>
    <div className="profile icons">
      <div className="pic-profile"><img src={props.picture} alt="" /></div>
      <div className="user-profile">{props.name}</div>
    </div>
    </>
  );
}
