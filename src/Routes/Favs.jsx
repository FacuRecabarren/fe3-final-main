import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { theme } = useContext(ContextGlobal);
  const storage = JSON.parse(localStorage.getItem("favs"))

  return (
    <div className={`${theme === 'light' ? 'bg-[#e8f7ff]' : 'bg-[#050f14]'}`}>
      <div className='relative'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1694485961/samantha-gades-BlIhVfXbi9s-unsplash_fkdrkl.jpg" alt="" className='h-[20rem] w-full object-cover'/>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 id='title' className={`${theme === 'light' ? 'bg-[#84B8D9]' : 'bg-[#050f14]'} text-5xl p-8 text-center font-extrabold text-[#F1F0EF] italic rounded-md bg-opacity-80`}>Favoritos</h1>
        </div>
      </div>
      <div className="py-10 flex justify-center items-center flex-wrap gap-10">
        {storage ? storage.map((doctorFav) => (
          <Card key={doctorFav} item={doctorFav}/>
        )) : ""}
      </div>
    </div>
  );
};

export default Favs;
