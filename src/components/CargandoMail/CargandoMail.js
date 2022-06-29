import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './CargandoMail.module.css'
import { cargandoMail} from "../../redux/actions";
import {CircularProgress} from '@mui/material';


export default function CargandoMail(props) {

  const cargandoMailInfo = useSelector(state=>state.cargandoMail)
  const dispatch = useDispatch()
  function cerrar() {
    dispatch(cargandoMail(false))
  }
  const state = useSelector(state=>state)
  return(
    <div className={cargandoMailInfo?styles.containerVisible:styles.containerInvisible}>
      <div className={styles.cuadroCentro}>
        {
          cargandoMailInfo?
          <div className={styles.errorMessage}>
            <div className={styles.titles}>
              {
                cargandoMailInfo==='Por Favor Aguarde, estamos enviando sus datos'?
                <>
                  <h3>{cargandoMailInfo} </h3>
                  <CircularProgress className={styles.loader} />
                </>
              :<div className={styles.seguirNavegando}>
                <h3>{cargandoMailInfo}</h3>
                <div onClick={e=>window.location.reload()} className={styles.volverIntentar}> {cargandoMailInfo === 'Email cargado correctamente'?'Seguir Navegando':'Volver a intentar'}</div>
              </div>
              }
            </div>
            <div onClick={e=>cerrar()} className={styles.volverIntentar}> </div>
          </div>
          :null
        }
      </div>
    </div>
  )
}