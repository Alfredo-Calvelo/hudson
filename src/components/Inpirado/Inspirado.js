import RecetaCard from '../RecetaCard/RecetaCard'
import styles from './Inspirado.module.css'
import fideos from '../../imagenes/fideos.jfif'
import AliceCarousel from 'react-alice-carousel'
import { useSelector } from 'react-redux';
import { createRef, useEffect, useState } from 'react';

export default function Inspirado(props){
  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
  };
    let items= [
    <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
    <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
    <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
    <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
    <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
    <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
  ]
  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)
  let bloque = createRef()

  const [alturaBloque,setAlturaBloque] = useState(0)
  useEffect(()=>{
    setAlturaBloque(bloque.current.offsetTop)
  },[bloque])

  return(
    <div ref={bloque} className={`${styles.inspirado} ${alturaPantalla + vieportHeight/1.6 >alturaBloque?styles.visible:styles.invisible}`}>
        <div className={styles.titles}>
          <h3>{props.title}</h3>
          <h5>VER MÁS</h5>
        </div>
        <div className={styles.mobile}>
          <AliceCarousel
            items={items}
            touchTracking
            mouseTracking
            controlsStrategy="alternate"
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            paddingLeft={10}
            paddingRight={10}
            />
        </div>
        <div className={styles.desktop}>
          {items}
        </div>
      </div>
  )
}