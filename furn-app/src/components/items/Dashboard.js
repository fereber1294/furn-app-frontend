import React, { useContext, useEffect, useState, Fragment } from "react";

import clientAxios from "./../../config/axios";

import ItemsContext from "./../../context/items/ItemsContext";
// import AuthContext from './../../context/authentication/AuthContext'

require("dotenv").config({ path: ".env" });

export default function Dashboard() {
  const ctxItems = useContext(ItemsContext);
  const { items, getItems } = ctxItems;

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");

  const [newPrice, setNewPrice] = useState({
    newPrice: "",
  });

  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    console.log("showform state:", showForm);
    const getEvents = async () => {
      await getItems();
      return;
    };

    getEvents();
  }, []);

  const addToFavs = async (req,res) => {
    const data = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
    };
    console.log("req",req);
    const response = await clientAxios.get(`/api/items/${req.body.id}`)
    console.log("fav item response is:",response);

    setFavItems({
      ...favItems,
      data
    });


    return (
      <>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((e) => (
            <div
              key={e.name}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={e.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {e.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {e.price}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const postNewForm = async () => {
    const data = {
      name: name,
      description: description,
      imageUrl: imageUrl,
      price: price,
      quantity: quantity,
      location: location,
    };

    await clientAxios.post("/api/items", data);
    getItems();
  };

  const addPrice = async (event) => {
    setNewPrice({
      ...newPrice,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="font-mono max-w shadow h-screen flex overflow-hidden bg-gray-100">
        <div className="shadow-2xl bg-gray-300">
          <h1 className="text-4xl ml-10 mr-10 mt-10 font-extrabold text-gray-900 uppercase">
            Bienvenido al Tianguis
          </h1>
          <div className="py-10">
            <button
              class="border-2 ml-10 mr-10 px-5 py-1 border-purple-500 hover:border-blue-500 hover:bg-blue-500 hover:font-extrabold hover:text-white focus:bg-blue-500 focus:font-extrabold focus:text-white uppercase"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Agregar artículos
            </button>
          </div>
          <div>
            <h2 className="text-2xl ml-10 mr-10 mt-10 font-bold text-gray-900 uppercase">
              Mis Favoritos
            </h2>
          </div>
          <div></div>
        </div>
        <div className="ml-20">


          <div className="py-10">
            {showForm ? (
              <div className="space-y-6 px-6">
                <div className="bg-white mt-10 flex flex-center flex-col shadow-xl border border-indigo-500 px-4 py-5 sm:p-6">
                  <h1 className="text-2xl font-extrabold leading-6 text-gray-900 uppercase">
                    Agregar artículos
                  </h1>
                </div>

                <div className="bg-white shadow-xl border border-indigo-500 px-4 py-5 sm:p-6">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <h3 className="text-xl font-extrabold leading-6 text-gray-900 uppercase">
                        Nuevo artículo
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">
                        Llena el formulario con la información de tu artículo.
                      </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company_website"
                              className="block text-sm font-bold text-gray-700 uppercase"
                            >
                              Nombre
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                type="text"
                                name="company_website"
                                id="company_website"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 "
                                onChange={(event) => setName(event.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                              <label
                                htmlFor="company_website"
                                className="block text-sm font-bold text-gray-700 uppercase"
                              >
                                Precio
                              </label>
                              <div className="mt-1 flex  shadow-sm">
                                <input
                                  type="float"
                                  name="company_website"
                                  id="company_website"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 "
                                  placeholder="000.00"
                                  onChange={(event) =>
                                    setPrice(event.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-bold text-gray-700 uppercase"
                          >
                            Descripción
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={3}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border border-gray-300 "
                              defaultValue={""}
                              onChange={(event) =>
                                setDescription(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-bold text-gray-700 uppercase"
                          >
                            Cantidad
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              rows={1}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border border-gray-300 "
                              defaultValue={""}
                              onChange={(event) =>
                                setQuantity(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-bold text-gray-700 uppercase"
                          >
                            Ubicación
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="Location"
                              name="Location"
                              rows={1}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border border-gray-300 "
                              defaultValue={""}
                              onChange={(event) =>
                                setLocation(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-bold text-gray-700 uppercase"
                          >
                            Fotos del artículo
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              placeholder="Inserta una url"
                              rows={1}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border border-gray-300 "
                              defaultValue={""}
                              onChange={(event) => setImgUrl(event.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      postNewForm();
                      setShowForm(false);
                    }}
                  >
                    Agregar artículo
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}

          </div>
          <ul
            onClick={()=>{addToFavs()}}
            className="grid grid-cols-1 py-12 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((e) => (
              <li className="col-span-1 flex flex-col text-center bg-white border-4 border-gray-500 border-opacity-25 shadow-2xl hover:bg-indigo-200 divide-y divide-gray-400">
                <div className="flex-1 flex flex-col p-8">
                  <div>
                    <img
                      className="w-32 h-32 flex-shrink-0 mx-auto bg-black shadow "
                      src={e.imageUrl}
                      alt=""
                    />
                  </div>

                  <h3 className="mt-3 text-gray-900 text-l font-bold uppercase">
                    {e.name}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Artículo:</dt>
                    <h3 className="text-gray-900 font-bold">Descripción</h3>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium">
                        {e.description}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <h3 className="mt-6 text-gray-900 font-bold">Precio:</h3>
                    <dd className="text-black font-semibold text-m">
                      {e.price}
                    </dd>
                    <h3 className="mt-6 text-gray-900 font-bold">
                      Piezas disponibles
                    </h3>
                    <span className="mt-3 px-2 text-green-800 text-xs font-medium">
                      {e.quantity}
                    </span>
                    <dd className="mt-3"></dd>
                    <dt className="sr-only">Descripción</dt>
                  </dl>
                </div>
                <div>
                  <dl className="flex-grow flex flex-col center">
                    <div className="py-4">
                      <h3 className="mt- text-gray-900 font-bold">Ubicación</h3>
                      <span className="mt-3 px-2 text-green-800 text-xs font-medium">
                        {e.location}
                      </span>
                      <button 
                      
                      className="w-full  mt-3 flex justify-center object-center py-2 px-4 border border-transparent shadow shadow-xl text-sm font-bold text-white bg-indigo-600 hover:bg-green-400  hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase">
                        ¡Guardar en favoritos!
                      </button>
                      <div></div>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
