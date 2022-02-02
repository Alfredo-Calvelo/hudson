export const ACTIVAR_MENU_DESPLEGABLE='ACTIVAR_MENU_DESPLEGABLE'
export const CAMBIAR_NAV_BAR = 'CAMBIAR_NAV_BAR'

export function activarMenuDesplegable(){
    return{type:ACTIVAR_MENU_DESPLEGABLE}
}
export function cambiarNavBar(payload){
    return{type:CAMBIAR_NAV_BAR, payload}
}
