export default AuthReducer = (state, action) => {
  switch(action.type){
      
      case "REGISTRATION_SUCCESFULL":
          // Save token on browser
          localStorage.setItem('token', action.payload.token)

          // Modify the global state
          return {
              ...state,
              authenticated: true
          }

      case "SUCCESFUL_LOGIN":
          // Save token on browser
          localStorage.setItem('token', action.payload.token)

          // Modify the global state
          return {
              ...state,
              authenticated: true
          }

      case "GET_USER":
          return {
              ...state,
              authenticated: true,
              user: action.payload
          }        

      case "LOG_OUT":
          localStorage.removeItem("token")

          return{
              ...state,
              user: null,
              authenticated: null,
              message: null
          }

      default:
          return state
  }
}