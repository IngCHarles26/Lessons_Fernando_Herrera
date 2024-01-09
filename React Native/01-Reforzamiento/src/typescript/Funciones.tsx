function Funciones() {
  //De esta manera se le indica el tipo de valor que tiene que regresar una funcion
  const sumar = ( a:number, b:number ):number => {
    return a + b
  }

  return (
    <>
      <h3>Funciones</h3>
      <h5>El resultado es:{sumar(2,3)}</h5>
    </>
  );
}

export default Funciones;