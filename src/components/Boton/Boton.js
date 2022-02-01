import styles from './Boton.module.css'
import { BsChevronDown } from 'react-icons/bs'

export default function Boton (props){

  return(
    <div className={props.relleno?styles.relleno:styles.noRelleno}>
      <span>{props.text}</span>
        {props.dropList?
        <div className={styles.flecha} >
          <BsChevronDown/>
        </div>
        :null
        }
    </div>
  )

}