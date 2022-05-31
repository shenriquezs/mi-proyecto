import React, { useState } from 'react'

const Formulario = () => {

const [todo,setTodo ] = useState({

    todoName:'',
    todoDescripcion:'',
    todoEstado: 'pendiente',
    todoCheck:false
}); 

const[error, setError] =useState(false);

const handleChange= e =>{
    console.log(e.target.value);
    console.log(e.target.name);

     setTodo({
         ...todo,
         [e.target.name]: e.target.type ==="checkbox" ? e.target.checked : e.target.value
     });

    // setTodo((old) =>({
    //     ...old,
    //     [e.target.name]: e.target.value

    // }))
}


const handleSubmit = e => {
    e.preventDefault();

    const {todoName,todoDescripcion}= todo;
    if(!todoName.trim() || !todoDescripcion.trim()){

        setError(true);
    return;    
    }
    setError(false);

    console.log(todo);
};


const PintarError = () =>(

    <div className="alert alert-danger"> Campos obligatorios</div>
)

  return (
    <>
        <h2>Formulario Controlado</h2>

        {

            error && <PintarError /> 
        }

        
      <form  onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Ingrese Todo"
        name="todoName"
        className="form-control mb-2"
        defaultValue="Tarea 1"
        onChange={handleChange}
        value={todo.todoName}
        />  
        <textarea 
        name="todoDescripcion" 
        className="form-control mb-2"
        placeholder="Ingrese descripción de todo"
        defaultValue="Descripcion"
        onChange={handleChange}
        value={todo.todoDescripcion}
        />

        <select 
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="pendiente"
          onChange={handleChange}
          value={todo.todoEstado}
         >

          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
          
        </select>

        <div className="form-check">
            <input 
                name="todoCheck"
                id="flexCheckDefault"
                className="form-check-input" 
                type="checkbox" 
                checked={todo.todoCheck} 
                onChange={handleChange}
            />
            <label 
                className="form-check-label" 
                htmlFor="flexCheckDefault">
                Dar prioridad
            </label>
        </div>

        <button className="btn btn-primary" type='submit'>Agregar</button>
      </form>  
      
    </>
  )
}

export default Formulario
