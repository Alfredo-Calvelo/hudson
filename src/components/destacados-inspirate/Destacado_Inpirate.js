import styles from './Destacado_Inpirate.module.css'
import imgDerecha from '../../imagenes/fuenteCuadrada.png'
import Boton from '../Boton/Boton'

export default function Destacado_Inpirate(props){
  
  // LAS IMAGENES PARA ESTAS CARDS TIENEN QUE SER DE  1200x900 PARA EL DISEÑO MOBILE

  
  return(
    <div className={styles.container}>
      <div className={styles.titles}>
        <h3>Productos destacados</h3>
        <h5>VER MÁS</h5>
      </div>
        <div className={styles.bottom}>
          <div className={styles.right}>
            <img className={styles.imgLeft} alt='' src={props.leftImg}/>
            <h3 className={styles.title}>{props.leftTitle}</h3>
            <h5 className={styles.sbuTitle}>{props.leftDescription}</h5>  
          </div>
          <div className={styles.right}>
            <img className={styles.imgLeft} alt='' src={props.rightImg}/>
            <h3 className={styles.title}>{props.rightTitle}</h3>
            <h5 className={styles.subTitle}>{props.rightDescription}</h5>  

          </div>
        </div>

            <h5 className={`${styles.subTitle} ${styles.vender}`}>Conseguí todos nuestros productos en nuestras tiendas online.</h5>  
            <div className={styles.tiendas}>
              <Boton text='TIENDA ONLINE'  dropList relleno/>
            </div>
    </div>
  )
}