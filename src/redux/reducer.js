import {ACTIVAR_MENU_DESPLEGABLE, CAMBIAR_NAV_BAR } from "./actions"


const initialState={
  menuDesplegable:false,
  navBar:false,
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
    if (state.navBar) {
      return{
        ...state,
        navBar:false
      }
    }else{
      return{
        ...state,
        navBar:true
      }
    }
  }
  
  return state
}
export default rootReducer