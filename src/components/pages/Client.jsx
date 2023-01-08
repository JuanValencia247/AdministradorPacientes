export const Client = ({ paciente, setCliente , eliminarPaciente }) => {

  const {id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar el paciente?');
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (

    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: <span className='font-normal normal-case'>{paciente.nombre}</span> </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: <span className='font-normal normal-case'>{paciente.propietario}</span> </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email: <span className='font-normal normal-case'>{paciente.email}</span> </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Alta: <span className='font-normal normal-case'>{paciente.fecha}</span> </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintoma: <span className='font-normal normal-case'>{paciente.sintoma}</span> </p>
      <div className="flex justify-between mt-5">
        <button className="bg-indigo-700 py-2 px-10 text-white font-bold uppercase rounded-lg hover:bg-indigo-800 transition-colors"
          onClick={() => setCliente(paciente)}>Editar</button>
        <button className="bg-red-700 py-2 px-10 text-white font-bold uppercase rounded-lg hover:bg-red-800 transition-colors"
        onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  )
}
