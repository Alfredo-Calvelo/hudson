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

  return(
    <div className={styles.container}>
    <div className={props.relleno?`${styles.relleno} ${dropMenu?styles.adelante:''}`:`${styles.noRelleno} ${dropMenu?styles.adelante:''} ${props.masterChef?styles.masterChef:''}`} onClick={()=>{
      if(props.dropMenu)dropMenuFunction()
      if (props.ruta)navigate(props?.ruta)
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
        {dropMenu
//------------------ DROP MENU-------------------------------
        ?<ul className={styles.lista}>
          <div className={styles.listContainer}>
            <span className={`${styles.text} ${styles.li}`}>ARGENTINA</span>
            <span className={`${styles.text} ${styles.li}`}>URUGUAY</span>
            <span className={`${styles.text} ${styles.li}`}>USA</span>
          </div>
        </ul>
        :null
        }


    </div>
  )

}