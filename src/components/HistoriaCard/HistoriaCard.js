import styles from './HistoriaCard.module.css'
export default function HistoriaCard(props){
  return(
    <span className={styles.parrafo}>
      <span className={styles.año}>{props.año}</span>
      {' '}{props.text}
    </span>

  )
}

