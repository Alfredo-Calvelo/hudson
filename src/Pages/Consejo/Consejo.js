import Header from '../../components/Receta-Consejo-Header/Header'
import styles from './Consejo.module.css'
import brocoli from '../../imagenes/brocoli.jfif'
import Gradient from '../../components/Gradient/Gradient'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Inspirado from '../../components/Inpirado/Inspirado'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
import fotoPersona from '../../imagenes/gastonDalmau.png'
import { useEffect } from 'react'
export default function Consejo (){
  document.title='Hudson | Trucos y Consejos'
  let text = "Lavar los vegetales enteros y cortarlos o pelarlos justo antes de utilizarlos para evitar la oxidación en contacto con el aire.\n\
  Se deben agregar las verduras al agua hirviendo y no antes.\
  Así, el tiempo de cocción se reduce y habrá menor contacto con el agua dónde pueden escaparse los nutrientes.\n\
  Agregar vinagre o jugo de limón en el agua de cocción contribuye a la conservación de las vitaminas y a la absorción de algunos minerales como el hierro. Ademas, es una forma de mantener el color de las verduras como por ejemplo los alcauciles.\n\
  Agregar bicarbonato de sodio en el agua de cocción para mantener el color de las verduras y disminuir su dureza, es una práctica poco recomendable ya que destruye algunos nutrientes como la vitamina C."

  let cortado = text.split('\n')
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  

  return(
    <div>
      <Gradient/>
      <Header img={brocoli} title='como conservar los nutrientes durante el hervor'/>
      <div className={styles.consejo}>
        <p className={styles.parrafo}>Comer verduras frescas, sin pelar ni cocinar hace que su aporte nutricional permanezca intacto. Al hervirlas, hay que tener en cuenta algunas pautas para que los nutrientes no se pierdan durante la cocción.</p>
      </div>
      <div className={styles.consejero}>
          <img src={fotoPersona} className={styles.consejeroImg}/>
          <div >
            <h4 className={styles.consejeroTitle}>Hoy Cocina:{' '} Belu Lucius</h4>
            <h4 className={styles.consejeroSubTitle}>ig @belulucius</h4>
          </div>

        </div>
      <div className={styles.videoDesktop} >
        <iframe width='100%'height='100%' src="https://www.youtube.com/embed/dT4eVrFKEMo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
        <iframe className={styles.videoMobile} width='100%'height='250px' src="https://www.youtube.com/embed/dT4eVrFKEMo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div className={`${styles.consejo} ${styles.consejoDesktop}`}>
        <h3 className={styles.title}>Algunos consejos</h3>
        <ul className={styles.algunosConsejos}>
          {cortado.map((elem, index)=><li key={index}>{elem}</li>)}
        </ul>
      </div>
      <SeparadorChico/>
      <Inspirado title='Sigue inspirandote...'/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
      rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer contacto/>
    </div>
  )
}                                                                                                                                                  