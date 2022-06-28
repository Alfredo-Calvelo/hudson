import { createRef, useEffect, useState } from 'react'
import styles from './CardUltimas.module.css'
export default function CardUltimas (props){
  let ref = createRef()
  const[height, setHeight ] = useState()
  
  useEffect(()=>{
    if (ref.current.clientWidth) {
      setHeight(ref.current.clientWidth)
    }
  },[ref])
  

  return(
    <a className={styles.container} href={`https://www.instagram.com/p/${props.id}/`} target='_blank'>
      <iframe  ref={ref} id='iframeIG' className={styles.imagen} src={`https://www.instagram.com/p/${props.id}/embed`} frameBorder="0"></iframe>
    </a>
  )

}