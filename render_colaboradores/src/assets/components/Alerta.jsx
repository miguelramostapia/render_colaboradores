
import { useState } from 'react'


function Alert({error,exito}) {
  
  return (
    <>
          <div>
              {error == 0 && exito == 0}
              {error == 1 && <button variant='danger' size='lg' disabled><p className='error'>Todos los datos deben ser ingresados</p></button>}
              {error == 2 && <button variant='danger' size='lg' disabled ><p className='error'>Nombre debe contener solo letras</p></button>}
              {error == 3 && <button variant='danger' size='lg' disabled><p className='error'>Correo debe ser nombre@buzon.com</p></button>}
              {error == 4 && <button variant='danger' size='lg' disabled><p className='error'>Edad debe un número</p></button>}
              {error == 5 && <button variant='danger' size='lg' disabled><p className='error'>Cargo debe ser un nombre</p></button>}
              {error == 6 && <button variant='danger' size='lg' disabled><p className='error'>Telefono mal ingresado +56 9 XXXX XXXX</p></button>}
              {exito == 1 && <button variant='success' size='lg' disabled ><p className='exito'>Felicitaciones Registro Exitoso</p></button>}
          </div>

    </>
  )
}

export default Alert