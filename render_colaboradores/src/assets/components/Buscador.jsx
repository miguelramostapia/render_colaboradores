import '../ReactCss/BuscadorCss.css'
import { useState } from "react";


function Buscador({colaboradores, colaboradoresForList, setColaboradoresForList}){
    const [searchValue, setSearchValue] = useState("")
    //const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    /*function listaFiltrada(array, valor){

        if (!valor) return colaboradores;

        return array.filter((elemento) =>
             elemento.nombre.toLowerCase().includes(valor.toString().toLowerCase())||
             elemento.correo.toLowerCase().includes(valor.toString().toLowerCase())||
             elemento.edad.toLowerCase().includes(valor.toString().toLowerCase())||
             elemento.cargo.toLowerCase().includes(valor.toString().toLowerCase())||
             elemento.telefono.toLowerCase().includes(valor.toString().toLowerCase())
         );
    }*/

    function listaFiltrada(array, valor) {

    if (!valor) return colaboradores;

      return array.filter((elemento) => {
        // Asegúrate de que el valor existe y es un string antes de llamar a métodos de string
        const nombre = elemento.nombre ? elemento.nombre.toLowerCase().includes(valor.toLowerCase()) : false;
        const correo = elemento.correo ? elemento.correo.toLowerCase().includes(valor.toLowerCase()) : false;
        const edad = elemento.edad ? elemento.edad.toString().toLowerCase().includes(valor.toLowerCase()) : false;
        const cargo = elemento.cargo ? elemento.cargo.toLowerCase().includes(valor.toLowerCase()) : false;
        const telefono = elemento.telefono ? elemento.telefono.toLowerCase().includes(valor.toLowerCase()) : false;

        return nombre || correo || edad || cargo || telefono;
      });
    }


    function handleSearch(e){

        const valor =e.target.value;
        setSearchValue(valor);

       // Filtrar solo cuando sea necesario (puede ser aquí o en una acción de "submit" para el formulario)
        const resultados = listaFiltrada(colaboradoresForList,valor);
        setColaboradoresForList(resultados);
    }

        //e.preventDefault();
        //setSearchValue(e.target.value)

        /*if(valor.length !== 0){
            const resultados = listaFiltrada(colaboradoresForList, valor);
            setColaboradoresForList(resultados)
        }
        else {
            /*listaFiltrada(colaboradoresForList,e.target.value)
            const resultados = listaFiltrada(colaboradoresForList,e.target.value)

            setColaboradoresForList(resultados)
            console.log(colaboradores, 'Buscador')
            setColaboradoresForList(colaboradores);
        }

    }*/

    return (

        <div className='BuscadorContainer'>
            <h1>Listas de Colaboradores</h1>
            <div className='Container2'>
                <input type="text" placeholder="Buscar un colaborador" value={searchValue} onChange={handleSearch}/>

            </div>

        </div>
  

    );
  };
  
  export default Buscador;


 