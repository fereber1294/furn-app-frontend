import React, {useContext} from 'react'


import ItemsContext from './../../context/items/ItemsContext'
import AuthContext from './../../context/authentication/AuthContext'

export default function Dashboard() {
  console.log("hola")
  const ctxItems = useContext(ItemsContext)
  console.log("ctx items",ctxItems)
  const{items} = ctxItems
  
  // const authCtx = useContext(AuthContext)
  // const { logOut } = authCtx

  // useEffect(() => {
    
  //   const getEvents = async () => {
  //     await getItems()
  //     return
  //   }

  //   // getEvents()
  //   }, [])

    // const clickLogout = (e) => {
    //   e.preventDefault()
    //   logOut()
    // }




  return (
    <>
      <div>
        <h1>List of Items</h1>
        {
          items.length === 0 ? "We are sorry. It looks that it's all sold out!" :
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
        <button>Add a new Item</button>
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
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{e.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {e.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${e.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${e.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}
