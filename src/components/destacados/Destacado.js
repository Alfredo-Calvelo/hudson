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
  let productos = useSelector(state=>state?.Producto)
  let itemsReales = productos?.map((elem,index)=>{
    return<DestacadoCard key={index} img={elem.archivo} title={elem.nombre} subTitle={elem.caracteristicas} enlace={elem.link}/>
  })
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
        <a href='https://shop.hudsoncocina.com/' target={'_blank'} className={styles.verMas}>VER MÁS</a>
      </div>
      <div className={`${styles.bottom} ${styles.bottomMobile}`}>
          <AliceCarousel
          responsive={responsive}
          touchTracking
          mouseTracking
          paddingLeft={5}
          paddingRight={5}
          items={itemsReales}
          controlsStrategy="alternate"
          disableDotsControls
          disableButtonsControls

          />
        </div>
        <div className={`${styles.bottom} ${styles.bottomDesktop}`}>
          {productos?.map((elem,index)=>{
            return<DestacadoCard key={index} img={elem.archivo} title={elem.nombre} subTitle={elem.caracteristicas} enlace={elem.link}/>
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