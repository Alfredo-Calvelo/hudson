import styles from './InspirateCard.module.css'
import fondo from  '../../imagenes/Fondo Home.jpg'
import { BsChevronRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


export default function InspirateCard(props){
  const navigate = useNavigate()
  return(
    <div className={styles.container} >
      <div className={styles.imgContainer}>
        <img draggable={false} className={styles.headerImg} src={props.img}/>
      </div>
      <div className={styles.title} onClick={()=>navigate(`../${props.tipo.toLowerCase().includes('receta')?'Receta':props.tipo.toLowerCase().includes('consejo')?'Consejo' :''}/${props.title}`)}>
        <h3>{`${props.title}`}</h3>
        <h6 className={styles.verReceta}> {props.tipo.toLowerCase().includes('receta')?'VER RECETA':props.tipo.toLowerCase().includes('consejo')?'VER CONSEJO' :''}  <BsChevronRight/></h6>
      </div>
    </div>
  )
}