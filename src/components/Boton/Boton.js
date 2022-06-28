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
    <a className={styles.containerLink} style={{textDecoration:'none'}} href={props.link?props.link:null} download={props.download?props.download:false} target={props.actual?'':`_blank`}>
    <div className={styles.container}>
    <div style={{border:props.color?`1px solid ${props.color}`:''}} className={props.relleno?`${styles.relleno} ${dropMenu?styles.adelante:''}`:`${styles.noRelleno} ${dropMenu?styles.adelante:''}`} onClick={()=>{
      if(props.dropMenu){dropMenuFunction()}
      if (props.ruta){hola()}
      if (props.click) {props.click()} 
    }}>
      <span style={{color:props.color?props.color:''}} className={styles.text}>{props.text}</span>
        {props.dropMenu?
        <div className={styles.flecha}  >
          <BsChevronDown/>
        </div>
        :null
        }
    </div>
        
{/* ------------------ DROP MENU------------------------------- */}
      {props.dropMenu?
        <ul className={`${styles.lista}`}>
          <div className={`${styles.listContainer} ${dropMenu?styles.listaActiva:styles.listaInactiva}`}>
            <span className={`${styles.text} ${styles.li}`}>ARGENTINA</span>
            <span className={`${styles.text} ${styles.li}`}>URUGUAY</span>
            <span className={`${styles.text} ${styles.li}`}>USA</span>
          </div>
        </ul>
      :null  
    }
        
        


    </div>
  </a>
  )
}