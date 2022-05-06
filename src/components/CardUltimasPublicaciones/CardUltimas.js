import { createRef, useEffect, useState } from 'react'
import styles from './CardUltimas.module.css'
export default function CardUltimas (props){
  const [style, setStyle] = useState({height:'calc(100% + 54px)'})
  let ref = createRef()
  
 
  const[estado, setEstado] = useState(0)
  
  return(
    <a className={styles.container} href={`https://www.instagram.com/p/${props.id}/`} target='_blank'>
      <iframe scrolling='none' draggable='false' id='iframeIG' className={styles.imagen} src={`https://www.instagram.com/p/${props.id}/embed`}><div className={styles.infiltrado} ref={ref}>holaaa</div></iframe>
    </a>
  )

}