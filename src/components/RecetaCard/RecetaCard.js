import { createRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './RecetaCard.module.css'
//TAMAÑO DE LA IMAGEN = 1880x1253

export default function RecetaCard(props){
  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let receta = createRef()

  let vieportHeight = useSelector(state=>state.vieportHeight)
  
  const [alturaReceta, setAlturaReceta] = useState(0)
  useEffect(()=>{
    setAlturaReceta(receta.current?.offsetTop)
  },[])
  
  return(
    <div ref={receta} className={`${styles.container} 
    ${
      alturaPantalla +700 <= alturaReceta
      ?styles.Invisible
      :styles.Visible
      }
      `}>
      <div className={styles.imagenContainer}>
        <img src={props.img} className={styles.img}/>
      </div>
      <h4 className={styles.title}>{props.title}</h4>
    </div>
  )
}