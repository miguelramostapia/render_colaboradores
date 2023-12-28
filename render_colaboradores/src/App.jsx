import { useState } from 'react'

import './App.css'
import { BaseColaboradores } from './assets/components/BaseColaboradores'
import Listado from './assets/components/Listado';
import Formulario from './assets/components/Formulario';
import Alerta from './assets/components/Alerta';
import Buscador from './assets/components/Buscador';

{/*Import Bootstrap*/}
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresForList, setColaboradoresForList]=useState(BaseColaboradores);
  const [error, setError]=useState(0);
  const [exito, setExito]=useState(0);

  return (
    <>

        <Buscador colaboradores = {colaboradores} colaboradoresForList = {colaboradoresForList} setColaboradoresForList = {setColaboradoresForList} />

        <Listado colaboradoresForList={colaboradoresForList} />

        <Formulario setError={setError} setExito={setExito}
                      colaboradores = {colaboradores} setColaboradores = {setColaboradores}
                      colaboradoresForList= {colaboradoresForList} setColaboradoresForList = {setColaboradoresForList}/>

        <Alerta error={error} exito={exito}/>
    </>

  );
}

export default App


