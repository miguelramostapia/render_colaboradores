import { useState } from 'react'
import '../ReactCss/FormularioCss.css'


function Formulario({setError, setExito, colaboradores, setColaboradores, colaboradoresForList, setColaboradoresForList}) {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad,setEdad] = useState('');
    const [cargo,setCargo] = useState('');
    const [telefono,setTelefono] = useState('+569 ');

    const ultimoColaborador = colaboradoresForList[colaboradoresForList.length - 1];
    const idUltimoColaborador = ultimoColaborador ? ultimoColaborador.id : null;
    console.log(idUltimoColaborador)
    console.log(colaboradoresForList)

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
        if(nombre.length === 0 && email.length === 0 && edad.length === 0 && cargo.length === 0 && telefono.length === 0){return setError(1)}

        else if(!regexParaNombre.test(nombre)){return setError(2)}

        else if(!regexParacorreo.test(email)){return setError(3)}

        else if(!regexParalaEdad.test(edad)){return setError(4)}

        else if(!regexParaNombre.test(cargo)){return setError(5)}//error para cargo codigo error 5

        else if(!regexParaTelefono.test(telefono)){return setError(6)}

        setExito(1);

        const nuevoColaborador = {
            id: idUltimoColaborador+1,
            nombre,
            email,
            edad,
            cargo,
            telefono
        };

        // Actualizar listas colaboradores
        setColaboradores([...colaboradores, nuevoColaborador]);
        setColaboradoresForList([...colaboradoresForList, nuevoColaborador]);
        //setColaboradoresForList([...BaseColaboradores, {id:idUltimoColaborador+1, nombre,email,edad,cargo,telefono}]);

        // Limpiar Formulario
        setNombre('');
        setEmail('');
        setEdad('');
        setCargo('');
        setTelefono('+569 ');

    }

  return (
    <div>
        <h2>Agregar Colaborador</h2>

        <form className='FormCss' onSubmit={validarInput}>

            <input type="text" value = {nombre} name="nombre" onChange={handleNombreChange} placeholder='Ingresar Nombre'/>
            <input type="email" value = {email} name="email" onChange={handleEmailChange} placeholder='Ingresar correo@dominio.cl'/>
            <input type="text" value = {edad} name="edad" onChange={handleEdad} placeholder='Ingresar edad'/>
            <input type="text" value = {cargo} name="cargo" onChange={handleCargo} placeholder='Ingresar cargo' />
            <input type="text" value = {telefono} name="telefono" onChange={handleTelefono} placeholder='Ingresar telefono'/>


            <button type="submit">Agregar Colaborador/a</button>
        </form>
    </div>
  )
}

export default Formulario