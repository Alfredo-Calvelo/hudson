import styles from './Boton.module.css'
import { BsChevronDown } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { activarMenuDesplegable } from '../../redux/actions'

export default function Boton (props){
  let dropMenu= useSelector(state=>state.menuDesplegable)
  const dispatch = useDispatch()
  function dropMenuFunction(){
    if (dropMenu) {
      dispatch(activarMenuDesplegable(false))
    }else dispatch(activarMenuDesplegable(true))
  }

  return(
    <div>
    <div className={props.relleno?styles.relleno:styles.noRelleno} onClick={()=>dropMenuFunction()}>
      <span className={styles.text}>{props.text}</span>
        {props.dropList?
        <div className={styles.flecha}  >
          <BsChevronDown/>
        </div>
        :null
        }
    </div>
        {dropMenu
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