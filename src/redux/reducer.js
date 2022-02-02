import {ACTIVAR_MENU_DESPLEGABLE, CAMBIAR_NAV_BAR } from "./actions"


const initialState={
  menuDesplegable:false,
  navBar:true,
}

function rootReducer(state=initialState, action){
  
  if (action.type === ACTIVAR_MENU_DESPLEGABLE) {
    if (state.menuDesplegable) {
      return{
        ...state,
        menuDesplegable:false
      }
    }else{
      return{
        ...state,
        menuDesplegable:true
      }
    }
  }
  if (action.type === CAMBIAR_NAV_BAR) {
    console.log(action.payload);
      return{
        ...state,
        navBar:action.payload
      }
  }
  
  return state
}
export default rootReducer