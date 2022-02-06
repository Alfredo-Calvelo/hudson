import { useParams } from "react-router-dom";
import styles from './Catalogo.module.css'
import FondoHome from '../../imagenes/Fondo Home.jpg'
import logoMasterChef from '../../imagenes/iconos/masterChef.png'
import Boton from "../../components/Boton/Boton";
import CardCatalogo from "../../components/CardCatalogo/CardCatalogo";
import Destacado_Inpirate from "../../components/destacados-inspirate/Destacado_Inpirate";
import imgIzquierda from '../../imagenes/fuenteCuadrada.png'
import imgDerecha from '../../imagenes/bifero26CM.png'
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";


export default function Catalogo(props){
  document.title=`Hudson | Catalogo`
  const params = useParams()
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
          <h2 className={styles.title} >LINEA HUDSON MASTERCHEF</h2>
        </div>
        <div className={styles.descargarCatalogo}>
          <Boton text='DESCARGAR CATÁLOGO'  />
        </div>
      <div className={styles.Cards}>
        <CardCatalogo/>
        <CardCatalogo/>
        <CardCatalogo/>
        <CardCatalogo/>
      </div>
      <div className={styles.Separador}></div>
      <div className={styles.prodDestacados}>
        <Destacado_Inpirate leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' leftImg={imgIzquierda}  
          rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' rightImg={imgDerecha}/>
      </div>
      <Footer/>
    </div>
  )


}