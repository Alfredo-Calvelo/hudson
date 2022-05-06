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
  let Recetas = useSelector(state=>state.Receta)
  const [recetasOrdenadas, setRecetasOrdenadas] = useState()
  const [items, setItems] = useState()
  useEffect(()=>{
    if (Recetas) {
      let recetasOrdenadas = Recetas.sort(function (a,b) {
        if (Date?.parse(a.fechaCreacion) > Date?.parse(b.fechaCreacion)) {return -1}
        if (Date?.parse(a.fechaCreacion) < Date?.parse(b.fechaCreacion)) {return 1}
        if (Date?.parse(a.fechaCreacion) === Date?.parse(b.fechaCreacion)) {return 0}
      });
      let arr =[]
      recetasOrdenadas.forEach((elem,index)=>{
        if (index<6) {
          console.log(elem);
          arr =[...arr,<RecetaCard tipo={elem.tipo} key={index} img={elem.headerIMG} title={elem.title}/>,]
        }
      })

      setItems(arr)
    }
  },[Recetas])
  useEffect(()=>{
    console.log(recetasOrdenadas);
  },[recetasOrdenadas])

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
          <h5 style={{cursor:'pointer'}}>VER MÁS</h5>
        </div>
        <div className={styles.mobile}>
          {<AliceCarousel
            items={items}
            touchTracking
            mouseTracking
            controlsStrategy="alternate"
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            paddingLeft={10}
            paddingRight={10}
            />}
        </div>
        <div className={styles.desktop}>
          {items}
        </div>
      </div>
  )
}