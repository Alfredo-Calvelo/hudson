import styles from './Destacado.module.css'
import Boton from '../Boton/Boton'
import imgIzquierda from '../../imagenes/fuenteCuadrada.png'
import imgDerecha from '../../imagenes/bifero26CM.png'
import DestacadoCard from './destacadosCard/DestacadoCard'
import AliceCarousel from 'react-alice-carousel'
import { createRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/actions'
import { typeProducto } from '../../types'

export default function Destacado(props){
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getData(typeProducto))
  // },[])
  let items= [
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
  ]
  let responsive={
    0:{
      items:2
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
    <div ref={bloque} className={`${styles.container} ${alturaPantalla + vieportHeight/1.4 >alturaBloque?styles.visible:styles.invisible}`}>
      <div className={styles.titles}>
        <h3>Productos destacados</h3>
        <h5>VER MÁS</h5>
      </div>
      <div className={`${styles.bottom} ${styles.bottomMobile}`}>
          <AliceCarousel
          responsive={responsive}
          touchTracking
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          disableDotsControls
          disableButtonsControls

          />
        </div>
        <div className={`${styles.bottom} ${styles.bottomDesktop}`}>
          {items.map((elem,index)=>{
            return(
              elem
            )
          })}
        </div>
        <div className={styles.tiendaOnline}>
          <h5 className={`${styles.subTitle} ${styles.vender}`}>Conseguí todos nuestros productos en nuestras tiendas online.</h5>  
          <div className={styles.tiendas}>
            <Boton text='TIENDA ONLINE'  dropMenu relleno/>
          </div>
        </div>
    </div>
  )
}