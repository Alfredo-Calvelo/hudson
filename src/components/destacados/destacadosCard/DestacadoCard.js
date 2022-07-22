import styles from './DestacadoCard.module.css'

export default function DestacadoCard(props){
  
  return(
    <a className={styles.right} target='_blank' href={props.enlace.includes('https') || props.enlace.includes('http')?props.enlace:`https://${props.enlace}` } style={{textDecoration:'none'}}>
      <img draggable={false} className={styles.img} alt='' src={props.img}/>
      <h3 className={styles.title}>{props.title}</h3>
      <h5 className={styles.sbuTitle}>{props.subTitle}</h5>  
    </a>
  )
}