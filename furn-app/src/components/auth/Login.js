import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'

import AuthContext from './../../context/authentication/AuthContext'



export default function Login(props) {

  //use global state from context

  const ctxAuth = useContext(AuthContext)
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
    <>
      <div>
        <h1>Log In</h1>

        <form onSubmit={(e) => {sendData(e)}}>
          <div className="login-form-field">
            <label>Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your registered email"
              onChange={(e) => {getFormData(e)}}
              value={email}
            />
          </div>
          <div className="login-form-field">
            <label>Password</label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="●●●●●●"
                onChange={(e) => {getFormData(e)}}
                value={password}
              />
          </div>
          <div className="login-form-field">
              <input 
                type="submit"
                className="primary-button"
                value="Log in"
              />
          </div>

          <Link to={"sign-up"} className="redirect">
            <p>SignUp</p>

          </Link>
        </form>
      </div>
    </>
  )
}
