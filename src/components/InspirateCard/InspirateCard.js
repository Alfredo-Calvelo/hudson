import styles from './InspirateCard.module.css'
import fondo from  '../../imagenes/Fondo Home.jpg'
import { BsChevronRight} from 'react-icons/bs'


export default function InspirateCard(){
  return(
    <div>
      <img className={styles.headerImg} src={fondo}/>
      <div className={styles.title}>
        <h3>Pasta mediterranea express</h3>
        <h6 className={styles.verReceta}> VER RECETA  <BsChevronRight/></h6>
      </div>
    </div>
  )
}