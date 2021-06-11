import React, { useContext, useEffect, useState,Fragment} from "react";

import clientAxios from './../../config/axios'


import ItemsContext from "./../../context/items/ItemsContext";
// import AuthContext from './../../context/authentication/AuthContext'

require('dotenv').config({path: '.env'})

export default function Dashboard() {
  const ctxItems = useContext(ItemsContext);
  const { items, getItems, createItem } = ctxItems;



  const[showForm,setShowForm] =useState(false)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [url, setUrl] = useState("");

  const [newPrice, setNewPrice] = useState({
    newPrice: "",
  });

  useEffect(() => {
    console.log("showform state:", showForm);
    const getEvents = async () => {
      await getItems();
      return;
    };

    getEvents();
  }, []);

  const createItemClick = (event) => {
    event.preventDefault();
    // createItem();
    return(
      <p>hey</p>
    )
  };

  const postNewForm = async () => {
    const data = {
      name:name,
      description: description,
      imageUrl: imageUrl,
      price: price,
      quantity: quantity
    }

    await clientAxios.post("/api/items",data)

  }

  const addPrice = async (event) => {
    setNewPrice({
      ...newPrice,
      [event.target.name]: event.target.value,
    });
  };

  const postDetails = ()=>{
    const data = new FormData()
    data.append("file",imageUrl)
    data.append("upload_preset","furn-app")
    data.append("cloud_name",process.env.CLOUDINARY_NAME)
    fetch("https://api.cloudinary.com/v1_1/dskqqgdgp/image/upload",{
      method:"post",
      body:data
    })
    .then(res => res.json())
    .then(data=>{
      setUrl(data.url)
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })

    

  }

  const readImg = (e) => {
    const read = new FileReader()
    console.log("read",read);
    
    read.onload = () => {
      if(read.readyState === 2){
        setImgUrl(read.result)
        console.log("read.result",imageUrl);
      }
    }
    
    const imgFinal = read.readAsDataURL(e.target.files[0])
    console.log("final img",imgFinal);
    setImgUrl(imgFinal)
    console.log(imgFinal);
  }

  return (
    <>

      {/* <div className="h-screen flex overflow-hidden bg-gray-100">

      </div> */}


      <div className="font-mono max-w shadow h-screen flex overflow-hidden bg-gray-100">
        <div className="shadow-2xl bg-gray-300">
          <h1 className="text-4xl ml-10 mr-10 mt-10 font-extrabold text-gray-900 uppercase" >Bienvenido al Tianguis</h1>
          <div className="py-6">
            <button class="border-2 ml-10 mr-10 border-purple-500 hover:border-blue-500 "
            onClick={()=>{
            
            setShowForm(true)
          }}
            >
            Agregar artículos
            </button>
          </div>
        </div>
        <div className="ml-20">
        {showForm ? (
          <div className="space-y-6 px-6">
      <div className="bg-white mt-10 flex flex-center flex-col shadow-xl border border-indigo-500 px-4 py-5 sm:p-6">
        <h1 className="text-2xl font-extrabold leading-6 text-gray-900 uppercase">Agregar artículos</h1>
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
            <div className="space-y-6" >
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
                      onChange={(event)=> setName(event.target.value)}
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
                        onChange={(event)=> setPrice(event.target.value)}
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
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 "
                    defaultValue={""}
                    onChange={(event)=> setDescription(event.target.value)}
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
                  <textarea
                    id="quantity"
                    name="quantity"
                    rows={1}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 "
                    defaultValue={""}
                    onChange={(event)=> setQuantity(event.target.value)}
                  />
                </div>
                
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase">
                  Fotos del artículo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed ">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white  font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Sube tus archivos</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e)=>{setImgUrl(e.target.files[0])}}
                        />
                      </label>
                      <p className="pl-1">o arrástralos</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG hasta 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={()=>setShowForm(false)}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={()=>{
            postDetails()
            setShowForm(false)
          }}
        >
          Agregar artículo
        </button>
      </div>
    </div>

        ) : (
          <div>

          </div>
        )


        }
        <ul className="grid grid-cols-1 py-12 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((e) => (
            <li
              
              className="col-span-1 flex flex-col text-center bg-white border-4 border-gray-500 border-opacity-25 shadow-2xl hover:bg-indigo-200 divide-y divide-gray-400"
            >
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
                  <dd className="text-black font-semibold text-m">{e.price}</dd>
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
                  <h3 className="mt-3 text-gray-900 font-bold">Ofertar:</h3>

                  <div className="py-4">
                    <input
                      className="w-1/2 px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="number"
                      id="newPrice"
                      name="newPrice"
                      onChange={(e) => {
                        addPrice(e);
                      }}
                    ></input>
                      <button className="w-full  mt-3 flex justify-center object-center py-2 px-4 border border-transparent shadow text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase">
                        ¡Hacer oferta!
                      </button>
                    <div >
                    </div>
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
