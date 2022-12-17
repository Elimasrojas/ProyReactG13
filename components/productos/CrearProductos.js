import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import crud from "../../conexiones/crud";
import { useNavigate } from "react-router-dom";

const CrearProductos = () => {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState({
    nombre: "",
    imagen: "",
  });

  const { nombre, imagen } = categoria;

  const onChange = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  };

  const crearCategoria = async () => {
    const data = {
      nombre: categoria.nombre,
      imagen: categoria.imagen,
    };

    const response = await crud.POST(`/api/categoria`, data);
    const mensaje = response.msg;
    console.log(mensaje);
    navigate("/categorias");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCategoria();
  };

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="container mx-auto mt-2 md:mt-2  md:flex md:justify-center">
          <div className="md:w-1/3 lg:w-4/5">
            <div className="flex-1 flex-col text-center">
              <h1
                className="inline bg-gradient-to-r from-yellow-500 via-yellow-700 to-gray-700 
                  bg-clip-text font-display text-5xl tracking-tight text-transparent py-3"
              >
                Crear Producto
              </h1>
            </div>

            <div>
              <form
                className="my-1 bg-white shadow rounded-lg p-5 "
                onSubmit={onSubmit}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                    
                    >
                      Nombre:
                    </label>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 w-full mt-2 p-2 border rounded-lg
                      bg-gray-50 border-gray-200   leading-tight focus:outline-none focus:border-sky-500
                       focus:ring-sky-500 focus:ring-1"                     
                      type="text"
                      placeholder="Nombre del Producto"
                    />
                    
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"                    
                    >
                      Descripcion:
                    </label>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 w-full mt-2 p-2 border rounded-lg
                      bg-gray-50 border-gray-200   leading-tight focus:outline-none focus:border-sky-500
                       focus:ring-sky-500 focus:ring-1"                     
                      type="text"
                      placeholder="Descripcion del Producto"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-1">
                  <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"                   
                    >
                      Stock:
                    </label>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 w-full mt-2 p-2 border rounded-lg
                      bg-gray-50 border-gray-200   leading-tight focus:outline-none focus:border-sky-500
                       focus:ring-sky-500 focus:ring-1"                      
                      type="text"
                      placeholder="Stock"
                    />
                    
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"                     
                    >
                      precio:
                    </label>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 w-full mt-2 p-2 border rounded-lg
                      bg-gray-50 border-gray-200   leading-tight focus:outline-none focus:border-sky-500
                       focus:ring-sky-500 focus:ring-1"                      
                      type="text"
                      placeholder="precio"
                    />
                  </div>
                </div>

                <div className="my-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Imagen:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre de la categoria"
                    className="placeholder:italic placeholder:text-slate-400 w-full mt-2 p-2 border rounded-lg
                      bg-gray-50 border-gray-200   leading-tight focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    value={nombre}
                    onChange={onChange}
                  />
                </div>
                <div className="my-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Categoria:
                  </label>
                  <input
                    type="text"
                    id="imagen"
                    name="imagen"
                    placeholder="Imagen de la categoria"
                    className="placeholder:italic placeholder:text-slate-400 w-full mt-2 p-2 border rounded-lg
                      bg-gray-50 border-gray-200   leading-tight focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    value={imagen}
                    onChange={onChange}
                  />
                </div>

                <input
                  type="submit"
                  value="Crear Categoria"
                  className="bg-yellow-500 mb-5 w-full py-3 text-black uppercase font-semibold  text-sm  border rounded-lg 
                    hover:cursor-pointer hover:bg-red-500 transition-colors"
                />
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CrearProductos;
