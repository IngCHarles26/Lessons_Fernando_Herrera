function TiposBasicos(){
  let nombre: string  = 'Fernando'; // asi se le designa el tipo de variable al momento de declararla
  const edad: number = 28;
  const estaActivo: boolean = true;
  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua']; //asi se indica un arreglo dependiendo del tipo

  return(
    <div>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo}
      <br />
      {poderes.join(', ')}
    </div>
  )
}

export default TiposBasicos;