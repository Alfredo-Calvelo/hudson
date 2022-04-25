import { createRef, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useSelector } from 'react-redux'
import DotButton from '../DotButton/DotButton'
import styles from './CarrusellMobile.module.css'



export default function CarrusellMobile(props){

  let carrusell = createRef()

  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)
  let tiempoCarrusell = useSelector(state=>state.tiempoCarrusell)
  
  const [alturaCarrusell, setAlturaCarrusell] = useState(0)
  useEffect(()=>{
    setAlturaCarrusell(carrusell.current?.offsetTop)
  })
  console.log(props);
  return(

        <div ref={carrusell} className={`${styles.catalogCarrusellMobile} 
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
            disableButtonsControls
            disableDotsControls
            // autoPlay
            autoPlayInterval={tiempoCarrusell}
            infinite
            controlsStrategy='alternate'
            paddingLeft={20}
            paddingRight={10}
            />
        </div>
  )
}