import styles from './CambiarIdioma.module.css'
import {BsChevronDown, BsChevronRight} from 'react-icons/bs'
import { useState } from 'react'



export default function CambiarIdioma (props){
  const[activo, setActivo]=useState(false)


  return(
    <div className={props.activo? styles.CambiarIdioma:styles.CambiarIdiomaActivo} onClick={()=>activo?setActivo(false):setActivo(true)}>
          <span className={!props.activo? styles.blanco:styles.negro}>ESP {activo?<BsChevronDown color='transparent' /> : <BsChevronDown  />}</span> 
          {activo
          ?<span className={!props.activo? styles.opcionBlanca:styles.opcionNegra }>ENG <BsChevronRight/></span> 
          :null
          }
    </div>


  )

}