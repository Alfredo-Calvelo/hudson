import { createRef, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useSelector } from 'react-redux'
import ConocenosCard from '../ConocenosCard/ConocenosCard'
import styles from './Conocenos.module.css'



export default function Conocenos (){

  let items =[
  <ConocenosCard pastas key={1} title = 'conocenos' subTitle='Con capitales mexicanos y estadounidenses, Generation International Marketing S.A. es una empresa orientada a las nuevas tendencias en diseño y comercialización de artículos para la cocina y el hogar.'/>,
  <ConocenosCard camarones key={2} title = 'nuestra trayectoria' subTitle='En 2010 iniciamos nuestra operación en Argentina y hoy somos líderes comercializando artículos de cocción como Baterías, Ollas, Sartenes, Woks y Utensilios. En otras categorías como por ejemplo moldes para repostería, cafeteras, vajilla para mesa y pavas continuamos en constante crecimiento acompañados por el reconocimiento de nuestra marca.'/>,
  <ConocenosCard fideos key={3} title = 'la marca hudson' subTitle='En Hudson creemos que cocinar es un acto creativo. Una mezcla especial de amor e imaginación en la que cada cocinero pone el sabor para sus afectos. Admiramos a quienes reinventan cada plato y se siente artistas del sabor. Nuestra marca inspira robustez y confianza, cuando uno toma un producto Hudson adquiere la sensación de contacto con un artículo durable. Trabajamos para lograr productos únicos con el balance justo de innovación y funcionalidad.'/>,
]
  let responsive={
    0:{
      items:1
    }
  }
  
  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)
  let bloque = createRef()

  const [alturaBloque,setAlturaBloque] = useState(0)
  useEffect(()=>{
    setAlturaBloque(bloque.current.offsetTop)
  },[bloque])


  return(
    <div ref={bloque} className={`${alturaPantalla + vieportHeight/1.4 >alturaBloque?styles.visible:styles.invisible}`}>
      <div className={styles.carrusell}>
        <AliceCarousel
          touchTracking
          mouseTracking
          autoWidth
          responsive={responsive}
          items={items}
          controlsStrategy="alternate"
          disableDotsControls
          disableButtonsControls
        />
      </div>
      <div className={styles.items}>
        {items}
        
        
      </div>
    </div>
  )
}