import styles from './UsoYCuidados.module.css'
import header from '../../imagenes/header.jfif'
import CuidadosCard from '../../components/UsoYCuidadosCard/CuidadosCard'
import Inspirado from '../../components/Inpirado/Inspirado'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
export default function UsoYCuidados(){
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  
  let UsosYCuidados = useSelector(state=> state.UsosYCuidados)
  let cardActiva = useSelector(state=>state.cardActiva)
  const [elements, setElements]= useState([])

  function mapear(valor){
    let elements = UsosYCuidados.map((item,index)=>{
      if (index===cardActiva) {
        return<CuidadosCard active={true} item={item} clave={index} key = {index} />
      }else{
        return<CuidadosCard active={false} item={item} clave={index} key = {index} />
      }
    })
    return elements
  }
  

  useEffect(()=>{
    setElements(mapear())
  },[cardActiva])

  return(
    <div>
      <div className={styles.header}>
        <img className={styles.headerImg} src={header}></img>
        <div className={styles.titlesContainer}>
          <div className={styles.titles}>
            <h2 className={styles.title}>¿YA RECIBISTE TU PRODUCTO HUDSON?</h2>
            <h3 className={styles.subTitle}>Aprendé como utilizarlo correctamente para aprovechar al máximo y extender la vida útil.</h3>
          </div>
        </div>
        <div className={styles.cards}>
          {elements}
        </div>
        <SeparadorChico/>
        <Inspirado title='Hudson te inspira'/>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
        <Footer contacto/>
      </div>
    </div>
  )
}