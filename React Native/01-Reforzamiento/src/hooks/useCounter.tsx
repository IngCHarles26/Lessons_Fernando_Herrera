import { useState } from "react";

function useCounter(inicial:number = 10) {
  const [valor, setValor] = useState(inicial);

  const acumular = (numero:number)=>{
    setValor(valor+numero)
  }

  return{
    valor,
    acumular,
  }
}

export default useCounter;