export default ItemsReducer = (state, action) => {
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
      return{
        ...state,
        singleItem: action.payload
      }

    case "DELETE_ITEM":
      return{
        ...state,
        singleItem: action.payload
      }

    default:
      return state

  }
}