export default (state, action) => {
  switch(action.type){
    case "GET_ITEMS":
      return{
        ...state,
        items: [...action.payload]
      }
    
    case "CREATE_ITEM":
      return{
        ...state,
        items:[...action.payload]
      }

    case "GET_SINGLE_ITEM":
      return{
        ...state,
        singleItem: action.payload
      }
    
    case "UPDATE_ITEM":
      return    

    case "DELETE_ITEM":
      return



    default:
      return state

  }
}