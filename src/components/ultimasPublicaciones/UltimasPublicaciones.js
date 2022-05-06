import { createRef, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useSelector } from 'react-redux'
import styles from './UltimasPublicaciones.module.css'


export default function UltimasPublicaciones (props){

  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)
  let bloque = createRef()

  const [alturaBloque,setAlturaBloque] = useState(0)
  useEffect(()=>{
    setAlturaBloque(bloque.current.offsetTop)
  },[bloque])
  
  // console.log(props);
  return(
    <div  ref={bloque} className={`${styles.container} ${alturaPantalla + vieportHeight/1.4 >alturaBloque?styles.visible:styles.invisible}`}>
      <div className={styles.titles}>
        <h3 className={styles.title}>Últimas publicaciones</h3>
        <h3 className={styles.arroba}>@HUDSONKITCHENWARE</h3>
      </div>
      <div className={styles.mobile}>
        <AliceCarousel
        touchTracking
        mouseTracking
        items={props.items}
        controlsStrategy="alternate"
        autoWidth
        disableDotsControls
        disableButtonsControls
        paddingLeft={10}
        paddingRight={10}
      />
      </div>
      <div className={styles.desktop}>
        {props.items}
      </div>
    </div>
  )

}