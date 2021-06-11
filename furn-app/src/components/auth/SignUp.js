import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "./../../context/authentication/AuthContext";

export default function SignUp(props) {
  //use global state from context
  const ctxAuth = useContext(AuthContext);
  const { authenticated, user, registerUser } = ctxAuth;

  //manage local state from forms
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, email, password, confirm } = formData;

  //monitoring changes
  useEffect(
    () => {
      if (authenticated) {
        props.history.push("/dashboard");
      }
      return;
    },
    [authenticated]
  );

  //Form changes monitor
  const getFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  //send data to DB
  const sendDataToDB = (event) => {
    event.preventDefault();

    //validate password and password confirmation
    if (password !== confirm) {
      return <p>Passwords doesn't match</p>;
    }

    //Get function created from context/authentication and save data to DB
    registerUser({
      name,
      email,
      password,
    });
  };

  return (
    <>
      

      <div className="min-h-screen bg-gray-50 flex font-mono flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crea tu cuenta
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow shadow-2xl sm:px-10">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                sendDataToDB(e);
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => getFormData(e)}
                    value={email}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => getFormData(e)}
                    value={password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirmar contraseña
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    id="confirm"
                    name="confirm"
                    onChange={(e) => getFormData(e)}
                    value={confirm}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Crear cuenta
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <Link to={"log-in"} className="redirect">
                    <span className="px-2 bg-white text-gray-500">
                      ¿Ya tienes una cuenta?
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
