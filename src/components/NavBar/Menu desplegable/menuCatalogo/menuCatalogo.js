import { useDispatch, useSelector } from 'react-redux'
import styles from './menuCatalogo.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Separador from '../../Separador/Separador.js'
import { cambiarMenuCatalogo, cerrarTodo } from '../../../../redux/actions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function MenuCatalogo(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let active=useSelector(state=>state.menuCatalgo)
  let obj = {
    hola:'hola',
    chau:'chau'
  }
  return(
    <div className={active?styles.containerActivo:styles.containerInActivo}>
      <h5 className={styles.bloque} onClick={()=>{dispatch(cambiarMenuCatalogo(false))}} ><BsChevronLeft/>CATALOGO</h5>
      <h5 className={styles.subBloque} onClick={()=>{navigate(`/Catalogo/:masterChef`);dispatch(cerrarTodo())}}>LINEA MASTERCHEF <BsChevronRight/> </h5>
      <h5 className={styles.subBloque}  >LINEA ACERO AL CARBONO <BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >LINEA VINTAGE<BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >LINEA VIDRIO<BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >LINEA XXXXXX<BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >LINEA XXXXXX<BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >LINEA XXXXXX<BsChevronRight/></h5>
      <div className={styles.separador}>
        <Separador/>
      </div>
    </div>
  )
}