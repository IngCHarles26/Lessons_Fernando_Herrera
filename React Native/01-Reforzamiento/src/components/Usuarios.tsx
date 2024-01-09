import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqres";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(()=>{
    // llamado al API
    reqResApi.get<ReqResListado>('/users')
      .then(res => console.log(res.data.data))
      .catch(console.log)
  },[])

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

        </tbody>
      </table>

    </>
  );
}

export default Usuarios;