import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqres";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(0);

  useEffect(()=>{
    // llamado al API
    cargarUsuarios(1);
  },[])
  
  const cargarUsuarios = async (input:number) => {
    let page = paginaRef.current;
      
    const resp = await reqResApi.get<ReqResListado>('/users',{
      params:{
        page: paginaRef.current
      }
    });
    setUsuarios(resp.data.data)
  }

  return{
    usuarios,
    cargarUsuarios
  }
}