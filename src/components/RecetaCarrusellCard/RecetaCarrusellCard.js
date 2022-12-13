import styles from './RecetaCarrusellCard.module.css'
import lineaCobre from '../../imagenes/lineaCobre.png'

export default function RecetaCarrusellCard(props){

  return(
    <div className={styles.container}>
      <a draggable={false} href={props.link} target='_blank' className={styles.link}>
        <img draggable={false} className={styles.img} src={props.img}/>
        <div className={styles.titles}>
          <h3 className={styles.title}>{props.title}</h3>
          <h3 className={styles.subTitle}>{props.subTitle}</h3>
        </div>
      </a>
    </div>
  )

}