import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './FaltaCompletar.module.css'
import { faltaCompletarCartel } from "../../redux/actions";


export default function FaltaCompletar(props) {

  const faltaCompletar = useSelector(state=>state.faltaCompletar)
  const dispatch = useDispatch()
  function cerrar() {
    dispatch(faltaCompletarCartel(false))
  }
  const state = useSelector(state=>state)
  return(
    <div className={faltaCompletar?styles.containerVisible:styles.containerInvisible}>
      <div className={styles.cuadroCentro}>
        {
          faltaCompletar?
          <div className={styles.errorMessage}>
            <div className={styles.titles}>
            <h3>Falta completar algun campo que tenga el </h3><h3 className={styles.asterisco}>*</h3>
            </div>
            <div onClick={e=>cerrar()} className={styles.volverIntentar}> Volver a intentarlo</div>
          </div>
          :null
        }
      </div>
    </div>
  )
}