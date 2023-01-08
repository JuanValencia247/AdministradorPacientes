import React from "react";
import { Client } from "./Client";

export const Show = ({ paciente, setCliente, eliminarPaciente }) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-2xl text-center mb-5">
          Listado Pacientes
        </h2>

        <div className="md:h-screen md:overflow-y-scroll">
          {paciente && paciente.length ? (
            <>
              {paciente.map((paciente) => (
                <Client key={paciente.id} paciente={paciente} setCliente={setCliente} eliminarPaciente={eliminarPaciente} />
              ))}
            </>
          ) : (
            <div className="text-center font-bold text-1xl text-indigo-600">
              <h2>No hay Pacientes</h2>

            </div>
          )}
        </div>
      </div>
    </>
  );
};
