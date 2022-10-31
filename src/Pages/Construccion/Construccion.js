import styles from './Construccion.module.css'
import logo from '../../imagenes/logoNegro.png'
import Boton from '../../components/Boton/Boton'

export default function Construccion(params) {
  return(
    <div className={styles.construccionContainer}>
      <div className={styles.cartelMedio}>
        <img className={styles.logo} src={logo}/>
        <p>Lo sentimos, esta pagina no existe.</p>
        <Boton  ruta='../' text='REGRESAR'/>
      </div>
    </div>
  )
}