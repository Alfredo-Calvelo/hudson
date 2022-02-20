import logoBlanco from '../../imagenes/logoBlanco.png'
import logoNegro from '../../imagenes/logoNegro.png'
import SearchBar from '../SearchBar/SearchBar'
import CambiarIdioma from './CambiarIdioma/CambiarIdioma'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cambiarOpciones} from '../../redux/actions'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DesplegableDesktop from './DesplegableDesktop/DesplegableDesktop'


export default function NavBar(){
  const router = useLocation()
  let ruta =router.pathname.split('/');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navBarActiva = useSelector(state=>state.navBar)
  let menuDesplegable= useSelector(state=>state.menuDesplegable)

  const [altura, setAltura]= useState(0)

  function navegar(ruta){
    navigate(ruta)
  }
  function desplegar (){
    if (altura === 0) {
      setAltura(350)
    }
    else setAltura(0)
  }
  return(
    <div className={navBarActiva? styles.container:styles.containerInactivo} >
      <div className={styles.NavBar} >
        <div className={styles.logos} onClick={()=>{navigate('/');window.scrollTo(0,0)}}>
          <img alt='' className={navBarActiva? styles.logoActivo:styles.logo} src={logoNegro} />
          <img alt='' className={navBarActiva?styles.logo:styles.logoActivo} src={logoBlanco} />
        </div>
        <div className={styles.desktopLinks}>
          <span className={styles.desktopLink} onClick={()=>desplegar()}>PRODUCTOS</span>
          <span className={styles.desktopLink} onClick={()=>desplegar()} >CÁTALOGO</span>
          <span className={ruta[1]==='Inspirate'?styles.desktopLinkRojo:styles.desktopLink} onClick={()=>navegar('../Inspirate/1')}>INSPÍRATE</span>
          <span className={ruta[1]==='Uso_Y_Cuidados'?styles.desktopLinkRojo:styles.desktopLink} onClick={()=>navegar('../Uso_Y_Cuidados')}>USO Y CUIDADOS</span>
          <span className={ruta[1]==='Nosotros'?styles.desktopLinkRojo:styles.desktopLink} onClick={()=>navegar('Nosotros')}>NOSOTROS</span>
          <span className={ruta[1]==='Contacto'?styles.desktopLinkRojo:styles.desktopLink} onClick={()=>navegar('Contacto')}>CONTACTO</span>
        </div>

          <div className={styles.cambiarIdiomaDesktop}>
            <CambiarIdioma activo={navBarActiva}/>
            <SearchBar activo={navBarActiva} />
          </div>


          <div className={styles.cambiarIdiomaMobile}>
            <SearchBar activo={navBarActiva} />
            <CambiarIdioma activo={navBarActiva}/>
          </div>
          <div className={navBarActiva? styles.menu:styles.menuActivo}
          onClick={()=>{
            if (menuDesplegable) {
              dispatch(cambiarOpciones(false))
            }else dispatch(cambiarOpciones(true))
            
            }}
          >
            <div className={!navBarActiva? styles.activo:styles.inactivo} >
              <AiOutlineMenu />  
            </div>
            
            
          </div>
      </div>
      <DesplegableDesktop verMas='VER TODOS' altura={altura} title='PRODUCTOS'/>
    </div>
  )
}


