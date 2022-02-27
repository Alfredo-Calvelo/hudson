import styles from './InspirateCard.module.css'
import fondo from  '../../imagenes/Fondo Home.jpg'
import { BsChevronRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


export default function InspirateCard(){
  const navigate = useNavigate()
  return(
    <div className={styles.container} onClick={()=>navigate('../Receta')}>
      <div className={styles.imgContainer}>
        <img className={styles.headerImg} src={fondo}/>
      </div>
      <div className={styles.title}>
        <h3>Pasta mediterranea express</h3>
        <h6 className={styles.verReceta}> VER RECETA  <BsChevronRight/></h6>
      </div>
    </div>
  )
}