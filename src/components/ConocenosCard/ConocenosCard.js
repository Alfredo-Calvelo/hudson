import styles from './ConocenosCard.module.css'
import {BsChevronRight} from 'react-icons/bs'
import conocenos from '../../imagenes/grupoGente.jfif'
import { useNavigate } from 'react-router-dom'

export default function ConocenosCard (props){
  const navigate = useNavigate()
  return(
      <div className={styles.conocenos} style={{backgroundImage:`url(${conocenos})`}} >
          <div className={styles.subCard} onClick={()=>navigate('/Nosotros')} >
            <h2 className={`${styles.tituloConocer}  ${styles.espacios}`}>{props?.title.toUpperCase()}</h2>
            <h3 className={`${styles.subTitleConocer}  ${styles.espacios}`} >{props.subTitle}</h3>
            <div className={styles.flecha}>
              <h5 className={`${styles.textRuta} ${styles.espacios}`} >VER MAS</h5>
              <BsChevronRight/>
            </div>
          </div>
      </div>
  )
}