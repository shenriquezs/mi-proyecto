import React, { useRef } from 'react'

const FormNoContralados = () => {

const formulario = useRef(null);

const handleSubmit= e=>{
  e.preventDefault();
  const datos = new FormData(formulario.current);

  //console.log(...datos.entries());
  const objetodatos = Object.fromEntries([...datos.entries()]);
  console.log(objetodatos);

  const {todoDescripcion, todoEstado, todoName} =objetodatos;
  if(!todoDescripcion.trim()){
    console.log("noooooooooooo, está vació");
    return;
  }


}

  
  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Ingrese Todo"
        name="todoName"
        className="form-control mb-2"
        defaultValue="Tarea 1"
        />  
        <textarea 
        name="todoDescripcion" 
        className="form-control mb-2"
        placeholder="Ingrese descripción de todo"
        defaultValue="Descripcion"
        />

        <select 
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="pendiente"
         >

          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
          
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>     
     
     </>
  
  )
}

export default FormNoContralados
