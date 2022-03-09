import { createRef, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useSelector } from 'react-redux'
import ConocenosCard from '../ConocenosCard/ConocenosCard'
import styles from './Conocenos.module.css'



export default function Conocenos (){

  let items =[
  <ConocenosCard title = 'conocenos' subTitle='Somos más que una marca, somos familia'/>,
  <ConocenosCard title = 'historia' subTitle='El camino que construimos'/>,
  <ConocenosCard title = 'orígen' subTitle='De dónde provienen nuestras piezas'/>,
]
  let responsive={
    0:{
      items:1
    }
  }
  
  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)
  let bloque = createRef()

  const [alturaBloque,setAlturaBloque] = useState(0)
  useEffect(()=>{
    setAlturaBloque(bloque.current.offsetTop)
  },[bloque])


  return(
    <div ref={bloque} className={`${alturaPantalla + vieportHeight/1.4 >alturaBloque?styles.visible:styles.invisible}`}>
      <div className={styles.carrusell}>
        <AliceCarousel
          touchTracking
          mouseTracking
          autoWidth
          responsive={responsive}
          items={items}
          controlsStrategy="alternate"
          disableDotsControls
          disableButtonsControls
        />
      </div>
      <div className={styles.items}>
        {items}
        
        
      </div>
    </div>
  )
}