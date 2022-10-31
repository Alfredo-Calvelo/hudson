import axios from 'axios'
import { typeCategorias } from '../types'
export const ACTIVAR_MENU_DESPLEGABLE='ACTIVAR_MENU_DESPLEGABLE'
export const CAMBIAR_NAV_BAR = 'CAMBIAR_NAV_BAR'
export const CAMBIAR_OPCIONES = 'CAMBIAR_OPCIONES'
export const CAMBIAR_MENU_CATALOGO = 'CAMBIAR_MENU_CATALOGO'
export const CERRAR_TODO = 'CERRAR_TODO'
export const CARD_ACTIVA = 'CARD_ACTIVA'
export const MENU_ACTIVO_NAVBAR = 'MENU_NAVBAR_ACTIVO'
export const MENU_ACTIVO_MENU = 'MENU_ACTIVO_MENU'
export const ALTURA_PANTALLA = 'ALTURA_PANTALLA'
export const GET_DATA = "GET_DATA";
export const GET_SOCIAL = "GET_SOCIAL";
export const BUSQUEDA = "BUSQUEDA";
export const GET_CARD_CATALOGO = "GET_CARD_CATALOGO";
export const SEND_EMAIL = 'SEND_EMAIL'
export const FALTA_COMPLETAR = 'FALTA_COMPLETAR'
export const CARGANDO_MAIL = 'CARGANDO_MAIL'
export const GET_ACTIVO = 'GET_ACTIVO'

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = 'http://localhost:4000'

export function activarMenuDesplegable(payload){
    return{type:ACTIVAR_MENU_DESPLEGABLE, payload}
}
export function cambiarOpciones(payload){
    return{type:CAMBIAR_OPCIONES, payload}
}
export function cambiarNavBar(payload){
    return{type:CAMBIAR_NAV_BAR, payload}
}
export function cambiarMenuCatalogo(payload){
    return{type:CAMBIAR_MENU_CATALOGO, payload}
}
export function cerrarTodo(payload){
    return{type:CERRAR_TODO, payload}
}
export function activarCard(payload){
    return{type:CARD_ACTIVA, payload}
}
export function menuActivoNavBar(payload){
    return{type:MENU_ACTIVO_NAVBAR,payload}
}
export function menuActivoMenu(payload){
    return{type:MENU_ACTIVO_MENU,payload}
}
export function alturaPantalla(payload){
    return{type:ALTURA_PANTALLA,payload}
}
export function busqueda(payload){
    return{type:BUSQUEDA,payload}
}
export function faltaCompletarCartel(params) {
    return{type: FALTA_COMPLETAR, payload:params}
}
export function cargandoMail(params) {
    return{type: CARGANDO_MAIL, payload:params}
}

export  function EnviarMail(info) {
    return async function(dispatch) {
        try {
            dispatch({type:CARGANDO_MAIL ,payload:'Por Favor Aguarde, estamos enviando sus datos'})
            const json = await axios({
                method: "POST",
                withCredentials: true,
                Credentials: "includes",
                data: info,
                url: BASE_URL + "/sendEmail"
            });
            return dispatch({ type: SEND_EMAIL, payload: json.data});
        } catch (error) {
                dispatch({type:CARGANDO_MAIL ,payload:'Hubo un error al cargar su email, por favor vuelva a intentarlo mas tarde.'})
            }
    }
}

export function getData(propiedadName) {  //prop es el tipo (string) de coleccion a traer (headerbanner, productos, etc).
    return async function (dispatch) {
        try {
            const json = await axios({
                method: "GET",
                withCredentials: true,
                Credentials: "includes",
                url: BASE_URL + "/getData/" + propiedadName,
            });
            if (propiedadName === typeCategorias) {
                console.log(json.data);
            }
            return dispatch({ type: GET_DATA, payload: json.data, propiedadName });
        } catch (error) {
        }
    };
}
export function getCardCatalogo() {
    return async function (dispatch) {
        try {
        const json = await axios({
          method: "GET",
          withCredentials: true,
          Credentials: "includes",
          url: BASE_URL + "/card",
        });
        return dispatch({ type: GET_CARD_CATALOGO, payload: json.data.cards });
      } catch (error) {
      }
    };
  }
export function getSocial() {  //prop es el tipo (string) de coleccion a traer (headerbanner, productos, etc).
    return async function (dispatch) {
        try {
            const json = await axios({
                method: "GET",
                withCredentials: true,
                Credentials: "includes",
                url: BASE_URL + "/social",
            });
            return dispatch({ type: GET_SOCIAL, payload: json.data });
        } catch (error) {
        }
    };
}
export function getActivo() {  //prop es el tipo (string) de coleccion a traer (headerbanner, productos, etc).
    return async function (dispatch) {
        try {
            const json = await axios({
                method: "GET",
                withCredentials: true,
                Credentials: "includes",
                url: BASE_URL + "/getActivo",
            });
            console.log(json);
            return dispatch({ type: GET_ACTIVO, payload: json.data });
        } catch (error) {
            console.log(error);
        }
    };
}