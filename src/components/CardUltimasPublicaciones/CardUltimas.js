import { createRef, useEffect, useState } from 'react'
import styles from './CardUltimas.module.css'
import './iframe.css'
export default function CardUltimas (props){
  const [style, setStyle] = useState({height:'calc(100% + 54px)'})
  let ref = createRef()
  useEffect(()=>{
    if (ref.current) {
      // let miIframe = document.getElementById('iframeIG')
      // let hola = miIframe.contentWindow
      // console.log(hola.top.outerHeight);
      // console.log(ref.current.clientHeight);
      // console.log(ref);
      // if (ref.current.clientHeight !== 0 && `${ref.current.clientHeight}px` !== style.height) {
      //   let altura = ref.current.scrollHeight
      //   setStyle({
      //     height: `${altura}px`
      //   })
      // }
      // console.log(ref);
    }
  },[ref])
  useEffect(()=>{
    // console.log(style);
  },[style])
  const[estado, setEstado] = useState(0)
  
  console.log(props);
  return(
    <div className={styles.container}>

      <iframe id='iframeIG' className={styles.imagen}    src={`https://www.instagram.com/p/${props.id}/embed`} frameborder="0"><div className={styles.infiltrado} ref={ref}>holaaa</div></iframe>
      
    </div>
  )

}