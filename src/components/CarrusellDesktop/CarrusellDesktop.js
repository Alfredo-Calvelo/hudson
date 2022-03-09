import { createRef, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useSelector } from 'react-redux'
import DotButton from '../DotButton/DotButton'
import styles from './CarrusellDesktop.module.css'



export default function CarrusellDesktop(props){

  let carrusell = createRef()

  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)
  let tiempoCarrusell = useSelector(state=>state.tiempoCarrusell)
  
  const [alturaCarrusell, setAlturaCarrusell] = useState(0)
  useEffect(()=>{
    setAlturaCarrusell(carrusell.current?.offsetTop)
  })
  return(
    <div className={styles.overflow}>
        <div ref={carrusell} className={`${styles.catalogCarrusellDesktop} 
        ${
          alturaPantalla + vieportHeight/1.2 <= alturaCarrusell
          ?styles.carrusellInvisible
          :styles.carrusellVisible
          }
          `}>
          <AliceCarousel
            touchTracking
            mouseTracking
            items={props.items}
            autoWidth
            renderDotsItem={DotButton}
            disableButtonsControls
            autoPlay
            autoPlayInterval={tiempoCarrusell}
            infinite
            />
        </div>
      </div>
  )
}