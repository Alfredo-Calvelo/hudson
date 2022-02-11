import Boton from '../../components/Boton/Boton'
import styles from './Home.module.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
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
import { createRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConocenosCard from '../../components/ConocenosCard/ConocenosCard';
import Conocenos from '../../components/Conocenos/Conocenos';


export default function Home(){
  document.title='Hudson | Home'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const navigate = useNavigate()
  
  const items = [
    <Circulo srcImg={conccionYHorneado} label='Cocción y Horneado' ruta='https://www.facebook.com/' />,
    <Circulo srcImg={cafeTeYMate} label='Cafe y Mate' />,
    <Circulo srcImg={Utensillios} label='Utensillios' />,
    <Circulo srcImg={Vajilla} label='Vajilla' />,
    <Circulo srcImg={Reposteria} label='Repostería' />,
    <Circulo srcImg={Organizacion} label='Organización' />,
  ]
  const items2 =[
    <CatalogCard tittle='VINTAGE' subTittle='Lucí tu cocina con colores y un estilo único.' textRuta='VER CATÁLOGO' img={lineaVintage}/>,
    <CatalogCard tittle='CARBON STEEL' subTittle='Productos profesionales para usar en el hogar.' textRuta='VER CATÁLOGO' img={carbonSteel}/>,
    <CatalogCard tittle='VINTAGE' subTittle='Lucí tu cocina con colores y un estilo único.' textRuta='VER CATÁLOGO' img={lineaCobre}/>,
  ]
  const items3=[
    <CardUltimas image={image1}/>,
    <CardUltimas image={image2}/>,
    <CardUltimas image={image3}/>,
    <CardUltimas image={image4}/>,
    <CardUltimas image={image5}/>,
    <CardUltimas image={image6}/>,
  ]
  let ref = createRef()
  useEffect(()=>{
    ref.current.style.backgroundImage='url(https://s3-alpha-sig.figma.com/img/baae/f330/90292b464aac1f6d499e88cbde4c3646?Expires=1645401600&Signature=EEWwBIfKNxix0G3yRPEdGQsZR~n4Z7nUC1d94YuMacd47msYQl7SrkV8w8B75XZbvnMGRaXAJaA-FHml0tLTx9cr0G-6G4bKo0NgnCY2HifFSUmNELBzxe8QGqX~45bngPY0lW~ZhbfgfW2PYJzMDD-HlEQujVLXiA2v0gweOuuzxqkEe2BFo-9gsBWe3pIODRLDJIM90Yx9FTzMQ7gxfO5E2PUNhtBK3Aef9nH4KFqj9Fs0kh26Bih1fCtTpLxRKUoX7dVx6lrbrPa1ruYxKWqUpjEE52jw-PwZJMmxO5VvbBjLquH5xtcn9-Yg9j3HuV5fIDhc-hH8IwLRKSBa5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'
  },[ref])
  return(
    <div className={styles.Home}>
      
      <div className={styles.top} ref={ref} >
        <h1 className={styles.tittle}>SEMANA DE DESCUENTOS PARA MAMÁ</h1>
        <h3 className={styles.subTittle}> Con el cupón: MAMACHEF20. Sed aliquam et risus fusce a. Risus neque ultricies suscipit diam nulla ultrices volutpat.</h3>
        <h5 className={styles.aclaracion}>Linea de vigencia de la promoción.</h5>
        <div className={styles.boton} >
          <Boton text='TIENDA ONLINE' relleno dropMenu/>
        </div>
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
      <div>
        <Card left ruta='../Catalogo/Master Chef' tittle='LÍNEA MASTERCHEF' subTittle='Sentite un chef en la cocina de tu casa.' textRuta='VER RECETA' img={lineaMasterchef}/>
        <Card ruta='Receta' tittle='COCINÁ CON HUDSON' subTittle='Pancakes con arándanos' textRuta='VER PRODUCTOS' img={cocinaConHudson}/>
        <Card ruta='Consejo' left tittle='TRUCOS Y CONSEJOS' subTittle='Como conservar los nutrientes en el hervor' textRuta='LEER ARTICULO' img={trucosYConsejos} />
        <Card  tittle='EL IMPERDIBLE' subTittle='Cafetera prensa francesa 350ml' textRuta='VER PRODUCTO' img={elImperdible} />
      </div>
      <div className={styles.video}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/krRvyeapHio" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
      <div className={styles.plus} >
        <img src={Plus} alt='' />
      </div>
      <div className={styles.catalogCarrusell}>
        <AliceCarousel
          touchTracking
          mouseTracking
          items={items2}
          controlsStrategy="alternate"
          disableDotsControls
          disableButtonsControls
          paddingLeft={10}
          paddingRight={10}
          />
      </div>
      <div className={styles.produDestacados}>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado'
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      </div>

      <Conocenos/>
      
      
      <div className={styles.UltimasPublicaciones}>
        <UltimasPublicaciones items={items3} />
      </div>
      <Footer contacto/>

    </div>
  )
}