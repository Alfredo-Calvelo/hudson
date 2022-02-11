import AliceCarousel from 'react-alice-carousel'
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
  return(
    <div>
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
  )
}