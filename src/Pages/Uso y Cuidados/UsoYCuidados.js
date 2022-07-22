import styles from './UsoYCuidados.module.css'
import header from '../../imagenes/header.jfif'
import CuidadosCard from '../../components/UsoYCuidadosCard/CuidadosCard'
import Inspirado from '../../components/Inpirado/Inspirado'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'
import { createRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function UsoYCuidados(){
  document.title='Hudson | Uso y Cuidados'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  let params = useParams()
  
  let UsosYCuidados = useSelector(state=> state.UsosYCuidados)
  let cardActiva = useSelector(state=>state.cardActiva)
  const [elements, setElements]= useState([])
  const [alturaRef, setAlturaRef] = useState()
  let alturaPantalla = useSelector(state=>state)

  let hola = createRef()
  
  useEffect(()=>{
    window.scrollTo(0,alturaRef + hola.current.offsetTop - 120)
    
  },[alturaRef])
  return(
    <div>
      <div className={styles.header}>
        <div className={styles.imgDesktop}>
          <img className={styles.headerImg} src={header}></img>
        </div>
          <div className={styles.titles}>
            <h2 className={styles.title}>{'¿Ya recibiste tu producto Hudson?'.toLocaleUpperCase()}</h2>
            <h3 className={styles.subTitle}>Aprendé como utilizarlo correctamente para aprovechar al máximo y extender la vida útil.</h3>
          </div>
        <div ref={hola} className={styles.cards}>
          {UsosYCuidados.map((item,index)=>{
            if (index===cardActiva) {
              return<CuidadosCard seleccionado={params.seleccionado} setAltura={setAlturaRef} left={index%2===0?true:false} right={index%2===1?true:false} active={true} item={item} clave={index} key = {index} />
            }else{
              return<CuidadosCard seleccionado={params.seleccionado} setAltura={setAlturaRef} left={index%2===0?true:false} right={index%2===1?true:false} active={false} item={item} clave={index} key = {index} />
            }
          })}
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