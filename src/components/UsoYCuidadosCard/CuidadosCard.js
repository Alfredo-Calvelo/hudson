import styles from './CuidadosCard.module.css'
import ollaConCosas from '../../imagenes/ollaConCosas.png'

export default function CuidadosCard(props){
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>PIEZAS DE ALUMINIO</h2>
        <h4 className={styles.subTitle}>Con antiadherente cerámico bicapa</h4>
      </div>
      <div className={styles.cuerpo}>
        <img className={styles.img} src={ollaConCosas}/>
        <ul className={styles.items}>
          <li>Utilizar el producto con fuego moderado siempre por debajo de la base.</li>
          <li>No utilizar fuego excesivo ni llama alta que abrace exteriormente por los costados.</li>
          <li>Apto cocinas Gas, Vitroceramica y Eléctrica.</li>
          <li>Fácil de Lavar, apto lavavajillas.</li>
        </ul>
      </div>
    </div>
  )
}