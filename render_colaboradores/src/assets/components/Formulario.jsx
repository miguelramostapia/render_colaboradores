import { useState } from 'react'
import '../ReactCss/FormularioCss.css'


function Formulario({setError, setExito,BaseColaboradores, setColaboradores, colaboradoresForList, setColaboradoresForList}) {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad,setEdad] = useState(0);
    const [cargo,setCargo] = useState('');
    const [telefono,setTelefono] = useState('');
 
    const handleNombreChange = (event)=>{setNombre(event.target.value);};
    const handleEmailChange = (event)=>{setEmail(event.target.value);};
    const handleEdad = (event)=>{setEdad(event.target.value);};
    const handleCargo = (event)=>{setCargo(event.target.value);};
    const handleTelefono = (event)=>{setTelefono(event.target.value);};

    const validarInput = (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault();
        const regexParaNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
        const regexParacorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexParaTelefono = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
        const regexParalaEdad = /^([0-9])*$/ ///\b(^(durante|hace|por)\s)([0-9]{1,3}[\s]años)\b/

        setError(0);setExito(0);
        if(nombre ===''|| email ==='' || edad ==='' || cargo === '' || telefono === ''){setError(1);return;}

        if(!regexParaNombre.test(nombre)){setError(2);return;}

        if(!regexParacorreo.test(email)){setError(3);return;}

        if(!regexParalaEdad.test(edad)){setError(4);return;}

        if(!regexParaNombre.test(cargo)){setError(5);return;}//error para cargo codigo error 5

        if(!regexParaTelefono.test(telefono)){setError(6);return;}
        setNombre('');setEmail('');setEdad(0);setCargo('');setTelefono('');
        setExito(1);
        setColaboradores([...BaseColaboradores, {nombre,email,edad,cargo,telefono}])
        setColaboradoresForList([...colaboradoresForList, {nombre,email,edad,cargo,telefono}])
        
        return;
    }
  
  return (
    <div>
        <h2>Agregar Colaborador</h2>

        <form className='FormCss' onSubmit={validarInput}>

            <input type="text" name="nombre" onChange={handleNombreChange} placeholder='Ingrese Nombre'/>
            <input type="text" name="email" onChange={handleEmailChange} placeholder='Ingrese correo@dominio.cl'/>
            <input type="text" name="edad" onChange={handleEdad} placeholder='Ingrese edad'/>
            <input type="text" name="cargo" onChange={handleCargo} placeholder='Ingrese cargo' />
            <input type="text" name="telefono" onChange={handleTelefono} placeholder='Ingrese telefono'/>


            <button type="submit">Agregar Colaborador/a</button>
        </form>
    </div>
  )
}

export default Formulario