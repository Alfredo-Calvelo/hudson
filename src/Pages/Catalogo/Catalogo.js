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
    if (catalogoSeleccionado?._id === undefined || catalogoSeleccionado.title!== params.catalog) {
      if (catalogos) {
        let paramsSinEspacio = params.catalog.split(' ')
        let paramsFinal = '' 
        paramsSinEspacio.forEach(elem=>{
          paramsFinal=paramsFinal + elem
        })
        catalogos.map(elem=>{
          let titleSinEspacions = elem.title.split(' ')
          let titleFinal = ''
          titleSinEspacions.forEach(elem=>{
            titleFinal=titleFinal + elem
          })
          if (titleFinal === paramsFinal) {
            setCatalogoSeleccionado(elem)
          }
        })
      }
    }
    window.scrollTo(0,0)
    console.log(params.catalog);
  },[catalogos,params.catalog])


  let estilo ={
    backgroundImage:`url(${catalogoSeleccionado?.headerIMG})`
  }
  const [masterChef,setMasterChef] = useState(false)
  function selectMasterChef() {
    let masterReal = false
    if (catalogoSeleccionado?.title.toLowerCase().includes('masterchef')) {
        masterReal= true
      }
    else if (catalogoSeleccionado?.footer.toLowerCase().includes('masterchef')) {
      masterReal= true
    }
    setMasterChef(masterReal)
  }
  useEffect(()=>{
    if (catalogoSeleccionado?.footer || catalogoSeleccionado?.title) {
      selectMasterChef()
    }
  },[catalogoSeleccionado])

  return(
    <div className={styles.container} >
      <div className={styles.header} style={estilo} >
        <h1 className={styles.desktopTitle}>{catalogoSeleccionado?.footer.toUpperCase()}</h1>
      </div>
      <div className={styles.titulos}>
        <div className={styles.tituloYFoto}>

            {catalogoSeleccionado?.icono?
            <img src={catalogoSeleccionado?.icono} className={styles.logo}/>
            :null  
          }
          <div className={styles.subHeader} style={{backgroundColor:catalogoSeleccionado?.colorFondo}} >
            <h2 className={styles.title} style={{color:catalogoSeleccionado?.colorTitulo}} >{catalogoSeleccionado?.title.toUpperCase()}</h2>
          </div>
        </div>
        
        <div className={styles.descargarCatalogo}>
          <Boton link={catalogoSeleccionado?.PDF} text='DESCARGAR CATÁLOGO' color={catalogoSeleccionado?.colorFondo}  />
        </div>
      </div>
      <div className={styles.Cards}>
        {catalogoSeleccionado?.bloques.map((elem, index)=>{
          if (index%2=== 1) {
            return <CardCatalogo elem={elem} color={catalogoSeleccionado?.colorFondo} mobile key={index} clave={index} left/>
          }else return <CardCatalogo elem={elem} color={catalogoSeleccionado?.colorFondo}  mobile key={index} right  clave={index} />
          
        })}
      </div>
      <div className={styles.cardsDesktop}>
        {catalogoSeleccionado?.bloques.map((elem, index)=>{
          if (index%2=== 1) {
            return <CardCatalogo color={catalogoSeleccionado?.colorFondo} masterChef={masterChef} elem={elem} key={index} clave={index} left/>
          }else return <CardCatalogo color={catalogoSeleccionado?.colorFondo} masterChef={masterChef} elem={elem} key={index} clave={index}right reverse />
        })}
      </div>
      <SeparadorChico/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' leftImg={imgIzquierda}  
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' rightImg={imgDerecha}/>
      <Footer contacto/>
    </div>
  )


}