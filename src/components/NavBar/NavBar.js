import logoBlanco from '../../imagenes/logoBlanco.png'
import logoNegro from '../../imagenes/logoNegro.png'
import SearchBar from '../SearchBar/SearchBar'
import CambiarIdioma from './CambiarIdioma/CambiarIdioma'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { activarMenuDesplegable} from '../../redux/actions'


export default function NavBar(){
  const dispatch = useDispatch()
  const navBarActiva = useSelector(state=>state.navBar)


  return(
    <div className={navBarActiva? styles.container:styles.containerInactivo} >
      <div className={styles.NavBar} >
        <div className={styles.logos}>
          <img alt='' className={navBarActiva? styles.logoActivo:styles.logo} src={logoNegro} />
          <img alt='' className={navBarActiva?styles.logo:styles.logoActivo} src={logoBlanco} />
        </div>


          <SearchBar activo={navBarActiva} />
          <CambiarIdioma activo={navBarActiva}/>
          <div className={navBarActiva? styles.menu:styles.menuActivo}
            onClick={()=>{
              dispatch(activarMenuDesplegable())
            }}
          >
            <div className={!navBarActiva? styles.activo:styles.inactivo}>
              <AiOutlineMenu /> 

            </div>
            
          </div>
      </div>
    </div>
  )
}


