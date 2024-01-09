import { useState } from "react";

function Contador() {
  //de esta manera se le indica al useState el tipo de valor que tien
  const [valor, setValor] = useState<number>(0);

  const acumular = (input:number) => {
    setValor(valor + input)
  }


  return ( 
    <>
      <h3>Contador: <small>{valor}</small></h3>
      <button className="btn btn-primary" onClick={()=>acumular(1)}>+1</button>
      <button className="btn btn-primary" onClick={()=>acumular(-1)}>-1</button>
    </>
  );
}

export default Contador;