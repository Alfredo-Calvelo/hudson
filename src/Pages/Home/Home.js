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
export default function Home(){
  document.title='Hudson | Home'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [destacadaCatalogo, setDestacadaCatalogo] = useState()
  const [destacadaProducto, setDestacadaProducto] = useState()
  const responsive={
    0:{
      items:1
    },
    800:{
      items:3
    }
  }
  const HeaderBanner = useSelector(state=>state.HeaderBanner)
  const state = useSelector(state=>state)
  const social = useSelector(state=>state?.social)
  useEffect(()=>{

    if (state?.CategoriasHome) {
      let items = state.CategoriasHome.map((elem,index)=>{
        return<Circulo key ={index} srcImg={elem.image} label={elem.title}/>
      })
      setItems(items)
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
  },[state])
  const params = useParams()
  if (params.homeID !=='342b5e2221e0f2587772acc90cd7b154') {
    navigate('../construccion')
  }

  useEffect(()=>{
    // console.log(state);
  },[state])
  const [items,setItems] = useState();

  const items2 =[
    <CatalogCard tittle='VINTAGE' subTittle='Lucí tu cocina con colores y un estilo único.' textRuta='VER CATÁLOGO' img={lineaVintage}/>,
    <CatalogCard tittle='CARBON STEEL' subTittle='Productos profesionales para usar en el hogar.' textRuta='VER CATÁLOGO' img={carbonSteel}/>,
    <CatalogCard tittle='VINTAGE' subTittle='Lucí tu cocina con colores y un estilo único.' textRuta='VER CATÁLOGO' img={lineaCobre}/>,
  ]
  const itemsxD = state?.Catalogo?.map((elem,index)=>{
      // console.log(index);
      // console.log(elem);
      return<CatalogCard key={index} tittle={elem.title} subTittle={elem.footer} textRuta='VER CATÁLOGO' img={elem.carrousellHomeIMG}/>
  })
  const items3=[
    <CardUltimas image={image1}/>,
    <CardUltimas image={image2}/>,
    <CardUltimas image={image3}/>,
    <CardUltimas image={image4}/>,
    <CardUltimas image={image1}/>,
    <CardUltimas image={image6}/>,
  ]
  const [itemsIG,setItemsIG] = useState([
    // <CardUltimas key={1} id={'CbqeS0Wr295'}/>,
    // <CardUltimas key={2} id={'CbqeS0Wr295'}/>,
    // <CardUltimas key={3} id={'CbqeS0Wr295'}/>,
    // <CardUltimas key={4} id={'CbqeS0Wr295'}/>,
    // <CardUltimas key={5} id={'CbqeS0Wr295'}/>,
    // <CardUltimas key={6} id={'CbqeS0Wr295'}/>,
  ])
  function mapearIG() {
    console.log(state.social.instagram);
    if(state.social.instagram==='Aun no se cargó ningun perfil'){
      return state.social.instagram
    }
    let arr= []
    state?.social?.instagram.forEach((elem,index)=>{
      if (index <=5) {
        console.log(elem.node.shortcode);
        arr.push(<CardUltimas key={index} id={elem.node.shortcode}/>)
      }
    })
        return arr
  }
  useEffect(()=>{
    // console.log(typeof state.social);
    // console.log(state.social);
    if (state?.social?.instagram && typeof state?.social === 'object') {
      setItemsIG(mapearIG())
    }
  },[state.social])
  useEffect(()=>{
    console.log(itemsIG);
  },[itemsIG])



  

  const itemsHeader= HeaderBanner?.map((elem,index)=>{
    return(
      <div key={index} className={styles.top} style={{backgroundImage:`url(${elem?.image})`}} >
        <h1 className={styles.tittle}>{`${elem?.title}`}</h1>
        <h3 className={styles.subTittle}>{`${elem?.description}`}</h3>
        <h5 className={styles.aclaracion}>{`${elem?.footer}`}</h5>
        <div className={styles.boton} >
          <Boton link={elem.CTA.linkBoton} text={`${elem?.CTA.textoBoton}`} relleno />
        </div>
      </div>
    )
  })
  let tiempoCarrusell = useSelector(state=>state.tiempoCarrusell)
  return(
    
    <div className={styles.Home}>

      <div className={styles.headerCarusellMobile}>
        <AliceCarousel
        touchTracking
        mouseTracking
        items={itemsHeader}
        autoWidth
        renderDotsItem={DotButton}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={tiempoCarrusell}
        infinite
        />
      </div>
      <div className={styles.headerCarusellDesktop}>
        <AliceCarousel
        touchTracking
        mouseTracking
        items={itemsHeader}
        autoWidth
        renderDotsItem={DotButton}
        disableButtonsControls
        autoPlay
        autoPlayInterval={tiempoCarrusell}
        infinite
        />
      </div>

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
        <Card ruta='Receta' tittle='COCINÁ CON HUDSON' subTittle='Pancakes con arándanos' textRuta='VER RECETA' img={cocinaConHudson}/>
        <Card ruta='Consejo' left tittle='TRUCOS Y CONSEJOS' subTittle='Como conservar los nutrientes en el hervor' textRuta='LEER ARTICULO' img={trucosYConsejos} />
        {destacadaProducto?destacadaProducto:null}
      </div>
      
      <VideoMobile videoID={social?.youtube}/>
      <VideoDesktop videoID={social?.youtube}/>

      <CarrusellMobile items={itemsxD}/>
      <CarrusellDesktop items={itemsxD}/>
        
 
      <div className={styles.produDestacados}>
        <Destacado productos={state?.Producto} leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado'
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