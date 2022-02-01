import logoBlanco from '../../imagenes/logoBlanco.png'
import logoNegro from '../../imagenes/logoNegro.png'
import SearchBar from '../SearchBar/SearchBar'
import CambiarIdioma from './CambiarIdioma/CambiarIdioma'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activarMenuDesplegable, cambiarNavBar } from '../../redux/actions'


export default function NavBar(){
  const dispatch = useDispatch()
  const navBarActiva = useSelector(state=>state.navBar)
  // const menuDesplegable = useSelector(state=>state.menuDesplegable)


  return(
    <div className={navBarActiva? styles.container:styles.containerInactivo} >
      <div className={styles.NavBar} onClick={()=>dispatch(cambiarNavBar())}>
        <div className={styles.logos}>
          <img className={navBarActiva? styles.logoActivo:styles.logo} src={logoNegro} />
          <img className={navBarActiva?styles.logo:styles.logoActivo} src={logoBlanco} />
        </div>


          <SearchBar activo={navBarActiva} />
          <CambiarIdioma activo={navBarActiva}/>
          <div className={navBarActiva? styles.menu:styles.menuActivo}
            onClick={()=>{
              dispatch(activarMenuDesplegable())
            }}
          >
            <AiOutlineMenu /> 
            
          </div>
      </div>
    </div>
  )
}


