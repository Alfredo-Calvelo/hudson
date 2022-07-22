import styles from './ConocenosCard.module.css'
import {BsChevronRight} from 'react-icons/bs'
import conocenos from '../../imagenes/grupoGente.jfif'
import { useNavigate } from 'react-router-dom'
import img1 from '../../imagenes/FOTO NOSOTROS CAMARONES.jpg'

export default function ConocenosCard (props){
  const navigate = useNavigate()
  return(
      <div className={`${styles.conocenos} ${props.pastas?styles.pastas:props.camarones?styles.camarones:styles.fideos}`} style={{backgroundImage:`url(${img1})`}} >
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