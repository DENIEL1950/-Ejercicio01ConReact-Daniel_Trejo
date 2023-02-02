//import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista';
import {datos} from './components/Asignatura';
import {useState} from 'react';
import ListaAdd from './components/ListaAdd';

function App() {
  const [data, setData] = useState(datos);

  const eliminarClick = (item) =>{
    console.log("eliminado asignatura", item.asignatura);
    if(window.confirm("Confirme que desee eliminar esta asignatura? "))
    {
      const NuevaLista = data.filter( asignatura => {
        return asignatura.asignatura!==item.asignatura;
      });
      //console.log("Nueva lista", NuevaListaTareas);
      setData(NuevaLista);
    };
 
  }
  const guardarAsignatura = (asignatura) =>{
    console.log("Esta es la nueva asignatura", asignatura);
    setData([...data,asignatura]);
  }
  return (
    <div className="App">
        <h1><b>Trabajo en  REACT</b></h1>
        <h2>Hola me llamo Daniel Trejo</h2>
        <h3>Estas son las asignaturas en la universidad que estoy estudiando:</h3>
        
        <div className='row'>
        <div className='col-2'>
           <ListaAdd guardarAsignatura= {guardarAsignatura}/>
        </div>
        <div className='col-10'>
            <Lista datos={data} eliminarClick= {eliminarClick} />
        </div>
        
        </div>
      
    </div>
  );
}

export default App;
