import { useState } from "react";
import { useForm } from "../hooks/useForm";

function Formularios() {
  const {formularios,onChange} = useForm({
    email: 'test@test.com',
    password: '123456'
  });

  return ( 
    <>
      <h3>Formularios</h3>
      <input type="text" 
        className="form-control" 
        placeholder="Email" 
        value={formularios.email} 
        onChange={({target})=>onChange(target.value,'email')}/>
      <input type="text" 
        className="form-control mt-2 mb-2" 
        placeholder="Password" 
        value={formularios.password} 
        onChange={({target})=>onChange(target.value,'password')}/>
    </>
  );
}

export default Formularios;