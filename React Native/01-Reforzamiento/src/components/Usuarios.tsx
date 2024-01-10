import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqres";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { useUsuarios } from "../hooks/useUsuarios";

function Usuarios() {
  
  const {usuarios, cargarUsuarios} = useUsuarios();

  const renderitem = (user:Usuario) => {
    // console.log(user)
    return (
      <tr key={'key_'+user.id }>
        <td>
          <img src={user.avatar} alt="avatar image" style={{width: 35, borderRadius: 100}}/>
        </td>
        <td>{user.first_name} {user.last_name}</td>
        <td>{user.email}</td>
      </tr>
    )
  }


  return ( 
    <>
      <h3>Usuarios</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(user=>renderitem(user))}
        </tbody>
      </table>

      <button
        className="btn btn-primary"
        onClick={()=>cargarUsuarios(-1)}
      >
        Anterior
      </button>

      <button
        className="btn btn-primary"
        onClick={()=>cargarUsuarios(1)}
        >
        Siguiente
      </button>

    </>
  );
}

export default Usuarios;