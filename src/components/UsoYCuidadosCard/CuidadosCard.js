import styles from './CuidadosCard.module.css'
import ollaConCosas from '../../imagenes/ollaConCosas.png'
import { createRef, useEffect, useState } from 'react'
import {BsChevronDown,BsChevronUp, BsLightbulbOff} from 'react-icons/bs'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { activarCard } from '../../redux/actions'

export default function CuidadosCard(props){
  
  let item = props.item
  const dispatch = useDispatch()
  let altura = createRef()
  let alturaDesktop = createRef()
  let verMasY 
  const [verMasYDesktop, setVerMasYDesktop] = useState(0)

  
  const [alturaBloque, setAlturaBloque]= useState(0)
  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  useEffect(()=>{
    verMasY = altura.current.offsetTop
  })
  useEffect(()=>{
  })
  let bloque = createRef()
  
  function Abrir_Cerrar(){
    if (props.active) {
      dispatch(activarCard(null))
      window.scrollTo(0,verMasY)
    }
    else {dispatch(activarCard(props.clave))}
  }

  useEffect(()=>{
    setAlturaBloque(bloque.current.offsetTop)
  },[alturaBloque])


  function Abrir_Cerrar_Desktop(){
    console.log(alturaBloque);
    console.log(alturaDesktop.current.offsetTop);
    if (props.active) {
      dispatch(activarCard(null))
      window.scrollTo(0,alturaBloque + verMasYDesktop)
    }
    else {
      setVerMasYDesktop(alturaDesktop.current.offsetTop)
      dispatch(activarCard(props.clave))
    }
  }

  let referencia = createRef()
  let referencia2 = createRef()
  let referenciaDesktop = createRef()
  let referencia2Desktop = createRef()
  
  useEffect(()=>{

    if (props.active === false) {
      referencia.current.style.height='0px'
      return
    }
    else if (props.active===true) {
      referencia.current.style.height=`${referencia2.current.clientHeight}px`
    }else referencia.current.style.height='0px'
  })

  useEffect(()=>{
    if (props.active === false) {
      referenciaDesktop.current.style.height='0px'
      return
    }
    else if (props.active===true) {
      referenciaDesktop.current.style.height=`${referencia2Desktop.current.clientHeight}px`
    }else referenciaDesktop.current.style.height='0px'
  })






  return(
    <div ref={bloque} className={`${styles.container} ${props.left?styles.izquierdaDesktop:props.right?styles.derechaDesktop:null}
    ${alturaPantalla -30 >= alturaBloque
      ?
      props.left? styles.visibleLeft:
      props.right?styles.visibleRight:''
      :
      props.left?styles.ocultoLeft:
      props.right?styles.ocultoRight
      :''

    }
    `}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>{item.title.toUpperCase()}</h2>
        <h4 className={styles.subTitle}>{item.subTitle}</h4>
      </div>
      <div className={styles.cuerpoMobile}>
          <img className={styles.img} src={ollaConCosas}/>
        <div className={styles.fondoImagen}>
          <div className={styles.fondoImagen1}>
          </div>
        </div>

        <div className={styles.fondo}>
          <div className={styles.principal}>
            <h4 className={styles.subTitleGris}> Recomendaciones Generales</h4>
            <ul className={styles.items}>
              {item.recomendacionesGenerales.map((elem,index)=>{
                return(
                  <div key={index} className={styles.li}>
                    <div className={styles.punto}>
                      <VscDebugBreakpointData/>
                    </div>
                    <li>{elem} </li>
                  </div>

              )
              })}
            </ul> 
          </div>
          <div className={styles.referencia} ref={referencia}>
            <div className={styles.segundaParte} ref={referencia2}>
              {item.extras.map((elem,index)=>{
                return(
                <div key={index}>
                  <br></br>
                  <div className={styles.titles}>
                    <h4 className={styles.subTitleBajo}> {elem.title.toUpperCase()}</h4>
                    <h4 className={styles.subTitleGris}> {elem.subTitle} </h4>
                  </div>
                  <ul className={styles.items}>

                  {elem.items.map((elem,index)=>{
                    return(

                      <div key={index} className={styles.li}>
                        <div className={styles.punto}>
                          <VscDebugBreakpointData/>
                        </div>
                        <li>{elem} </li>
                      </div>
                    )
                  })}
                  </ul>
                  
                </div>
              )})}
            </div>
          </div>
          <span ref={altura} className={styles.verMas} onClick={()=>{Abrir_Cerrar()}}>{props.active?'VER MENOS':'VER MÁS'}{props.active?<BsChevronUp/>: <BsChevronDown/>}</span>
        </div>

      </div>
      {/* -------------DESKTOP------------- */}
      <div className={styles.cuerpoDesktop}>
        <div className={styles.visibleDesktop}>

          <div className={styles.headerDesktop}>
            <img className={styles.imgDesktop} src={ollaConCosas}/>
          </div>
          <ul className={styles.itemsDesktop}>
              {item.recomendacionesGenerales.map((elem,index)=>{
                return(
                  <div key={index} className={styles.li}>
                    <div className={styles.punto}>
                      <VscDebugBreakpointData/>
                    </div>
                    <li>{elem} </li>
                  </div>

              )
              })}
            </ul> 
        </div>
        <div className={styles.referenciaDesktop} ref={referenciaDesktop}>
            <div className={styles.segundaParte} ref={referencia2Desktop}>
              {item.extras.map((elem,index)=>{
                return(
                <div key={index}>
                  <br></br>
                  <div className={styles.titles}>
                    <h4 className={styles.subTitleBajo}> {elem.title.toUpperCase()}</h4>
                    <h4 className={styles.subTitleGris}> {elem.subTitle} </h4>
                  </div>
                  <ul className={styles.items}>

                  {elem.items.map((elem,index)=>{
                    return(

                      <div key={index} className={styles.li}>
                        <div className={styles.punto}>
                          <VscDebugBreakpointData/>
                        </div>
                        <li>{elem} </li>
                      </div>
                    )
                  })}
                  </ul>
                  
                </div>
              )})}
            </div>
          </div>
      <span key={props.clave} ref={alturaDesktop} className={styles.verMas} onClick={()=>{Abrir_Cerrar_Desktop()}}>{props.active?'VER MENOS':'VER MÁS'}{props.active?<BsChevronUp/>: <BsChevronDown/>}</span>

      </div>
    </div>
  )
}