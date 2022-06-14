import { useNavigate } from "react-router-dom"
import styles from './DesplegableDesktopCard.module.css'
import { BsChevronRight } from "react-icons/bs"

export default function DesplegableDesktopCard(props){
    const navigate = useNavigate()

    return(
        <div className={styles.container} onClick={()=>navigate(props.ruta)}>
            <div className={styles.titulos}>
                <span style={props.masterchef?{color:'var(--naranjaMasterChef)'}:null} className={styles.title}>{props.title}</span>
                <span className={styles.subTitle}>{props.subTitle}</span>
                <span className={styles.rutaTitle}>{props.rutaTitle} <BsChevronRight/></span>
            </div>
            
            <img className={styles.img} src={props.img}/>
        </div>
    )
}