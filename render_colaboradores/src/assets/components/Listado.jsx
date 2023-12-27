import { useState } from 'react'
import '../ReactCss/ListadoCss.css'
import Table from 'react-bootstrap/Table';

function Listado({colaboradoresForList}){
console.log(colaboradoresForList, 'listado')

    return (


        <div className='containerListado'>


            <Table striped bordered hover>
               <thead className='TheadCss'>
                <tr>
                    <th>NOMBRE</th>
                    <th>CORREO</th>
                    <th>EDAD</th>
                    <th>CARGO</th>
                    <th>TELEFONO</th>
                </tr>
                </thead>
                <tbody className='TbodyCss'>
                        {colaboradoresForList.map((colaborador, index) => (
                        <tr key={index}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
  };
  
  export default Listado;

  