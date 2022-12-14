import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from "../conexiones/crud";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({    
    email: "",
    password: "",
    
  });
  const {  email, password  } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    autenticarCuenta();
  };

  const autenticarCuenta = async()=>{
    const data = {      
      email: usuario.email,
      password: usuario.password,
    };
    
    const response = await crud.POST("/api/auth", data);
    const mensaje = response.msg;
    console.log(mensaje);
    if (mensaje === "el usuario no existe") {
      const mensaje = "el usuario no existe";
      swal({
        title: "Error",
        text: mensaje,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }else if (mensaje === "el pass es invalido") {
      const mensaje = "el pass es invalido";
      swal({
        title: "Error",
        text: mensaje,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });

    }else{
      console.log(data);
      navigate("/admin");

    }

  }


  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <h1
          className="inline bg-gradient-to-r from-indigo-200 via-violet-700
                 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent"
        >
          G13 Iniciar sesión Ecommerce
        </h1>
        <form 
          className="my-10 bg-white shadow-orange-500 rounded-lg p-10"
          onSubmit={onSubmit}
          >
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50 "
              type="email"
              placeholder="Email..."
              id="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50 "
              type="Password"
              placeholder="Password..."
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
          <Link
            to={"/crear-cuenta"}
            className="block text-center my-5 text-violet-600 uppercase text-sm"
          >
            Crear Cuenta
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
