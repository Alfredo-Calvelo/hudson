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
import Destacado_Inpirate from '../../components/destacados-inspirate/Destacado_Inpirate';



export default function Home(){
  document.title='Hudson | Home'
  
  
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
  return(
    <div className={styles.Home}>
      <div className={styles.top}>
        <h1 className={styles.tittle}>SEMANA DE DESCUENTOS PARA MAMÁ</h1>
        <h3 className={styles.subTittle}> Con el cupón: MAMACHEF20. Sed aliquam et risus fusce a. Risus neque ultricies suscipit diam nulla ultrices volutpat.</h3>
        <h5 className={styles.aclaracion}>Linea de vigencia de la promoción.</h5>
        <div className={styles.boton} >
          <Boton text='TIENDA ONLINE' relleno={true} dropList/>
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
        <Card left tittle='LÍNEA MASTERCHEF' subTittle='Sentite un chef en la cocina de tu casa.' textRuta='VER RECETA' img={lineaMasterchef}/>
        <Card  tittle='COCINÁ CON HUDSON' subTittle='Pancakes con arándanos' textRuta='VER PRODUCTOS' img={cocinaConHudson}/>
        <Card left tittle='TRUCOS Y CONSEJOS' subTittle='Como conservar los nutrientes en el hervor' textRuta='LEER ARTICULO' img={trucosYConsejos} />
        <Card  tittle='EL IMPERDIBLE' subTittle='Cafetera prensa francesa 350ml' textRuta='VER PRODUCTO' img={elImperdible} />
      </div>
      <div className={styles.video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/krRvyeapHio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          autoWidth
          disableDotsControls
          disableButtonsControls
          paddingLeft={10}
          paddingRight={10}
          />
      </div>
      <div className={styles.produDestacados}>
        <Destacado_Inpirate/>
      </div>
    </div>
  )
}