import styles from './Construccion.module.css'
import logo from '../../imagenes/logoNegro.png'

export default function Construccion(params) {
  return(
    <div className={styles.construccionContainer}>
      <div className={styles.cartelMedio}>
        <img className={styles.logo} src={logo}/>
        <p>Lo sentimos, este sitio aún esta en construcción</p>
      </div>
    </div>
  )
}