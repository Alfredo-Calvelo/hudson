import styles from './Destacado.module.css'
import Boton from '../Boton/Boton'
import imgIzquierda from '../../imagenes/fuenteCuadrada.png'
import imgDerecha from '../../imagenes/bifero26CM.png'

export default function Destacado(props){
  
  // LAS IMAGENES PARA ESTAS CARDS TIENEN QUE SER DE  1200x900 PARA EL DISEÑO MOBILE

  
  return(
    <div className={styles.container}>
      <div className={styles.titles}>
        <h3>Productos destacados</h3>
        <h5>VER MÁS</h5>
      </div>
        <div className={styles.bottom}>
          <div className={styles.right}>
            <img className={styles.imgLeft} alt='' src={imgIzquierda}/>
            <h3 className={styles.title}>{props.leftTitle}</h3>
            <h5 className={styles.sbuTitle}>{props.leftDescription}</h5>  
          </div>
          <div className={styles.right}>
            <img className={styles.imgLeft} alt='' src={imgDerecha}/>
            <h3 className={styles.title}>{props.rightTitle}</h3>
            <h5 className={styles.subTitle}>{props.rightDescription}</h5>  

          </div>
        </div>

            <h5 className={`${styles.subTitle} ${styles.vender}`}>Conseguí todos nuestros productos en nuestras tiendas online.</h5>  
            <div className={styles.tiendas}>
              <Boton text='TIENDA ONLINE'  dropMenu relleno/>
            </div>
    </div>
  )
}