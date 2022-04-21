import styles from './Boton.module.css'
import { BsChevronDown } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { activarMenuDesplegable } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'

export default function Boton (props){
  const navigate = useNavigate()
  let dropMenu= useSelector(state=>state.menuDesplegable)
  if (!props.dropMenu)dropMenu=false
  const dispatch = useDispatch()
  function dropMenuFunction(){
    if (dropMenu) {
      dispatch(activarMenuDesplegable(false))
    }else dispatch(activarMenuDesplegable(true))
  }
  function hola(params) {
    navigate(props?.ruta)
  }
  return(
    <a style={{textDecoration:'none'}} href={props.link?props.link:''} download='hola' target={props.actual?'':`_blank`}>
    <div className={styles.container} >
    <div className={props.relleno?`${styles.relleno} ${dropMenu?styles.adelante:''}`:`${styles.noRelleno} ${dropMenu?styles.adelante:''} ${props.masterChef?styles.masterChef:''}`} onClick={()=>{
      if(props.dropMenu)dropMenuFunction()
      if (props.ruta)hola()
      if (props.click) props.click() 
    }}>
      <span className={styles.text}>{props.text}</span>
        {props.dropMenu?
        <div className={styles.flecha}  >
          <BsChevronDown/>
        </div>
        :null
        }
    </div>
        
{/* ------------------ DROP MENU------------------------------- */}
        <ul className={`${styles.lista}`}>
          <div className={`${styles.listContainer} ${dropMenu?styles.listaActiva:styles.listaInactiva}`}>
            <span className={`${styles.text} ${styles.li}`}>ARGENTINA</span>
            <span className={`${styles.text} ${styles.li}`}>URUGUAY</span>
            <span className={`${styles.text} ${styles.li}`}>USA</span>
          </div>
        </ul>
        
        


    </div>
  </a>
  )
}