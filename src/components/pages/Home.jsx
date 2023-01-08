import React, { useEffect, useState } from 'react'
import { Create } from './Create'
import { Show } from './Show'
import { Header } from '../layouts/Header'
export const Home = () => {

  const [paciente, setPaciente] = useState([]);
  const [cliente, setCliente] = useState({});

  useEffect(() =>{
    const obtenerLocalStorage = () =>{
      const pacienteLocalStorage = JSON.parse(localStorage.getItem('paciente')) ?? [];
      setPaciente(pacienteLocalStorage)
    }
    obtenerLocalStorage();
  }, [])

  useEffect (() =>{
    localStorage.setItem('paciente', JSON.stringify(paciente));
  }, [paciente])

  const eliminarPaciente = (id) =>{
    const pacienteActualizado = paciente.filter(cliente => cliente.id !== id);
    setPaciente(pacienteActualizado);
  }
  return (
    <div className='container mx-auto'>
      <Header />
      <div className='md:flex mt-12'>
        <Create setPaciente={setPaciente}
          paciente={paciente} cliente={cliente} />
        <Show paciente={paciente} setCliente={setCliente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}
