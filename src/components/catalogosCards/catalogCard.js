import styles from './CatalogCard.module.css'
import { BsChevronRight } from 'react-icons/bs'

// LAS IMAGENES PARA ESTAS CARDS TIENEN QUE SER DE  1200x900 PARA EL DISEÑO MOBILE


export default function CatalogCard(props){

  

  return(
    <div className={styles.requiredContainer}>
      <div className={styles.container} >
        <div className={styles.top}>
          <img alt='' className={styles.img} src={props.img}/>
        </div>
        <div className={props.tittle.includes(' ')? styles.bottomSpace: styles.bottom} >
          {props.tittle.includes(' ')
          ?
          <div>
            <h1 className={styles.Linea} >LÍNEA</h1>
            <h1 className={styles.tittle} >{props.tittle}</h1>
          </div>
          :<h1 className={styles.tittle} >LÍNEA {props.tittle}</h1>
          }
          <h3 className={styles.subTittle}>{props.subTittle}</h3>
          <div className={styles.flecha} >
            <h5 className={styles.textRuta} >{props.textRuta}</h5>
            <BsChevronRight/>
          </div>
        </div>
      </div>
    </div>
  )
}