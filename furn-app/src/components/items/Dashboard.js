import React, {useContext} from 'react'


import ItemsContext from './../../context/items/ItemsContext'
// import AuthContext from './../../context/authentication/AuthContext'

export default function Dashboard() {
  const ctxItems = useContext(ItemsContext)
  const{items} = ctxItems
  
  // const authCtx = useContext(AuthContext)
  // const { logOut } = authCtx

  // useEffect(() => {
    
  //   const getEvents = async () => {
  //     await getItems()
  //     return
  //   }

  //   getEvents()
  //   }, [])
  
  // const createItemClick = (event) => {
  //   event.preventDefault()
  //   createItem()
  // }

  // const getNewFormData = async () => {
  //   const data = {
  //     name:state.name,
  //     description: state.description,

  //   }
  // }

  return (
    <>
      <div>
        <h1>Bienvenido al Tianguis</h1>
        {
          items.length === 0 ? "¡Uups! ¡Parece que todo se ha vendido!" :
            items.map((e) => {
              return(
                <div key={e.id}>
                  <div>
                    <img src={e.imageUrl} alt="items"/>
                  </div>
                  <div>
                    <h4>{e.name}</h4>
                    <p>{e.description}</p>
                    <p>{e.price}</p>
                    <p>{e.dimensions}</p>
                  </div>
                </div>
              )
            })
        }
        <button onClick="">Quiero vender</button>
      </div>


      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        
        items.map((e) => (
        <li
          key={e.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={e.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{e.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Artículo:</dt>
              <dd className="text-gray-500 text-sm">{e.name}</dd>
              <dt className="sr-only">Descripción</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {e.description}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Precio:</dt>
              <dd className="text-gray-500 text-sm">{e.price}</dd>
              <dt className="sr-only">Piezas disponibles</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {e.quantity}
                </span>
              </dd>
            </dl>

          </div>

        </li>
      ))}
    </ul>
    </>
  )
}
