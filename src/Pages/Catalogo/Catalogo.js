import { useParams } from "react-router-dom";
import styles from './Catalogo.module.css'
import FondoHome from '../../imagenes/Fondo Home.jpg'
import logoMasterChef from '../../imagenes/iconos/masterChef.png'
import Boton from "../../components/Boton/Boton";
import CardCatalogo from "../../components/CardCatalogo/CardCatalogo";
import Destacado from "../../components/destacados/Destacado";
import imgIzquierda from '../../imagenes/fuenteCuadrada.png'
import imgDerecha from '../../imagenes/bifero26CM.png'
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'

export default function Catalogo(props){
  const params = useParams()
  document.title=`Hudson | Catalogo ${params.catalog}`
  console.log(params);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
    
  return(
    <div className={styles.container}>
      <div className={styles.header} >
        <img src={FondoHome}/>
      </div>
        <div className={styles.subHeader} >
          <img src={logoMasterChef} className={styles.logo}/>
          <h2 className={styles.title} >LÍNEA HUDSON MASTERCHEF</h2>
        </div>
        <div className={styles.descargarCatalogo}>
          <Boton text='DESCARGAR CATÁLOGO' masterChef  />
        </div>
      <div className={styles.Cards}>
        <CardCatalogo/>
        <CardCatalogo/>
        <CardCatalogo/>
        <CardCatalogo/>
      </div>
      <SeparadorChico/>
      <div className={styles.prodDestacados}>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' leftImg={imgIzquierda}  
          rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' rightImg={imgDerecha}/>
      </div>
      <Footer contacto/>
    </div>
  )


}