import React, { useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {

  const { theme } = useContext(ContextGlobal);
  const regexName = /([0-9])+/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [validation, setValidation] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputs.name.trim() || regexName.test(inputs.name)) {
      setValidation(false);
    } else if (!inputs.email.trim() || !regexEmail.test(inputs.email)) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const error = "Por favor verifique su información nuevamente";

  return (
    <div className="flex justify-center items-center h-[18rem]">
      <form className="flex flex-col justify-center items-center bg-white p-5 shadow-sm rounded-md" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center h-32">
            <label className={`${theme === 'light' ? 'text-[#D99B84]' : 'text-[#D99B84]'} text-lg font-semibold py-1`} htmlFor="name">Nombre completo</label>
            <input className="py-2 rounded-md outline-none px-2 text-sm shadow-sm w-60 bg-[#84B8D9] text-white" type="text" name="name" onChange={handleOnChange} />
          </div>
          <div className="flex flex-col justify-center items-center h-32">
            <label className={`${theme === 'light' ? 'text-[#D99B84]' : 'text-[#D99B84]'} text-lg font-semibold py-1`} htmlFor="email">Correo electrónico</label>
            <input className="py-2 rounded-md outline-none px-2 text-sm shadow-sm w-60 bg-[#84B8D9] text-white" type="email" name="email" onChange={handleOnChange} />
          </div>
        </div>
        <button className="mb-10 mt-5 py-2 px-5 rounded-md shadow-sm text-white font-semibold bg-[#D99B84]" type="submit">Enviar</button>
        {validation === true ? (
          <div className="flex justify-center items-center font-semibold text-[#D99B84]"><span>¡Gracias<span className="text-[#84B8D9]"> {inputs.name}</span>, te contactaremos cuanto antes vía mail!</span></div>
        ) : null}
        {validation === false ? <div className="flex justify-center items-center font-semibold text-red-700">{error}</div> : null}
      </form>
    </div>
  );
};

export default Form;