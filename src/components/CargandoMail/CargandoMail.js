import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './CargandoMail.module.css'
import { cargandoMail} from "../../redux/actions";


export default function CargandoMail(props) {

  const cargandoMail = useSelector(state=>state.cargandoMail)
  const dispatch = useDispatch()
  function cerrar() {
    dispatch(cargandoMail(false))
  }
  const state = useSelector(state=>state)
  return(
    <div className={cargandoMail?styles.containerVisible:styles.containerInvisible}>
      <div className={styles.cuadroCentro}>
        {
          cargandoMail?
          <div className={styles.errorMessage}>
            <div className={styles.titles}>
            <h3>{cargandoMail} </h3><h3 className={styles.asterisco}>*</h3>
            </div>
            <div onClick={e=>cerrar()} className={styles.volverIntentar}> Volver a intentarlo</div>
          </div>
          :null
        }
      </div>
    </div>
  )
}