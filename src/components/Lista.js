import React from "react";
//import { datos } from "./Asignaturas";

function Lista(props) {
 
  //const [listadoAsignaturas, setListadoAsignaturas] = useState(datos);

  console.log("Lista de asignaturas");

 
  const eliminarHandler = (item) =>{
    
    props.eliminarClick(item);
      
  }
    
  

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          {props.datos.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card mt-4">
                  <div className="card-header carta-head">
                    <h3>{item.asignatura}</h3>
                  </div>
                  
                  <div className="card-body carta-body">
                    <p><strong>NRC: {item.nrc}</strong></p>
                    <p>CREDITO: {item.credito}</p>
                    <p>PARCIAL #1: {item.parcial1}</p>
                    <p>PARCIAL #2: {item.parcial2}</p>
                  </div>

                  <div className="card-footer carta-foot">
                    <p><button className= "btn btn-danger" onClick={()=> eliminarHandler(item)}>Eliminar</button></p>
                    
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lista;