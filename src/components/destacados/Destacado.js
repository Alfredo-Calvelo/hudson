import styles from './Destacado.module.css'
import Boton from '../Boton/Boton'
import imgIzquierda from '../../imagenes/fuenteCuadrada.png'
import imgDerecha from '../../imagenes/bifero26CM.png'
import DestacadoCard from './destacadosCard/DestacadoCard'
import AliceCarousel from 'react-alice-carousel'

export default function Destacado(props){
  
  // LAS IMAGENES PARA ESTAS CARDS TIENEN QUE SER DE  1200x900 PARA EL DISEÑO MOBILE
  let items= [
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,
    <DestacadoCard img={imgIzquierda} title={props.leftTitle} subTitle={props.leftDescription}/>,]
  let responsive={
    0:{
      items:2
    }
  }
  return(
    <div className={styles.container}>
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
          {items}
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