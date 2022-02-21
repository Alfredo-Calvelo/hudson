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
import { createRef, useEffect } from "react";
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'

export default function Catalogo(props){
  const params = useParams()
  document.title=`Hudson | Catalogo ${params.catalog}`
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  let items = [
    <CardCatalogo/>,
    <CardCatalogo/>,
    <CardCatalogo/>,
    <CardCatalogo/>,
  ]
  return(
    <div className={styles.container}>
      <div className={styles.header}style={{backgroundImage:'url(https://s3-alpha-sig.figma.com/img/baae/f330/90292b464aac1f6d499e88cbde4c3646?Expires=1645401600&Signature=EEWwBIfKNxix0G3yRPEdGQsZR~n4Z7nUC1d94YuMacd47msYQl7SrkV8w8B75XZbvnMGRaXAJaA-FHml0tLTx9cr0G-6G4bKo0NgnCY2HifFSUmNELBzxe8QGqX~45bngPY0lW~ZhbfgfW2PYJzMDD-HlEQujVLXiA2v0gweOuuzxqkEe2BFo-9gsBWe3pIODRLDJIM90Yx9FTzMQ7gxfO5E2PUNhtBK3Aef9nH4KFqj9Fs0kh26Bih1fCtTpLxRKUoX7dVx6lrbrPa1ruYxKWqUpjEE52jw-PwZJMmxO5VvbBjLquH5xtcn9-Yg9j3HuV5fIDhc-hH8IwLRKSBa5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'}}  >
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
        {items}
      </div>
      <div className={styles.cardsDesktop}>
        {items.map((elem, index)=>{
          if (index%2=== 0) {
            return <CardCatalogo reverse left/>
          }else return <CardCatalogo right />
        })}
      </div>
      <SeparadorChico/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' leftImg={imgIzquierda}  
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' rightImg={imgDerecha}/>
      <Footer contacto/>
    </div>
  )


}