import styles from './CardCatalogo.module.css'
import lineaCobre from '../../imagenes/lineaCobre.png'
import { createRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
export default function CardCatalogo(props){


  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let bloque = createRef()

  let vieportHeight = useSelector(state=>state.vieportHeight)
  
  const [alturaBloque, setAlturaBloque] = useState(0)
  useEffect(()=>{
    setAlturaBloque(bloque.current?.offsetTop)
    if (props.clave>=0) {
      console.log(props.clave);
    }
  })


  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    setVisible(true)
  })
  let clase = `${styles.container} 
  ${
    alturaPantalla + vieportHeight/1.2 <= alturaBloque
    ?
    props.left?styles.Invisibleleft:
    props.right?styles.InvisibleRight:''
    :
    props.left?styles.VisibleLeft:
    props.right?styles.VisibleRight
    :''
    }
  `
  let clase2 = `${styles.container}
  ${visible?
    styles.VisibleRight:
    styles.InvisibleRight
  }`
  
  return (
    <div id={props.clave} ref={bloque} className={props.clave===0?clase2:clase}
    style={{
      flexDirection:props.reverse?'row-reverse':null,
      marginRight:props.mobile?'':props.right? '10%' : '',
      marginLeft:props.mobile?'':props.left? '10%':'',
    }}>
      <div className={styles.imgContainer}>
        <img src={lineaCobre} className={styles.img} style={{
          left:props.mobile?'':props.right?'15%':'',
          right:props.mobile?'':props.left?'15%':''
        }} />
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>CONVERTITE EN UN MASTERCHEF</h2>
          <h3 className={styles.subtitle}>Crea con Hudson como lo hacen los celebrities del Show más famoso de la TV con nuestras líneas:</h3>
        <ul className={styles.lista}>
          <li>Línea profesional Carbon Steel.</li>
          <li>Línea Aluminio con Antiadherente.</li>
          <li>Línea Cobre con Antiadherente Cerámico.</li>
          <li>Línea Vintage con Antiadherente Cerámico.</li>
          <li>Línea vidrio para horno.</li>
          <li>Línea de Utensilios y Kitchen Tools.</li>
          <li>Línea de Ralladores</li>
          <li>Línea de Pavas y Cafeteras.</li>
        </ul>
      </div>
    </div>
  )


}