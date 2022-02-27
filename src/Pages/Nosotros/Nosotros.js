import styles from './Nosotros.module.css'
import Gradient from '../../components/Gradient/Gradient'
import grupoGente from '../../imagenes/grupoGente.jfif'
import header from '../../imagenes/HEADER BANNER NOSOTROS.jpg'
import { useEffect } from 'react'
import HistoriaCard from '../../components/HistoriaCard/HistoriaCard'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Inspirado from '../../components/Inpirado/Inspirado'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
export default function Nosotros(){
  document.title='Hudson | Conocenos'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <div>
      <Gradient/>
      <div className={styles.bloque}>
        <div className={styles.header }>
          <h2 className={styles.headerTitle}>SOBRE NOSOTROS</h2>
          <div className={styles.imgDesktop}>
            <img className={styles.imgHeader}/>
          </div>
        </div>
        <div className={styles.bajada}>
          <h3 className={styles.title}>CONOCENOS</h3>
          <h5 className={styles.subTitle}>Somos más que una marca, somos familia</h5>
          <p className={styles.parrafo}>
            Sed donec ipsum vestibulum lacus. Dolor nisi, massa diam mauris. Lacus lorem nec feugiat pharetra, id elit aliquet sit. 
            Ut id elit consectetur purus orci enim, amet commodo mollis. 
            Mauris a viverra augue pharetra suspendisse pharetra senectus. 
            At netus massa, mauris mattis ut magna lectus mauris arcu. 
            Et ut tristique ullamcorper pretium sem sit ultrices massa proin. Sed lorem ornare interdum donec.
            A congue viverra donec faucibus eget quis nunc, neque. 
            Odio aliquam est faucibus ipsum eros, integer tristique cursus mauris. 
            Vitae ipsum tincidunt aliquet a, adipiscing mi sit. Tempor ut sagittis non maecenas ut. 
            Vel etiam elit diam quis et vel, sociis. Rhoncus ut elit vitae elit ut lorem pulvinar. 
            Mi sit lorem consequat quam sodales odio. Lacus a quis.
          </p>
        </div>
      </div>
      <div className={styles.bloque}>
        <div className={`${styles.header} ${styles.headerDesktop}`}>
          <img src={grupoGente} className={styles.imgHeader}/>
        </div>
        <div className={styles.bajada}>
          <h3 className={styles.title}>HISTORIA</h3>
          <h5 className={styles.subTitle}>El camino que construimos</h5>
          <p className={styles.parrafo2}>
          Sed donec ipsum vestibulum lacus. Dolor nisi, massa diam mauris. 
          Lacus lorem nec feugiat pharetra, id elit aliquet sit. 
          </p>
          <HistoriaCard año='2005' text='Ut id elit consectetur purus orci enim, amet commodo mollis. Mauris a viverra augue pharetra suspendisse pharetra senectus. At netus massa, mauris mattis ut magna lectus mauris arcu.'/>
          <HistoriaCard año='2007' text='Et ut tristique ullamcorper pretium sem sit ultrices massa proin. Sed lorem ornare interdum donec.'/>
          <HistoriaCard año='2012' text='A congue viverra donec faucibus eget quis nunc, neque. Odio aliquam est faucibus ipsum eros, integer tristique cursus mauris. Vitae ipsum tincidunt aliquet a, adipiscing mi sit. Tempor ut sagittis non maecenas ut.'/>
          <HistoriaCard año='2017' text ='Vel etiam elit diam quis et vel, sociis. Rhoncus ut elit vitae elit ut lorem pulvinar. Mi sit lorem consequat quam sodales odio. Lacus a quis.'/>
        </div>
      </div>
      <div className={styles.bloque}>
        <div className={`${styles.header} ${styles.headerDesktop}`}>
          <img src={grupoGente} className={styles.imgHeader}/>
        </div>
        <div className={styles.bajada}>
          <h3 className={styles.title}>ORIGEN</h3>
          <h5 className={styles.subTitle}>De dónde provienen nuestras piezas</h5>
          <p className={styles.parrafo}>
            Sed donec ipsum vestibulum lacus. Dolor nisi, massa diam mauris. Lacus lorem nec feugiat pharetra, id elit aliquet sit. Ut id elit consectetur purus orci enim, amet commodo mollis. Mauris a viverra augue pharetra suspendisse pharetra senectus. At netus massa, mauris mattis ut magna lectus mauris arcu. Et ut tristique ullamcorper pretium sem sit ultrices massa proin. Sed lorem ornare interdum donec.
            A congue viverra donec faucibus eget quis nunc, neque. Odio aliquam est faucibus ipsum eros, integer tristique cursus mauris.
          </p>
        </div>
      </div>
      <SeparadorChico/>
      <Inspirado title='Hudson te inspira'/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
      rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer contacto/>
    </div>
  )
}