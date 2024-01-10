import { useState } from "react";



export const useForm = <T extends Object>(input: T) => {
  const [formularios, setFormularios] = useState(input);

  const onChange = ( value:string, campo:keyof T ) => {
    setFormularios({
      ...formularios,
      [campo]:value,
    }
    )
  }

  return{
    onChange,
    formularios
  }
}