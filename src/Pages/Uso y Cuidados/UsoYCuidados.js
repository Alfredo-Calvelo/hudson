import styles from './UsoYCuidados.module.css'
import header from '../../imagenes/header.jfif'
import CuidadosCard from '../../components/UsoYCuidadosCard/CuidadosCard'
import Inspirado from '../../components/Inpirado/Inspirado'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
export default function UsoYCuidados(){


  return(
    <div>
      <div className={styles.header}>
        <img className={styles.headerImg} src={header}></img>
        <div className={styles.titlesContainer}>
          <div className={styles.titles}>
            <h2 className={styles.title}>¿YA TENÉS TU HUDSON?</h2>
            <h3 className={styles.subTitle}> Aprendé como cuidar tu pieza y aprovechala al máximo.</h3>
          </div>
        </div>
        <div className={styles.cards}>
          <CuidadosCard/>
          <CuidadosCard/>
          <CuidadosCard/>
          <CuidadosCard/>
        </div>
        <SeparadorChico/>
        <Inspirado title='Hudson te inspira'/>
        <div className={styles.destacado}>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
        </div>
        <Footer contacto/>
      </div>
    </div>
  )
}