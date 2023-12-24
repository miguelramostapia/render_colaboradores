import { useState } from 'react'

function Listado({colaboradoresForList}){


    return (
        <>
                <div className="container">
                    <div className="col-md-8">
                    <h4>Listas de Colaboradores</h4>

                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>CORREO</th>
                        <th>EDAD</th>
                        <th>CARGO</th>
                        <th>TELEFONO</th>
                    </tr>
                    </thead>
                    <tbody>
                            {colaboradoresForList.map((colaborador) => (
                            <tr key={colaborador.id}>
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.correo}</td>
                                <td>{colaborador.edad}</td>
                                <td>{colaborador.cargo}</td>
                                <td>{colaborador.telefono}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
        </>
    );
  };
  
  export default Listado;

  