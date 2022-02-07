export const ACTIVAR_MENU_DESPLEGABLE='ACTIVAR_MENU_DESPLEGABLE'
export const CAMBIAR_NAV_BAR = 'CAMBIAR_NAV_BAR'
export const CAMBIAR_OPCIONES = 'CAMBIAR_OPCIONES'
export const CAMBIAR_MENU_CATALOGO = 'CAMBIAR_MENU_CATALOGO'
export const CERRAR_TODO = 'CERRAR_TODO'
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
    // console.log('holas');
    return{type:CAMBIAR_MENU_CATALOGO, payload}
}
export function cerrarTodo(payload){
    return{type:CERRAR_TODO, payload}
}