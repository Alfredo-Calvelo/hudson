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
        <div className={styles.imgVisible}>
          <img src={props.elem.imgPrincipal} className={`${styles.img}`} style={{
            left:props.mobile?'':props.right?'15%':'',
            right:props.mobile?'':props.left?'15%':''
          }} />
        </div>
        <div className={styles.imgOculta}>
          <img src={props.elem.imgHover} className={`${styles.img} ` } style={{
            left:props.mobile?'':props.right?'15%':'',
            right:props.mobile?'':props.left?'15%':''
          }} />
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>{props.elem.title}</h2>
          <h3 className={styles.subtitle}>{props.elem.footer}</h3>
        <ul className={styles.lista}>
          {props.elem.description.map((elem,index)=>{
            return<li key={index}>{elem[index+1]}</li>
          })}
        </ul>
      </div>
    </div>
  )


}