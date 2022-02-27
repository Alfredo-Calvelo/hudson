import styles from './RecetaCard.module.css'
//TAMAÑO DE LA IMAGEN = 1880x1253

export default function RecetaCard(props){
  
  return(
    <div className={styles.container}>
      <div className={styles.imagenContainer}>
        <img src={props.img} className={styles.img}/>
      </div>
      <h4 className={styles.title}>{props.title}</h4>
    </div>
  )
}