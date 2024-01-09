//INTERFACE
//type: 
//class: crear instancias 
//interface: es mas facil de expandir que los types, es una manera de dar una forma a un objeto, para que este tenga las propiedades definidas y los valores para esas propiedades

interface Direccion{
  pais: string,
  casaNo: number,
}

interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: Direccion,
}


function ObjetosLietrales() {
  const persona: Persona = {
    nombreCompleto: 'Carlos',
    edad: 28,
    direccion:{
      pais: 'Peru',
      casaNo: 301,
    }
  };


  return ( 
    <>
      <h3>Objetos Lieterales</h3>
      <code>
        <pre>
        { JSON.stringify(persona,null,2)}
        </pre>
      </code>
    </> 
  );
}

export default ObjetosLietrales;