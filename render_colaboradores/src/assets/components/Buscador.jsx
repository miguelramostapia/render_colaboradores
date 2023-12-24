
import { useState } from "react";


function Buscador({BaseColaboradores, colaboradoresForList,setColaboradoresForList}){
    const [searchValue, setSearchValue] = useState("")
    //const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
    function listaFiltrada(BaseColaboradores,valor){
        return BaseColaboradores.filter((elemento)=> elemento.nombre.toLowerCase().includes(valor.toString().toLowerCase())||
                                                     elemento.correo.toLowerCase().includes(valor.toString().toLowerCase())||
                                                     elemento.edad.toLowerCase().includes(valor.toString().toLowerCase())||
                                                     elemento.cargo.toLowerCase().includes(valor.toString().toLowerCase())||
                                                     elemento.telefono.toLowerCase().includes(valor.toString().toLowerCase())
         );
    }
    function handleSearch(e){
        setSearchValue(e.target.value)
        if(searchValue === ""){
            setColaboradoresForList(BaseColaboradores)
        }
        const resultados = listaFiltrada(BaseColaboradores,e.target.value)
        setColaboradoresForList(resultados)
        return
    }

    return (
      <>
            <div>
                <input type="text" placeholder="Buscar..." value={searchValue} onChange={handleSearch}/>
                <button>Buscar</button>

            </div>
  
      </>
    );
  };
  
  export default Buscador;


 