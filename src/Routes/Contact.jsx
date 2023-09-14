import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';



const Contact = () => {

  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`${theme === 'light' ? 'bg-[#e8f7ff]' : 'bg-[#050f14]'}`}>
      <div className='relative'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1694485961/samantha-gades-BlIhVfXbi9s-unsplash_fkdrkl.jpg" alt="" className='h-[20rem] w-full object-cover'/>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 id='title' className={`${theme === 'light' ? 'bg-[#84B8D9]' : 'bg-[#050f14]'} text-5xl p-8 text-center font-extrabold text-[#F1F0EF] italic rounded-md bg-opacity-80`}>Contacto</h1>
        </div>
      </div>
      <div className='py-10'>
        <Form/>
      </div>
    </div>
  )
}

export default Contact