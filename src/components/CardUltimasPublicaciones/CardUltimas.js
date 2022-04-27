import { createRef, useEffect, useState } from 'react'
import styles from './CardUltimas.module.css'
import './iframe.css'
export default function CardUltimas (props){
  const [style, setStyle] = useState({height:'calc(100% + 54px)'})
  let ref = createRef()
  
 
  const[estado, setEstado] = useState(0)
  
  return(
    <div className={styles.container}>

      <iframe id='iframeIG' className={styles.imagen}    src={`https://www.instagram.com/p/${props.id}/embed`} frameborder="0"><div className={styles.infiltrado} ref={ref}>holaaa</div></iframe>
      
    </div>
  )

}