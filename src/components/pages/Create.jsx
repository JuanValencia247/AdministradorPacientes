import React, { useEffect, useState } from 'react'
import { Error } from '../layouts/Error';
export const Create = ({ setPaciente, paciente, cliente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintoma, setSintoma] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(cliente.length > 0)) {
      setNombre(cliente.nombre);
      setPropietario(cliente.propietario);
      setEmail(cliente.email);
      setFecha(cliente.fecha);
      setSintoma(cliente.sintoma);

    }
  }, [cliente])

  // Generar id
  const generarId = () => {
    const ramdon = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return ramdon + fecha;
  }
  const guardarPropietario = (e) => {
    e.preventDefault()

    // Validacion de campos
    if ([nombre, propietario, email, fecha, sintoma].includes('')) {
      setError(true);
      return;
    }

    setError(false)

    //Objeto de  Pacientes
    const objetoPacienentes = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma
      
    }

    if(cliente.id){
      //Editando Registro
      objetoPacienentes.id = cliente.id;
      const clientesActualizados = paciente.map( p => p.id === cliente.id ? objetoPacienentes : p)
      setPaciente(clientesActualizados)

    }else{
      // Nuevo Registro
      objetoPacienentes.id = generarId()
      setPaciente([...paciente, objetoPacienentes])
    }

    // Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintoma('');
  }
  return (
    <div className='md:w-1/2 lg:w-2/5 '>

      <h2 className='font-black text-2xl text-center mb-8'>Seguimiento Pacientes</h2>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-5' onSubmit={guardarPropietario}>
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="mascota">Nombre Mascota</label>
          <input className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' value={nombre} onChange={e => setNombre(e.target.value)} id='mascota' type="text" placeholder='Nombre de la Mascota' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre Propietario</label>
          <input className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' value={propietario} onChange={e => setPropietario(e.target.value)} id='propietario' type="text" placeholder='Nombre del Propietario' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
          <input className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' value={email} onChange={e => setEmail(e.target.value)} id='email' type="email" placeholder='Ingrese el email' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="fecha">Alta</label>
          <input className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' value={fecha} onChange={e => setFecha(e.target.value)} id='fecha' type="date" />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="sintoma">Sintoma</label>
          <textarea className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' value={sintoma} onChange={e => setSintoma(e.target.value)} id='sintoma' placeholder='Describe el sintoma' />
        </div>

        <input 
        type='submit' 
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg' 
        value={cliente.id ? 'Editar Paciente' : 'Guardar Paciente'}
           />
      </form>
    </div>
  )
}
