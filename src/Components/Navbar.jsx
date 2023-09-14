import React, { useContext } from 'react'
import { ContextGlobal } from "./utils/global.context";
import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { changueTheme, theme } = useContext(ContextGlobal);

  return (
    <nav className={`${theme === 'light' ? 'bg-[#e8f7ff]' : 'bg-[#050f14]'} flex justify-center items-center gap-5 h-[5rem]`}>
      <Link to='/'>
        <h2 className={`${theme === 'light' ? 'text-[#050f14]' : 'text-[#e8f7ff]'} text-lg hover:text-[#D99B84] duration-300`}>Inicio</h2>
      </Link>
      <Link to='/favs'>
        <h2 className={`${theme === 'light' ? 'text-[#050f14]' : 'text-[#e8f7ff]'} text-lg hover:text-[#D99B84] duration-300`}>Favoritos</h2>
      </Link>
      <Link to='/contact'>
        <h2 className={`${theme === 'light' ? 'text-[#050f14]' : 'text-[#e8f7ff]'} text-lg hover:text-[#D99B84] duration-300`}>Contacto</h2>
      </Link >
      <button onClick={changueTheme} className='flex justify-center items-center absolute right-10 hover:scale-105 duration-300'>
      {theme === 'light' && (
        <img className='w-10' src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686672097/img.icons8_b3lade.png" alt="" />
      )}
      {theme === 'dark' && (
        <img className='w-10' src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686672072/img.icons8_rnqhur.png" alt="" />
      )}
      </button>
    </nav>
  )
}

export default Navbar