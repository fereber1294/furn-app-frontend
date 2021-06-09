import React, {useReducer} from 'react'
import axios from 'axios'

import clientAxios from './../../config/axios'
import tokenAuth from './../../config/token'

import authContext from './AuthContext'
import authReducer from './AuthReducer'

const AuthState = (props) => {
  //A. Initial State
  const initialState = {
    message: null,
    authenticated: null,
    user: null
  }

  //B. Reducer configuration
  const [state, dispatch] = useReducer(authReducer,initialState)

  //C. Change State function
  const registerUser = async (data) => {

    try{
     //Creation of the user through post method to the backend
     const response = await axios.post("http://localhost:4006/api/users") 
     console.log(response);

     //send the response to the reducers
     dispatch({
       type:"REGISTRATION_SUCCESFULL",
       payload: response.data
     })

     //get the users
     verifyUser()
    }catch(e){
      console.log(e);
    }
  }

  const verifyUser = async () => {
    //get the token from the localStorage
    const token = localStorage.getItem('token')

    if(token){
      //pass token through x-auth-token on clientAxios
      tokenAuth(token)
    }

    try{

      const response = await clientAxios.post("api/auth")
      console.log(response);

      dispatch({
        type: "GET_USER",
        payload: response.data.user
      })

    }catch(e){
      console.log(e);
    }
  }


  const logIn = async (data) => {
    try{
      const response = await clientAxios.post("api/auth",data)
      dispatch({
        type: "SUCCESFUL_LOGIN",
        payload: response.data
      })
    }catch (e){
      console.log(e);
    }

    verifyUser()
  }

  const logOut = async () => {
    dispatch({
      type: "LOG_OUT",
      payload:null
    })
  }
  return(
    <authContext.Provider
      value={
        {
          message: state.message,
          authenticated: state.authenticated,
          user: state.user,
          registerUser,
          logIn,
          verifyUser,
          logOut
        }
      }>
      {props.children}
    </authContext.Provider>
  )

}

export default AuthState