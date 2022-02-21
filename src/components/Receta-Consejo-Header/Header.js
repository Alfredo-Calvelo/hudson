import styles from './Header.module.css'
import fondo from  '../../imagenes/Fondo Home.jpg'
import { BsChevronRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'



export default function Header(props){
  const navigate = useNavigate()
  return(
    <div className={styles.container} onClick={()=>navigate('../Receta')}>
      <img className={styles.headerImg} src={props.img}/>
      <div className={styles.title}>
        <h3>{props.title.toUpperCase()}</h3>
      </div>
    </div>
  )
}