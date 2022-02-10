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
import { useEffect } from "react";
import Inspirado from '../../components/Inpirado/Inspirado'
import Destacado from "../../components/destacados/Destacado";
import Footer from '../../components/Footer/Footer'
export default function Receta(){
  document.title='Hudson | Receta'

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  let items =[<RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
  <RecetaCarrusellCard title='Sartén Vintage 20 cm' subTitle='Antiadherente Cerámico'/>,
]


  let Dificultad = 1
  const estrellas =[]
  for (let i = 0; i < 3; i++) {
    if (Dificultad-1 >=i) {
      estrellas.push(<img className={styles.estrella} src={estrella}/>)
    }else estrellas.push(<img className={styles.estrellaApagada} src={estrella}/>)
  }


  return(
    <div>
      <Gradient/>
      <Header img={fideos} title='Pancakes de arándanos' ruta='ver receta'/>
      <div className={styles.receta}>
        <div className={styles.info}>
          <img src={Porcion} className={styles.icono}/>
          <h4>Porciones:6</h4>
        </div>
        <div className={styles.info}>
          <img src={reloj} className={styles.icono}/>
          <h4>Preparación:15 min.</h4>
        </div>
        <div className={styles.info}>
          <div className={styles.estrellas}>
            {estrellas}
          </div>
          <h4>Dificultad:Baja.</h4>
        </div>
        <img src={fotoPersona} className={styles.cocinero}/>
        <SeparadorChico/>
        <h3 className={styles.ingredientesTitle}>Ingredientes</h3>
        <ul className={styles.ingredientesList}>
          <li> 1 taza de harina </li>
          <li> 1 1/2 cucharada de polvo para hornear</li>
          <li> 1 cucharada de azucar </li>
          <li> 1 cucharadita de vainilla </li>
          <li> 3/4 de taza de leche  </li>
          <li> 1 1/2 cucharada de mantequilla derretida </li>
          <li> 2 huevos</li>
        </ul>
      </div>
      <iframe width='100%'height='250px' src="https://www.youtube.com/embed/dT4eVrFKEMo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div className={`${styles.receta} ${styles.preparacion}`}>
        <h3 className={styles.ingredientesTitle}>Preparación</h3>
        <ol className={styles.preparacionList}>
          <li>1- Mezclar el harina, polvo para hornear y azucar</li>
          <li>2- Agregar la leche, yemas de los huevos, mantequilla derretida, extracto de vainilla.</li>
          <li>3- Levantar las 2 claras a punto nieve  y agregarlas a la mezcla de forma envolvente.</li>
          <li>4- Cocinar en un sartén y agregar los arándanos en cada pancake.</li>
          <li>5- Servir con miel y más arándanos de topping.</li>
        </ol>
        <h3 className={styles.ingredientesTitle}>Consejo</h3>
        <span className={styles.consejo}> Se pueden mantener en el horno para que no se enfríen, ya que se cocinan por tandas.</span>
      </div>
      <div className={styles.separador}></div>
      <div className={styles.productos}>
          <h3 className={styles.ingredientesTitle}>¿Que productos necesitas?</h3>
          <span className={styles.consejo}>
            Para que esta receta te salga perfecta, 
            te recomendamos los siguientes productos Hudson.
          </span>

          <div className={styles.carrusell}>
          <AliceCarousel
            items={items}
            touchTracking
            mouseTracking
            controlsStrategy="alternate"
            disableDotsControls
            disableButtonsControls
            autoWidth
            paddingLeft={40}
            />
          </div>
      </div>
      <SeparadorChico/>
      <Inspirado title='Sigue inspirándote...'/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado'
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer contacto/>
    </div>
  )
}