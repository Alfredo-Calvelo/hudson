import styles from './DestacadoCard.module.css'

export default function DestacadoCard(props){
  

  return(
    <div className={styles.right}>
      <img className={styles.img} alt='' src={props.img}/>
      <h3 className={styles.title}>{props.title}</h3>
      <h5 className={styles.sbuTitle}>{props.subTitle}</h5>  
    </div>
  )
}