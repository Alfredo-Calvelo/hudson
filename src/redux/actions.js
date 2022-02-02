export const ACTIVAR_MENU_DESPLEGABLE='ACTIVAR_MENU_DESPLEGABLE'
export const CAMBIAR_NAV_BAR = 'CAMBIAR_NAV_BAR'

export function activarMenuDesplegable(payload){
    console.log(payload);
    return{type:ACTIVAR_MENU_DESPLEGABLE, payload}
}
export function cambiarNavBar(payload){
    return{type:CAMBIAR_NAV_BAR, payload}
}
