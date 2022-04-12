import { createRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  function navegar(tipo) {
    if (tipo==='Receta') {
      navigate(`../Receta/${props.title}`)
    }
    if (tipo==='Consejo') {
      navigate(`../Consejo/${props.title}`)
    }
  }
  return(
    <div style={{cursor:'pointer'}} onClick={e=>navegar(props.tipo)}>

      <div ref={receta} className={`${styles.containerMobile} 
      ${
        alturaPantalla - 100 <= alturaReceta
        ?styles.Invisible
        :styles.Visible
      }
        `}>
        <div className={styles.imagenContainer}>
          <img src={props.img} className={styles.img}/>
        </div>
        <h4 className={styles.title}>{props.title}</h4>
      </div>
      <div ref={receta} className={`${styles.containerDesktop} 
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
      
    </div>
  )
}