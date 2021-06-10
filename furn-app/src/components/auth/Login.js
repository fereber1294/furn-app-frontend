import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'

import AuthContext from './../../context/authentication/AuthContext'



export default function Login(props) {

  //use global state from context

  const ctxAuth = useContext(AuthContext)
  console.log(ctxAuth);
  const{authenticated, logIn} = ctxAuth

  //manage local state from forms
  const[formData, setFormData] = useState({
    email:"",
    password:""
  })

  const{email, password} = formData

  //monitoring changes
  useEffect(() => {
    if(authenticated){
      props.history.push('/dashboard')
    }
    return 
  }, [authenticated])


  //Form changes monitor
  const getFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  //Send Data
  const sendData = (event) => {
    event.preventDefault()

    logIn({
      email,
      password
    })
  }



  return (
    // <>
    //   <div>
    //     <h1>Log In</h1>

    //     <form onSubmit={(e) => {sendData(e)}}>
    //       <div className="login-form-field">
    //         <label>Email</label>
    //         <input 
    //           type="email"
    //           id="email"
    //           name="email"
    //           placeholder="Please enter your registered email"
    //           onChange={(e) => {getFormData(e)}}
    //           value={email}
    //         />
    //       </div>
    //       <div className="login-form-field">
    //         <label>Password</label>
    //           <input 
    //             type="password"
    //             id="password"
    //             name="password"
    //             placeholder="●●●●●●"
    //             onChange={(e) => {getFormData(e)}}
    //             value={password}
    //           />
    //       </div>
    //       <div className="login-form-field">
    //           <input 
    //             type="submit"
    //             className="primary-button"
    //             value="Log in"
    //           />
    //       </div>

    //       <Link to={"sign-up"} className="redirect">
    //         <p>SignUp</p>
    //       </Link>
    //     </form>
    //   </div>
    // </>

<div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            
          </div>

          <div className="mt-8">
            

            <div className="mt-6">
              <form onSubmit={(e) => {sendData(e)}} method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      
                      onChange={(e) => {getFormData(e)}}
                      value={email}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="●●●●●●"
                      onChange={(e) => {getFormData(e)}}
                      value={password}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                      Recuérdame
                    </label>
                  </div>
                  <div className="text-sm">
                  <Link to={"sign-up"} className="redirect">

                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Crear una cuenta
                    </a>
                  </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-mono font-bold text-black bg-blue-300 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>


  )
}
