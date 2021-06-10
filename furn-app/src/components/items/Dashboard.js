import React, {useContext, useEffect} from 'react'


import ItemsContext from './../../context/items/ItemsContext'
import AuthContext from './../../context/authentication/AuthContext'

export default function Dashboard() {
  console.log("hola");
  const ctxItems = useContext(ItemsContext)
  console.log("ctx items",ctxItems);
  const{items, getItems, createItem} = ctxItems
  
  const authCtx = useContext(AuthContext)
  const { verifyUser, logOut } = authCtx

  useEffect(() => {
    
    const getEvents = async () => {
      await getItems()
      return
    }

    getEvents()
    }, [])

    const clickLogout = (e) => {
      e.preventDefault()
      logOut()
    }

    

  return (
    <>
      <div>
        <h1>List of Items</h1>
        {
          items.length === 0 ? "We are sorry. It looks that it's all sold out!" :
            items.map((e) => {
              return(
                <div>
                  <div>
                    <img src=""/>
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
    </>
  )
}
