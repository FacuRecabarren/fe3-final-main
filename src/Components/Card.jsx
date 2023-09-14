import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { HiIdentification, HiTag } from 'react-icons/hi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'


const Card = ({ item }) => {

  const {name, username, id} = item;

  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("favs");
    const listFavs = storage ? JSON.parse(storage) : [];
    const validacion = listFavs.some((fav) => fav.id === id);
    setIsFavorited(validacion);
  }, [id]);

  const addFav = () => {
    const storage = localStorage.getItem("favs");
    const listFavs = storage ? JSON.parse(storage) : [];
    const validacion = listFavs.some((fav) => fav.id === id);
    if (validacion) {
      const newFavs = listFavs.filter((fav) => fav.id !== id);
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setIsFavorited(false);
    } else {
      listFavs.push({ id: id, username: username, name: name });
      localStorage.setItem("favs", JSON.stringify(listFavs));
      setIsFavorited(true);
    }
  };

  return (
    <div className="shadow-lg w-64 flex flex-col justify-center items-center relative bg-[white] rounded-md">
        <Link to={`/dentist/${id}`}>
          <img className="w-64" src="https://res.cloudinary.com/dreso9ye9/image/upload/v1694192185/peeps-avatar-alpha_fqtwxb_pod4hi.webp" alt="Doctor" />
          <div className="">
            <h2 className="text-lg font-medium text-center py-2 text-white bg-[#84B8D9] shadow-sm">{name}</h2>
            <div className="flex justify-center items-center py-5 gap-10 bg-[#D99B84] rounded-b-md">
              <div className="flex flex-col justify-center items-center gap-1">
                <HiTag className="bg-[#F2F2F2] text-4xl p-2 rounded-full text-[#84B8D9]"/><span className="text-center text-sm font-medium text-[#F2F2F2]">N° {id}</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <HiIdentification className="bg-[#F2F2F2] text-4xl p-2 rounded-full text-[#84B8D9]"/><span className="text-center text-sm font-medium text-[#F2F2F2]">{username}</span>
              </div>
            </div>
          </div>
        </Link>
        <button onClick={addFav} className="absolute top-4 right-4">
          {isFavorited ? (
            <AiFillHeart className="text-3xl text-red-500"/>
          ) : (
            <AiOutlineHeart className="text-3xl text-red-500"/>
          )}
       
        </button>
    </div>
  );
};

export default Card;
