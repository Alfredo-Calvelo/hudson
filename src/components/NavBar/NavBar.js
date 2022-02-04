import logoBlanco from '../../imagenes/logoBlanco.png'
import logoNegro from '../../imagenes/logoNegro.png'
import SearchBar from '../SearchBar/SearchBar'
import CambiarIdioma from './CambiarIdioma/CambiarIdioma'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { activarMenuDesplegable, cambiarOpciones} from '../../redux/actions'
import MenuDesplegable from './Menu desplegable/MenuDesplegable'
import MenuCatalogo from './Menu desplegable/menuCatalogo/menuCatalogo'
import { useNavigate } from 'react-router-dom'


export default function NavBar(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navBarActiva = useSelector(state=>state.navBar)
  let menuDesplegable= useSelector(state=>state.menuDesplegable)

  return(
    <div className={navBarActiva? styles.container:styles.containerInactivo} >
      {/* <MenuDesplegable/> */}
      <div className={styles.NavBar} >
        <div className={styles.logos} onClick={()=>navigate('/')}>
          <img alt='' className={navBarActiva? styles.logoActivo:styles.logo} src={logoNegro} />
          <img alt='' className={navBarActiva?styles.logo:styles.logoActivo} src={logoBlanco} />
        </div>


          <SearchBar activo={navBarActiva} />
          <CambiarIdioma activo={navBarActiva}/>
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
    </div>
  )
}


