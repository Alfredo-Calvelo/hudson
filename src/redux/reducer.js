import {ACTIVAR_MENU_DESPLEGABLE, CAMBIAR_NAV_BAR } from "./actions"


const initialState={
  menuDesplegable:false,
  navBar:true,
}

function rootReducer(state=initialState, action){
  
  if (action.type === ACTIVAR_MENU_DESPLEGABLE) {
    return{
      ...state,
      menuDesplegable:action.payload
    }
  }
  if (action.type === CAMBIAR_NAV_BAR) {
      return{
        ...state,
        navBar:action.payload
      }
  }
  
  return state
}
export default rootReducer