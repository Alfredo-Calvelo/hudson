import { BsChevronRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'


export default function Card(props){
  const navigate = useNavigate()
  function ejecutable(){
    navigate(props.ruta)
  }

  return(
    <div className={props.left? styles.containerLeft:styles.containerRight} onClick={()=>ejecutable()}>
      <div className={props.left? styles.imagenLeft:styles.imagenRight}>
        <img alt='' src={props.img} />
      </div>
      <div className={props.left?styles.subCardLeft:styles.subCardRight} >
        <div>
        <h2 className={`${styles.tittle}  ${styles.espacios}`}>{props.tittle}</h2>
        <h3 className={`${styles.subTittle}  ${styles.espacios}`} >{props.subTittle}</h3>
        </div>
        <div className={styles.flecha}>
          <h5 className={`${styles.textRuta} ${styles.espacios}`} >{props.textRuta}</h5>
          <BsChevronRight/>
        </div>
      </div>
    </div>
  )


}