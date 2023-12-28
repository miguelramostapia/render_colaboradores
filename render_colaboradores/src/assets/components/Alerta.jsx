import Button from 'react-bootstrap/Button';
import { useState } from 'react'


function Alert({error,exito}) {
  
  return (

      <div>
          {error === 0 && exito === 0}
          {error === 1 && <Button variant='danger' size='lg' disabled> Todos los datos deben ser ingresados </Button>}
          {error === 2 && <Button variant='danger' size='lg' disabled> Nombre debe contener solo letras </Button>}
          {error === 3 && <Button variant='danger' size='lg' disabled> Correo debe ser nombre@buzon.com </Button>}
          {error === 4 && <Button variant='danger' size='lg' disabled> Edad debe ser un número </Button>}
          {error === 5 && <Button variant='danger' size='lg' disabled> Falta agregar cargo </Button>}
          {error === 6 && <Button variant='danger' size='lg' disabled> Telefono mal ingresado +56 9 XXXX XXXX </Button>}
          {exito === 1 && <Button variant='success' size='lg' disabled> Felicitaciones Registro Exitoso </Button>}
      </div>


  )
}

export default Alert