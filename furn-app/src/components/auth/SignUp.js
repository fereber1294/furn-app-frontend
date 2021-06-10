import React, {useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'

import AuthContext from './../../context/authentication/AuthContext'

export default function SignUp(props) {
  //use global state from context
  const ctxAuth = useContext(AuthContext)
  const {message, authenticated, user, registerUser} = ctxAuth

  //manage local state from forms
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirm: ""
  })

  const {name,email,password,confirm} = formData

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
  //send data to DB
  const sendDataToDB = (event) =>{
    event.preventDefault()

    //validate password and password confirmation
    if(password !== confirm){
      return <p>Passwords doesn't match</p>
    }

    //Get function created from context/authentication and save data to DB
    registerUser({
      name,
      email,
      password,
    })

  }



  return(
    <>
        <div>
            <h1>Create Account</h1>
            <form onSubmit={(e) => {sendDataToDB(e)}}>
                <div className="login-form-field">
                    <label>Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type in your name"
                        onChange={(e) => getFormData(e)}
                        value={name}
                    />
                </div>
                <div className="login-form-field">
                    <label>Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Plese enter your email"
                        onChange={(e) => getFormData(e)}
                        value={email}
                    />
                </div>
                <div className="login-form-field">
                    <label>Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Type in a 6 character minimum password"
                        onChange={(e) => getFormData(e)}
                        value={password}
                    />
                </div>
                <div className="login-form-field">
                    <label>Confirmar password</label>
                    <input 
                        type="password"
                        id="confirm"
                        name="confirm"
                        placeholder="Confirm your password"
                        onChange={(e) => getFormData(e)}
                        value={confirm}
                    />
                </div>

                <div className="login-form-field">
                    <input
                        type="submit"
                        className="primary-button"
                        value="Sign Up"
                    />
                </div>

            </form>

                <Link to={"log-in"} className="redirect">
                  <p>Do you have an account already?</p>
                </Link>

                { user ? <p>Welcome {`${user.name}`} !</p> : null }

                {/* { ctxAuth.authenticated ? "You are authenticated" : "You are not authenticated" } */}
        </div>
    </>
  )
}