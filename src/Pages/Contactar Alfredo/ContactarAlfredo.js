import styles from './ContactarAlfredo.module.css'
import logo from '../../imagenes/logoNegro.png'

export default function ContactarAlfredo(params) {
  return(
    <div className={styles.construccionContainer}>
      <div className={styles.cartelMedio}>
        <img className={styles.logo} src={logo}/>
        <p>Lo sentimos, este sitio fue dado de baja</p>
        <p>Por favor contactar con Servicio Tecnico</p>
      </div>
    </div>
  )
}