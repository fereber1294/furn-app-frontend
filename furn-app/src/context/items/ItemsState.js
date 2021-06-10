import React, {useReducer} from 'react'

import ItemsContext from './ItemsContext'
import ItemsReducer from './ItemsReducer'

import clientAxios from './../../config/axios'

const itemsState = (props) => {
  //A. Initial State
  const initialState = {
    items:[],
    singleItem
  }

  //B. Reducer configuration
  const [state, dispatch] = useReducer(ItemsReducer,initialState)
  
  //C. Change State functions

  //Get all items
  const getItems = async () => {

    try{
      const response = await clientAxios.get('/api/items')
      console.log('response is: ',response)

      dispatch({
        type:"GET_ITEMS",
        payload: response.data.itemsList
      })

    } catch(e){
      console.log(e);
      return
    }
  }

  //Create new Item
  const createItem = async (formData) => {
    try{
      const response = await clientAxios.post('/api/items',formData)
      console.log(response)

      dispatch({
        type:"CREATE_ITEM",
        payload: response.data.itemCreated
      })

    }catch(e){
      console.log(e);
    }
  }

  //Get a selected Item
  const getSingleItem = async(id) => {
    try{
      const response = await clientAxios.get(`/api/items/${id}`)
      console.log(response);

      dispatch({
        type:"GET_SINGLE_ITEM",
        payload: response.data.getSingleItem
      })
    } catch(e){
      console.log(e);
    }
  }


  //Update Item
  const updateItem = async(id,formData) => {
    try{
      const response = await clientAxios.put(`/api/items/${id}`,formData)
      console.log(response);

      dispatch({
        type:"UPDATE_ITEM",
        payload: response.data.itemUpdated
      })
    } catch (e){
      console.log(e);
    }
  }

  //Delete Item
  const deleteItem = async(id) => {
    try{
      const response = await clientAxios.delete(`/api/items/${id}`)
      console.log(response);
    } catch (e){
      console.log(e);
      return
    }
  }
  
  return (
    <ItemsContext.Provider
      value={
        {
          items: state.items,
          singleItem: state.singleItem,
          getItems,
          // createItem,
          // getSingleItem,
          // updateItem,
          // deleteItem
        }
      }
    >
    
    {props.children}

    </ItemsContext.Provider>
  )
}

export default itemsState