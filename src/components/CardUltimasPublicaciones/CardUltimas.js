import styles from './CardUltimas.module.css'

export default function CardUltimas (props){

  return(
    <div className={styles.imagen}>
      <img src={props.image}/>
      <div></div>
    </div>
  )

}