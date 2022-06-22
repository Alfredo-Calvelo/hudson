import Boton from '../../components/Boton/Boton'

import styles from './Home.module.css'
import AliceCarousel from 'react-alice-carousel'
import Circulo from '../../components/circuloProductos/Circulo';
import conccionYHorneado from '../../imagenes/Circulos/coccionYHorneado.png'
import cafeTeYMate from '../../imagenes/Circulos/cafeTeYMate.png'
import Utensillios from '../../imagenes/Circulos/Utensillios.png'
import Vajilla from '../../imagenes/Circulos/Vajilla.png'
import Reposteria from '../../imagenes/Circulos/Reposteria.png'
import Organizacion from '../../imagenes/Circulos/Organizacion.png'
import lineaMasterchef from '../../imagenes/lineaMasterchef.png'
import cocinaConHudson from '../../imagenes/cocinaConHudson.jfif'
import trucosYConsejos from '../../imagenes/trucosYConsejos.jfif'
import elImperdible from '../../imagenes/elImperdible.png'
import Card from '../../components/homeCard/Card';
import Plus from '../../imagenes/Plus.png'
import CatalogCard from '../../components/catalogosCards/catalogCard';
import lineaVintage from '../../imagenes/lineaVintage.png'
import carbonSteel from '../../imagenes/carbonSteel.png'
import lineaCobre from '../../imagenes/lineaCobre.png'
import Destacado from '../../components/destacados/Destacado';
import Footer from '../../components/Footer/Footer';
import UltimasPublicaciones from '../../components/ultimasPublicaciones/UltimasPublicaciones';
import image1 from '../../imagenes/UltimasPublicaciones/1.png' 
import image2 from '../../imagenes/UltimasPublicaciones/2.png' 
import image3 from '../../imagenes/UltimasPublicaciones/3.png' 
import image4 from '../../imagenes/UltimasPublicaciones/4.png' 
import image5 from '../../imagenes/UltimasPublicaciones/5.png' 
import image6 from '../../imagenes/UltimasPublicaciones/6.png' 
import CardUltimas from '../../components/CardUltimasPublicaciones/CardUltimas';
import { createRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Conocenos from '../../components/Conocenos/Conocenos';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import FondoHome from '../../imagenes/FondoHome.jpg'
import { useDispatch, useSelector } from 'react-redux';
import DotButton from '../../components/DotButton/DotButton';
import CarrusellDesktop from '../../components/CarrusellDesktop/CarrusellDesktop';
import CarrusellMobile from '../../components/CarrusellMobile/CarrusellMobile';
import VideoMobile from '../../components/Video/VideoMobile/VideoMobile';
import VideoDesktop from '../../components/Video/VideoDesktop/VideoDesktop';
import instagramLogo from '../../imagenes/iconos/instagramGris.png'
import headerGrande from '../../imagenes/foto header grande.jpg'
import CarrusellArrowRight from '../../components/CarrusellArrow/Rigth/CarrusellArrowRight';
import CarrusellArrowLeft from '../../components/CarrusellArrow/Left/CarrusellArrowLeft';
import CarrusellHeaderDesktrop from './CarrusellHeaderDesktop/CarrusellHeaderDesktrop';
export default function Home(){
  document.title='Hudson | Home'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [destacadaCatalogo, setDestacadaCatalogo] = useState()
  const [destacadaProducto, setDestacadaProducto] = useState()
  const [destacadaReceta, setDestacadaReceta] = useState()
  const [destacadaConsejo, setDestacadaConsejo] = useState()

  const HeaderBanner = useSelector(state=>state.HeaderBanner)
  const state = useSelector(state=>state)
  const social = useSelector(state=>state?.social)
  useEffect(()=>{

    if (state?.CategoriasHome) {
      let itemsLocales = state.CategoriasHome.map((elem,index)=>{
        return<Circulo ruta={elem.link} key ={index} srcImg={elem.image} label={elem.title}/>
      })
      if (items.length <=0) {
        setItems(itemsLocales)
      }
    }
  },[state])
  useEffect(()=>{
    if (state?.SeccionesDestacadas && state.SeccionesDestacadas.length>0) {
      let rutaCatalogo = state?.SeccionesDestacadas[0]['catalogo']?.title
      let footerCatalogo = state?.SeccionesDestacadas[0]['catalogo']?.footer
      let imgCatalogo = state.SeccionesDestacadas[0]['catalogo']?.image
      let cardCatalogo = <Card left ruta={`../Catalogo/${rutaCatalogo}`} tittle={rutaCatalogo} subTittle={footerCatalogo} textRuta='VER PRODUCTOS' img={imgCatalogo}/>
      setDestacadaCatalogo(cardCatalogo)
      let titleProducto = state?.SeccionesDestacadas[0]['producto']?.title
      let footerProducto = state?.SeccionesDestacadas[0]['producto']?.footer
      let imgProducto = state.SeccionesDestacadas[0]['producto']?.image
      let linkProducto = state.SeccionesDestacadas[0]['producto']?.link
      let cardProducto =<Card link={linkProducto} tittle={titleProducto} subTittle={footerProducto} textRuta='VER PRODUCTO' img={imgProducto} />
      setDestacadaProducto(cardProducto)
    }
    if (state.Receta && state.Receta.length>0) {
      let recetasOrdenadas = state.Receta.sort(function (a,b) {
        if (Date?.parse(a.fechaCreacion) > Date?.parse(b.fechaCreacion)) {return -1}
        if (Date?.parse(a.fechaCreacion) < Date?.parse(b.fechaCreacion)) {return 1}
        if (Date?.parse(a.fechaCreacion) === Date?.parse(b.fechaCreacion)) {return 0}
      });
      let ultimaReceta = recetasOrdenadas[0]
      let cardReceta = <Card ruta={`../Receta/${ultimaReceta?.title}`} tittle='COCINÁ CON HUDSON' subTittle={`${ultimaReceta?.title}`} textRuta='VER RECETA' img={ultimaReceta?.headerIMG}/>
      setDestacadaReceta(cardReceta)
    }
    if (state?.Consejo) {
      let consejosOrdenados =  state.Consejo.sort(function (a,b) {
        if (Date?.parse(a.fechaCreacion) > Date?.parse(b.fechaCreacion)) {return -1}
        if (Date?.parse(a.fechaCreacion) < Date?.parse(b.fechaCreacion)) {return 1}
        if (Date?.parse(a.fechaCreacion) === Date?.parse(b.fechaCreacion)) {return 0}
      });
      let ultimoConsejo = consejosOrdenados[0]
      let cardConsejo = <Card ruta={`../Consejo/${ultimoConsejo?.title}`} left tittle='TRUCOS Y CONSEJOS' subTittle={`${ultimoConsejo?.title}`} textRuta='LEER ARTICULO' img={ultimoConsejo?.headerIMG} />
      setDestacadaConsejo(cardConsejo)
    }
    
  },[state])


  const [items,setItems] = useState([]);
  const [itemsxD, setItemsxD] = useState([])
  const [itemsIG,setItemsIG] = useState([])
  useEffect(()=>{
    if (state?.Catalogo) {
      let itemsCarrusellDebajo =state?.Catalogo?.map((elem,index)=>{
        return<CatalogCard key={index} tittle={elem.title} subTittle={elem.footer} textRuta='VER CATÁLOGO' img={elem.carrousellHomeIMG}/>
      })
      if (itemsxD.length <= 0) {
        setItemsxD(itemsCarrusellDebajo)
      }
    }
  }, [state])
  function mapearIG() {
    if(state.social.instagram==='Aun no se cargó ningun perfil'){
      return state.social.instagram
    }
    let arr= []
    state?.social?.instagram.forEach((elem,index)=>{
      if (index <=5) {
        arr.push(<CardUltimas key={index} id={elem.node.shortcode}/>)
      }
    })
        return arr
  }
  useEffect(()=>{
    if (state?.social?.instagram && typeof state?.social === 'object') {
      setItemsIG(mapearIG())
    }
  },[state.social])

  const itemsHeader= HeaderBanner?.map((elem,index)=>{
    
    let CTA = JSON.parse(elem?.CTA);
    return(
      <div key={index} className={styles.top} style={{backgroundImage:`url(${elem.image})`}} >
        <h1 className={styles.tittle}>{`${elem?.title}`}</h1>
        <h3 className={styles.subTittle}>{`${elem?.description}`}</h3>
        <h5 className={styles.aclaracion}>{`${elem?.footer}`}</h5>
        {
          CTA.textoBoton?
          <div className={styles.boton} >
          <Boton link={CTA?.linkBoton} text={`${CTA?.textoBoton}`} relleno />
        </div>
        :null  
      }
      </div>
    )
  })
  let tiempoCarrusell = useSelector(state=>state.tiempoCarrusell)

  function flechaDerecha() {
    return CarrusellArrowRight(568)
  }
  function flechaIzquierda() {
    return CarrusellArrowLeft(568)
  }
  return(
    
    <div className={styles.Home}>

      <CarrusellHeaderDesktrop items={itemsHeader}/>

      <div className={styles.productosDesktop}>
        {items}
      </div>
      <div className={styles.carrusell} 
      >
      
        <AliceCarousel
        touchTracking
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        autoWidth
        disableDotsControls
        disableButtonsControls
        />

      </div>
      <div className={styles.cards}>
        {destacadaCatalogo?destacadaCatalogo:null}
        {destacadaReceta?destacadaReceta:null}
        {destacadaConsejo?destacadaConsejo:null}
        {destacadaProducto?destacadaProducto:null}
      </div>
      
      <VideoMobile videoID={social?.youtube}/>
      <VideoDesktop videoID={social?.youtube}/>

      <CarrusellMobile items={itemsxD}/>
      <CarrusellDesktop items={itemsxD}/>
        
 
      <div className={styles.produDestacados}>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado'
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      </div>
      <Conocenos/>
      
      
      <div className={styles.UltimasPublicaciones}>
        {
          itemsIG === 'Aun no se cargó ningun perfil'?
          <a href='https://www.instagram.com/hudsonkitchenware/' target='_blank'   className={styles.visitar}>
            <h3 className={styles.visitarPerfiltitle}>Visita nuestro Instagram</h3>
            <img className={styles.visitarPerfil} src={instagramLogo}/>
          </a>
          :<UltimasPublicaciones items={itemsIG} />
        }
      </div>
      <Footer contacto/>

    </div>
  )
}