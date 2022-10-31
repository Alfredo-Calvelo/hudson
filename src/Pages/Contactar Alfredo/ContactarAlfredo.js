import styles from './ContactarAlfredo.module.css'
import logo from '../../imagenes/logoNegro.png'

export default function ContactarAlfredo(params) {
  return(
    <div className={styles.construccionContainer}>
      <div className={styles.cartelMedio}>
        <img className={styles.logo} src={logo}/>
        <p>Lo sentimos, estamos teniendo algunos problemas tecnicos.</p>
        <p>La web volverá a funcionar en breve</p>
      </div>
    </div>
  )
}