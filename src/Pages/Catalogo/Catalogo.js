import { useParams } from "react-router-dom";
import styles from './Catalogo.module.css'
import FondoHome from '../../imagenes/FondoHome.jpg'
import logoMasterChef from '../../imagenes/iconos/masterChef.png'
import Boton from "../../components/Boton/Boton";
import CardCatalogo from "../../components/CardCatalogo/CardCatalogo";
import Destacado from "../../components/destacados/Destacado";
import imgIzquierda from '../../imagenes/fuenteCuadrada.png'
import imgDerecha from '../../imagenes/bifero26CM.png'
import Footer from "../../components/Footer/Footer";
import { createRef, useEffect } from "react";
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'

export default function Catalogo(props){
  const params = useParams()
  document.title=`Hudson | Catalogo ${params.catalog}`
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  let items = [
    <CardCatalogo />,
    <CardCatalogo />,
    <CardCatalogo />,
    <CardCatalogo />,
  ]
  let estilo ={
    backgroundImage:`url(${FondoHome})`
  }
  return(
    <div className={styles.container} >
      <div className={styles.header} style={estilo} >
        <h1 className={styles.desktopTitle}>DE LA TV A TU COCINA</h1>
      </div>
      <div className={styles.titulos}>
        <div className={styles.subHeader} >
          <img src={logoMasterChef} className={styles.logo}/>
          <h2 className={styles.title} >LÍNEA HUDSON MASTERCHEF</h2>
        </div>
        <div className={styles.descargarCatalogo}>
          <Boton text='DESCARGAR CATÁLOGO' masterChef  />
        </div>
      </div>
      <div className={styles.Cards}>
        {items.map((elem, index)=>{
          if (index%2=== 1) {
            return <CardCatalogo  mobile key={index} clave={index} left/>
          }else return <CardCatalogo  mobile key={index} right  clave={index} />
          
        })}
      </div>
      <div className={styles.cardsDesktop}>
        {items.map((elem, index)=>{
          if (index%2=== 1) {
            return <CardCatalogo key={index} clave={index} left/>
          }else return <CardCatalogo key={index} clave={index}right reverse />
        })}
      </div>
      <SeparadorChico/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' leftImg={imgIzquierda}  
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' rightImg={imgDerecha}/>
      <Footer contacto/>
    </div>
  )


}