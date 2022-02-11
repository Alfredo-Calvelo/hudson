import styles from './CuidadosCard.module.css'
import ollaConCosas from '../../imagenes/ollaConCosas.png'
import { createRef, useEffect, useState } from 'react'
import {BsChevronDown,BsChevronUp} from 'react-icons/bs'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { activarCard } from '../../redux/actions'

export default function CuidadosCard(props){
  let item = props.item
  const dispatch = useDispatch()
  const [abierto , setAbierto] = useState(false)
  
  function Abrir_Cerrar(){
    if (props.active) {dispatch(activarCard(null))}
    else {dispatch(activarCard(props.clave))}
  }
  console.log(props.active);

  let referencia = createRef()
  let referencia2 = createRef()

  useEffect(()=>{
    if (props.active === false) {
      referencia.current.style.height='0px'
      return
    }
    else if (props.active===true) {
      referencia.current.style.height=`${referencia2.current.clientHeight}px`
    }else referencia.current.style.height='0px'
  })

  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{item.title.toUpperCase()}</h2>
        <h4 className={styles.subTitle}>{item.subTitle}</h4>
      </div>
      <div className={styles.cuerpo}>
          <img className={styles.img} src={ollaConCosas}/>
        <div className={styles.fondoImagen}>
          <div className={styles.fondoImagen1}>
          </div>
        </div>

        <div className={styles.fondo}>
          <div>
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
          <span className={styles.verMas} onClick={()=>{Abrir_Cerrar()}}>{props.active?'VER MENOS':'VER MÁS'}{props.active?<BsChevronUp/>: <BsChevronDown/>}</span>
          <div className={styles.referencia} ref={referencia}>
            <div className={styles.segundaParte} ref={referencia2}>
              {item.extras.map((elem,index)=>{
                return(
                <div key={index}>
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
        </div>

      </div>
    </div>
  )
}