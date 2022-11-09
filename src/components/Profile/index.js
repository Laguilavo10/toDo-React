import React from "react";

export function Profile(props) {
  return (
    <>
    <div className='profile icons' onClick={props.onSelect}>
      <div className={`pic-profile ${props.name === props.userActive.nombre && 'user-active'}`}><img src={props.picture} alt="" /></div>
      <div className="user-profile">{props.name}</div>
    </div>
    </>
  );
}
