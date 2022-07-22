import Gradient from "../../components/Gradient/Gradient";
import styles from './Receta.module.css'
import fideos from './../../imagenes/fideos.jfif'
import Porcion from './../../imagenes/iconos/Porcion.png'
import reloj from './../../imagenes/iconos/reloj.png'
import estrella from './../../imagenes/iconos/estrella.png'
import Header from "../../components/Receta-Consejo-Header/Header";
import fotoPersona from '../../imagenes/beluLucius.png'
import SeparadorChico from "../../components/SeparadorChico/SeparadorChico";
import AliceCarousel from "react-alice-carousel";
import RecetaCarrusellCard from "../../components/RecetaCarrusellCard/RecetaCarrusellCard";
import { createRef, useEffect, useState } from "react";
import Inspirado from '../../components/Inpirado/Inspirado'
import Destacado from "../../components/destacados/Destacado";
import Footer from '../../components/Footer/Footer'
import DotButton from "../../components/DotButton/DotButton";
import { useSelector } from "react-redux";
import RecetaCarrusell from "./Carrusell/RecetaCarrusell";
import { useParams } from "react-router-dom";
export default function Receta(){
  document.title='Hudson | Receta'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const  [Dificultad,setDificultad] = useState('Baja')
  const [estrellas,setEstrellas] = useState([])
  const [items, setItems] = useState([
  ])


  const Recetas = useSelector(state=>state.Receta)
  const RecetaSeleccionadaTitle= useParams().selected
  const [RecetaSeleccionada,setRecetaSeleccionada] = useState()
  useEffect(()=>{
    if (Recetas && Recetas?.length>0) {
      let receta
      Recetas.forEach((elem,index)=>{
        if (elem.title === RecetaSeleccionadaTitle) {
          receta=elem
        }
      })
      setRecetaSeleccionada(receta)
      window.scrollTo(0,0)
    }
  },[Recetas,RecetaSeleccionadaTitle])
  useEffect(()=>{
    if (RecetaSeleccionada) {
      console.log(RecetaSeleccionada);
      console.log(RecetaSeleccionada?.desarrollo.includes('cloudinary'));
      if (RecetaSeleccionada?.dificultad ==='baja') setDificultad('Baja')
      if (RecetaSeleccionada?.dificultad ==='media') setDificultad('Media')
      if (RecetaSeleccionada?.dificultad ==='alta') setDificultad('Alta')
      let estrellas =[]
      for (let i = 0; i < 3; i++) {
        let dificultad = 0
        RecetaSeleccionada?.dificultad ==='baja'? dificultad=1:RecetaSeleccionada?.dificultad ==='media'?dificultad=2:RecetaSeleccionada?.dificultad ==='alta'? dificultad=3:null
        if (dificultad-1 >=i) {
          estrellas.push(<img key={i} className={styles.estrella} src={estrella}/>)
        }else {
          estrellas.push(<img key={i} className={styles.estrellaApagada} src={estrella}/>)
        }
      }
      setEstrellas(estrellas)
      let items =[]
      RecetaSeleccionada?.productos.forEach(elem=>{
        if (elem.archivo && elem.archivoId) {
          items =[...items, <RecetaCarrusellCard img={elem.archivo} title={elem.nombre} subTitle={elem.caracteristicas}/>]
        }
      })
      setItems(items)

    }
  },[RecetaSeleccionada])


  
  let productosContainerRef = createRef()
  const [alturaProductos, setAlturaProductos] = useState(0)
  const [desplegar, setDesplegar] =useState(false)


  function ponerAltura (){
    if (window.scrollY >= 1640) {
      setDesplegar(true)
    }
    if(window.scrollY <1640)
    {
      setDesplegar(false)
    }
  }
  window.addEventListener('scroll',ponerAltura)

  useEffect(()=>{
    setAlturaProductos(productosContainerRef.current?.offsetTop - productosContainerRef.current?.clientHeight)
  },[])

  
  const [clase, setClase] = useState(styles.InvisibleLento)
  useEffect(()=>{
    setClase(styles.VisibleLento)
  })
  return(
    <div>
      <Gradient/>
      <Header img={RecetaSeleccionada?.headerIMG} title={RecetaSeleccionada?.title} ruta='ver receta'/>
      <div className={clase}>
        <div className={styles.receta}>
          <div className={styles.recetaHeader}>
            <div className={styles.info}>
              <img src={Porcion} className={styles.icono}/>
              <h4 className={styles.cortado}>Porciones:{' '}{RecetaSeleccionada?.porciones}</h4>
            </div>
            <div className={styles.info}>
              <img src={reloj} className={styles.icono}/>
              <h4 className={styles.cortado}>Preparación:{' '}{RecetaSeleccionada?.tiempoDePreparacion} min.</h4>
            </div>
            <div className={styles.info}>
              <div className={styles.estrellas}>
                {estrellas}
              </div>
              <h4 className={styles.cortado}>Dificultad:{' '}{Dificultad}.</h4>
            </div>
          </div>
          <div className={styles.cocinero}>
            <a href={RecetaSeleccionada?.cocinero?.link} target='_blank'>
              <img src={RecetaSeleccionada?.cocinero?.img} className={styles.cocineroImg}/>
            </a>
            <a href={RecetaSeleccionada?.cocinero?.link} target='_blank'>
              <h4 className={styles.cocineroTitle}>Hoy Cocina:{' '} {RecetaSeleccionada?.cocinero?.nombre}</h4>
              <h4 className={styles.cocineroSubTitle}>Instagram </h4>
              <h4 className={styles.cocineroSubTitle}>{RecetaSeleccionada?.cocinero?.redSocial} </h4>
            </a>

          </div>
          <div className={styles.separadorLinea}>
            <SeparadorChico/>
          </div>
          <div className={styles.pasosContainer} >
            <div className={styles.pasos}>

            <h3 className={styles.ingredientesTitle}>Ingredientes</h3>
            <ul className={styles.ingredientesList}>
              {RecetaSeleccionada?.ingredientes.map(elem=>{
                return <li>{elem}</li>
              })}
            </ul>
            </div>
            <div className={styles.videoDesktop}>
              {
                RecetaSeleccionada?.desarrollo.includes('cloudinary')
                ?<img className={styles.FotoDesktop} src={RecetaSeleccionada?.desarrollo}/>
                :<iframe  className={styles.iframeDesktop} src={`https://www.youtube.com/embed/${RecetaSeleccionada?.desarrollo}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              }
            </div>
          </div>
        </div>
        <iframe className={styles.videoMobile} width='100%'height='250px' src="https://www.youtube.com/embed/dT4eVrFKEMo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <div className={`${styles.receta} ${styles.preparacion}`}>
          <h3 className={styles.ingredientesTitle}>Preparación</h3>
          <ol className={styles.preparacionList}>
          {RecetaSeleccionada?.preparacion.map(elem=>{
                return <li>{elem}</li>
              })}
          </ol>
          <h3 className={styles.ingredientesTitle}>Consejo</h3>
          <span className={styles.consejo}>{RecetaSeleccionada?.consejo}</span>
        </div>
      </div>
      <div className={styles.separador}></div>
      <div ref={productosContainerRef} className={`${styles.productosContainer} 
      ${
        !desplegar
        ?styles.Invisible
        :styles.Visible
        }
        `
      
      }>
        <div className={`${styles.productos} ${styles.productosDesktop}`}>
            <h3 className={styles.ingredientesTitle}>¿Que productos necesitas?</h3>
            <span className={`${styles.consejo} ${styles.consejoDesktop}`}>
              Para que esta receta te salga perfecta, 
              te recomendamos los siguientes productos Hudson.
            </span>

        </div>
        {
          items.length>0?
          <RecetaCarrusell items={items}/>
          :null
        }
        </div>
        


      <SeparadorChico/>
      <Inspirado title='Sigue inspirándote...'/>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado'
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer contacto/>
    </div>
  )
}