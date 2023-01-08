import React from 'react'

export const Error = ({mensaje}) => {
  return (
    <div className='text-center p-3 bg-red-800 font-bold uppercase mb-3 rounded-md text-white'>
            <p>{mensaje}</p>
    </div>
  )
}
