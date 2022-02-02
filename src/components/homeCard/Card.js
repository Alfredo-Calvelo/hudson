import { BsChevronRight } from 'react-icons/bs'
import styles from './Card.module.css'


export default function Card(props){


  return(
    <div className={props.left? styles.containerLeft:styles.containerRight}>
      <div className={props.left? styles.imagenLeft:styles.imagenRight}>
        <img alt='' src={props.img} />
      </div>
      <div className={props.left?styles.subCardLeft:styles.subCardRight} >
        <h2 className={`${styles.tittle}  ${styles.espacios}`}>{props.tittle}</h2>
        <h3 className={`${styles.subTittle}  ${styles.espacios}`} >{props.subTittle}</h3>
        <div className={styles.flecha}>
          <h5 className={`${styles.textRuta} ${styles.espacios}`} >{props.textRuta}</h5>
          <BsChevronRight/>
        </div>
      </div>
    </div>
  )


}