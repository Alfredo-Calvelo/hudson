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
import { createRef, useEffect, useState } from "react";
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import { useSelector } from "react-redux";

export default function Catalogo(props){
  const params = useParams()
  document.title=`Hudson | Catalogo ${params.catalog}`
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  let catalogos = useSelector(state=>state.Catalogo)
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState()
  useEffect(()=>{
    if (catalogos) {
      catalogos.map(elem=>{
        if (elem.title === params.catalog) {
          setCatalogoSeleccionado(elem)
        }
      })
    }
    window.scrollTo(0,0)
  },[catalogos,params.catalog])
  useEffect(()=>{

  },[params])


  let estilo ={
    backgroundImage:`url(${catalogoSeleccionado?.headerIMG})`
  }
  function selectMasterChef(params) {
  if (catalogoSeleccionado?.title.includes('mastercheff')) {
      return true
    }
    return false
  }
  const masterChef = selectMasterChef()
  return(
    <div className={styles.container} >
      <div className={styles.header} style={estilo} >
        <h1 className={styles.desktopTitle}>{catalogoSeleccionado?.title}</h1>
      </div>
      <div className={styles.titulos}>
        <div className={styles.subHeader} >
          <img src={logoMasterChef} className={styles.logo}/>
          <h2 className={styles.title} >{catalogoSeleccionado?.footer}</h2>
        </div>
        <div className={styles.descargarCatalogo}>
          <Boton link={catalogoSeleccionado?.PDF} text='DESCARGAR CATÁLOGO' masterChef  />
        </div>
      </div>
      <div className={styles.Cards}>
        {catalogoSeleccionado?.bloques.map((elem, index)=>{
          if (index%2=== 1) {
            return <CardCatalogo elem={elem}  mobile key={index} clave={index} left/>
          }else return <CardCatalogo elem={elem}  mobile key={index} right  clave={index} />
          
        })}
      </div>
      <div className={styles.cardsDesktop}>
        {catalogoSeleccionado?.bloques.map((elem, index)=>{
          if (index%2=== 1) {
            return <CardCatalogo elem={elem} key={index} clave={index} left/>
          }else return <CardCatalogo elem={elem} key={index} clave={index}right reverse />
        })}
      </div>
      <SeparadorChico/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' leftImg={imgIzquierda}  
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' rightImg={imgDerecha}/>
      <Footer contacto/>
    </div>
  )


}