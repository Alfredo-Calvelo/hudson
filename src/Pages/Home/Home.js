import Boton from '../../components/Boton/Boton'
import styles from './Home.module.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import Circulo from '../../components/circuloProductos/Circulo';
import conccionYHorneado from '../../imagenes/coccionYHorneado.png'
import  cafeTeYMate from '../../imagenes/cafeTeYMate.png'
import { useState } from 'react';
export default function Home(){
  const[translateX, setTranslateX] = useState(0)
  const [carrusellActivo, setCarrusellActivo]=useState(false)
  const items = [
  <Circulo srcImg={conccionYHorneado} label='Coccion y Horneado' />,
  <Circulo srcImg={cafeTeYMate} label='Cafe te y Mate' />,
  <Circulo srcImg={conccionYHorneado} label='Coccion y Horneado' />,
  <Circulo srcImg={conccionYHorneado} label='Coccion y Horneado' />,
  <Circulo srcImg={conccionYHorneado} label='Coccion y Horneado' />,
  <Circulo srcImg={cafeTeYMate} label='Cafe te y Mate' />,
  <Circulo srcImg={conccionYHorneado} label='Coccion y Horneado' />,
  <Circulo srcImg={conccionYHorneado} label='Coccion y Horneado' />,
]


  return(
    <div className={styles.Home}>
      <div className={styles.top}>
        <h1 className={styles.tittle}>SEMANA DE DESCUENTOS PARA MAMÁ</h1>
        <h3 className={styles.subTittle}> Con el cupón: MAMACHEF20. Sed aliquam et risus fusce a. Risus neque ultricies suscipit diam nulla ultrices volutpat.</h3>
        <h5 className={styles.aclaracion}>Linea de vigencia de la promoción.</h5>
        <div className={styles.boton} >
          <Boton text='TIENDA ONLINE' relleno={true} dropList/>
        </div>
      </div>
      <div className={styles.carrusell} onDoubleClick={e=>e.preventDefault()}
      onMouseDown={()=>setCarrusellActivo(true)}
      onMouseUp={()=>setCarrusellActivo(false)}
      onMouseMove={(e)=>carrusellActivo?setTranslateX(e.screenX):null}
      >
      

        <ul className={styles.lista} style={{transform:`translateX(${translateX}px)`}}>
          <li><Circulo srcImg={conccionYHorneado} label='Coccion y Horneado' /></li>
          <li><Circulo srcImg={cafeTeYMate} label='Cafe te y Mate' /></li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
          <li>chau</li>
        </ul>

      </div>
      <div className={styles.hola}>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div className={styles.hola}>hola</div>
    </div>
  )

}