import { createRef, useEffect, useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'


export default function Card(props){
  const navigate = useNavigate()
  function ejecutable(){
      navigate(props.ruta)
      console.log('hola');
  }

  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)
  let bloque = createRef()

  const [alturaBloque,setAlturaBloque] = useState(0)
  useEffect(()=>{
    setAlturaBloque(bloque.current.offsetTop)
  },[bloque])
  


  return(
    <div ref={bloque} className={`${alturaPantalla + vieportHeight/1.4 >alturaBloque
      ?props.left?styles.visibleLeft:styles.visibleRight
      :props.left?styles.invisibleLeft:styles.invisibleRight
    
    }`}>
      <div className={styles.mobile}>

        <div className={props.left? styles.containerLeft:styles.containerRight} onClick={()=>ejecutable()}>
          <div className={props.left? styles.imagenLeft:styles.imagenRight}>
            <img alt='' src={props.img} />
          </div>
          <div className={props.left?styles.subCardLeft:styles.subCardRight}>
            <div>
              <h2 className={`${styles.tittle}  ${styles.espacios}`}>{props.tittle}</h2>
              <h3 className={`${styles.subTittle}  ${styles.espacios}`} >{props.subTittle}</h3>
            </div>
            <div className={styles.flecha}>
              <h5 className={`${styles.textRuta} ${styles.espacios}`} >{props.textRuta}</h5>
              <BsChevronRight/>
            </div>
          </div>
        </div>
      </div>
      {/* ----------DESKTOP---------- */}
      <div className={styles.desktop}  style={{backgroundImage:`url(${props.img})`}}>
        {
          props.ruta?
          <div className={props.left?styles.subCardLeft:styles.subCardRight} onClick={()=>ejecutable()}>
          <div>
            <h2 className={`${styles.tittle}  ${styles.espacios}`}>{props.tittle}</h2>
            <h3 className={`${styles.subTittle}  ${styles.espacios}`} >{props.subTittle}</h3>
          </div>
          <div className={styles.flecha}>
            <h5 className={`${styles.textRuta} ${styles.espacios}`} >{props.textRuta}</h5>
            <BsChevronRight/>
          </div>
        </div>
        :props.link?
        <a target='_blank' style={{textDecoration:'none'}} className={props.left?styles.subCardLeft:styles.subCardRight} href={props.link} >
          <div>
            <h2 className={`${styles.tittle}  ${styles.espacios}`}>{props.tittle}</h2>
            <h3 className={`${styles.subTittle}  ${styles.espacios}`} >{props.subTittle}</h3>
          </div>
          <div className={styles.flecha}>
            <h5 className={`${styles.textRuta} ${styles.espacios}`} >{props.textRuta}</h5>
            <BsChevronRight/>
          </div>
        </a>:null
        }
      </div>
  </div>
  )


}