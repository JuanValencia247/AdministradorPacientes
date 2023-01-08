import React from 'react'
import {Link} from 'react-router-dom'
export const Nav = () => {
  return (
    <div className='flex justify-between bg-slate-300 p-5'>
        <div>
            <Link to={'/'} >PV</Link>
        </div>
        <ul className='flex'>
            {/* <li className=' mr-5'><Link to={'/home'}>Inicio</Link></li>
            <li ><Link to={'/crear'}>Crear</Link></li> */}
        </ul>
    </div>
  )
}
