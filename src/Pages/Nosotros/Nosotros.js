import styles from './Nosotros.module.css'
import Gradient from '../../components/Gradient/Gradient'
import grupoGente from '../../imagenes/grupoGente.jfif'
import { createRef, useEffect, useState } from 'react'
import HistoriaCard from '../../components/HistoriaCard/HistoriaCard'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Inspirado from '../../components/Inpirado/Inspirado'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'

export default function Nosotros(){
  document.title='Hudson | Nosotros'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  let imagen1 = createRef()
  let imagen2 = createRef()
  let imagen3 = createRef()
  let imagen4 = createRef()
  let imagen5 = createRef()
  


  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)

  const [bloque1, setBloque1] = useState(false)
  const [alturaImagen2, setAlturaImagen2] = useState(0)
  const [alturaImagen3, setAlturaImagen3] = useState(0)
  const [alturaImagen4, setAlturaImagen4] = useState(0)
  const [alturaImagen5, setAlturaImagen5] = useState(0)

  
  useEffect(()=>{
    setAlturaImagen2(imagen2.current.offsetTop);
    setAlturaImagen4(imagen4.current.offsetTop);
    setAlturaImagen5(imagen4.current.offsetTop);
    
    setBloque1(true)
  })

  
  return(
    <div >
      <Gradient/>
      <div className={`${styles.bloque} 
      ${
        !bloque1
        ?styles.Invisible
        :styles.Visible
        }
        `}>
        <div className={styles.header }>
          <h2 className={styles.headerTitle}>SOBRE NOSOTROS</h2>
          <div className={styles.imgDesktop}>
          </div>
        </div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>CONOCENOS</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo}>
          Con capitales mexicanos y estadounidenses, Generation International Marketing S.A. es una empresa orientada a las nuevas tendencias en diseño y comercialización de artículos para la cocina y el hogar.
          <br></br>
          <br></br>
          Buscamos liderar el mercado trabajando con profesionalismo, creatividad y confianza, haciendo de nuestra empresa un lugar atractivo para el crecimiento y desarrollo de nuestra gente.
          </p>
        </div>
      </div>
      <div className={`${styles.bloque} 
      ${
        alturaPantalla + vieportHeight <= alturaImagen4
        ?styles.Invisible
        :styles.Visible
        }
        `}ref={imagen4}>
        
        <div className={styles.imgDesktop1}></div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>NUESTRA TRAYECTORIA</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo}>
          En 2010 iniciamos nuestra operación en Argentina y hoy somos
          líderes comercializando artículos de cocción como Baterías, Ollas,
          Sartenes, Woks y Utensilios.          
          <br></br>
          <br></br>
          En otras categorías como por ejemplo moldes para repostería,
          cafeteras, vajilla para mesa y pavas continuamos en constante
          crecimiento acompañados por el reconocimiento de nuestra
          marca.          
          <br></br>
          <br></br>
          Actualmente operamos en otros países de LATAM y Estados Unidos.
          </p>
        </div>
      </div>
      <div className={`${styles.bloque} 
      ${
        alturaPantalla- 100 <= alturaImagen5
        ?styles.Invisible
        :styles.Visible
        }
        `}ref={imagen5}>
        
        <div className={styles.imgDesktop2}></div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>VISIÓN, MISÍON Y VALORES</h3>
          <h5 className={styles.subTitleCard}>Nuestra visión</h5>
          <p className={styles.parrafoCard}>
          Ser líderes y generadores de tendencia en el desarrollo de productos para la cocina y el hogar.
          </p>
          <h5 className={styles.subTitleCard}>Nuestra misión</h5>
          <p className={styles.parrafoCard}>
          Innovar con usos, formas y colores para que la cocina y el hogar evolucionen como espacios creativos y de disfrute permanente.
          </p>
          <h5 className={styles.subTitleCard}>Nuestros valores</h5>
          <p className={styles.parrafoCard}>
          <ul>
            <li className={styles.liCard}>Pasión para agregar valor a lo que hacemos.</li>
            <li className={styles.liCard}>Creatividad en el desarrollo de nuestras ideas y procesos.</li>
            <li className={styles.liCard}>Confianza en nuestros equipos de trabajo, clientes, proveedores y accionistas.</li>
            <li className={styles.liCard}>Efectividad en la administración de nuestros recursos para el cumplimiento de objetivos y resultados.</li>
            <li className={styles.liCard}>Integridad y credibilidad en nuestras acciones y decisiones.</li>
          </ul>
          </p>
        </div>
      </div>
      <div className={` 
      ${
        alturaPantalla +700  <= alturaImagen2
        ?styles.Invisible
        :styles.Visible
        }
        `} ref={imagen2}>
        <div className={styles.imgDesktop3}>
          </div>
        <div className={styles.bajada}  >
          <h3 className={styles.title}>LA MARCA HUDSON</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo2}>
          Nuestra marca inspira robustez y confianza, cuando uno toma un
          producto Hudson adquiere la sensación de contacto con un artículo
          durable.<br></br><br></br>Trabajamos para lograr productos únicos con el balance justo
          de innovación y funcionalidad.
          </p>
        </div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>NUESTRO ABASTECIMIENTO</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo}>
          Desde hace más de 10 años mantenemos relaciones comerciales con fábricas en Asia, Europa, México y Argentina lo que permite asegurar el sostenimiento de la calidad y el cumplimiento de las entregas.<br></br><br></br>
          Nuestra oferta se constituye de artículos de cocción producidos en diferentes materiales como aluminio, acero inoxidable, vidrio para horno. Son parte de nuestro portfolio la vajilla de origen Portugal junto con una gama extensa de utensilios de cocina y artículos plásticos, entre otros.<br></br><br></br>
          Nuestra estrategia principal es comercializar productos atractivos, elaborados con las últimas tecnologías asegurando buena calidad a precios convenientes.
          </p>
        </div>
      </div>
      
      <SeparadorChico/>
      <Inspirado title='Hudson te inspira'/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
      rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer contacto/>
    </div>
  )
}