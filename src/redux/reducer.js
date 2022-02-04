import {ACTIVAR_MENU_DESPLEGABLE, CAMBIAR_NAV_BAR,CAMBIAR_OPCIONES,CAMBIAR_MENU_CATALOGO, CERRAR_TODO } from "./actions"
import conccionYHorneado from '../imagenes/Circulos/coccionYHorneado.png'
import cafeTeYMate from '../imagenes/Circulos/cafeTeYMate.png'
import Utensillios from '../imagenes/Circulos/Utensillios.png'
import Vajilla from '../imagenes/Circulos/Vajilla.png'
import Reposteria from '../imagenes/Circulos/Reposteria.png'
import Organizacion from '../imagenes/Circulos/Organizacion.png'
import lineaMasterchef from '../imagenes/lineaMasterchef.png'
import cocinaConHudson from '../imagenes/cocinaConHudson.jfif'
import trucosYConsejos from '../imagenes/trucosYConsejos.jfif'
import elImperdible from '../imagenes/elImperdible.png'



const initialState={
  menuDesplegable:false,
  navBar:true,
  opciones:false,
  menuCatalgo:false,
  Home:{
    header:{
      title:'SEMANA DE DESCUENTOS PARA MAMÁ',
      subtitle: 'Con el cupón: MAMACHEF20. Sed aliquam et risus fusce a. Risus neque ultricies suscipit diam nulla ultrices volutpat.',
      aclaracion:'Línea de vigencia de la promoción '
    },
    carrusell1:[
      {label:'Coccion y Horneado' ,img:conccionYHorneado},
      {label:'Cafe y Mate' ,img:cafeTeYMate},
      {label:'Utensilios' ,img:Utensillios},
      {label:'Vajilla' ,img:Vajilla},
      {label:'Reposteria' ,img:Reposteria},
      {label:'Organizacion' ,img:Organizacion},
    ],
    cards:[
      {img:lineaMasterchef}
    ]
  }
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
  if (action.type === CAMBIAR_OPCIONES) {
      return{
        ...state,
        opciones:action.payload
      }
  }
  if (action.type === CAMBIAR_MENU_CATALOGO) {
      return{
        ...state,
        menuCatalgo:action.payload
      }
  }
  if (action.type === CERRAR_TODO) {
      return{
        ...state,
        menuCatalgo:false,
        navBar:false,
        opciones:false,
      }
  }
  
  
  return state
}
export default rootReducer