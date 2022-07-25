import styles from './Boton.module.css'
import { BsChevronDown } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { activarMenuDesplegable } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Boton (props){
  const navigate = useNavigate()
  
  const Tiendas = useSelector(state=>state.Tiendas)
  const [tiendasFinales, setTiendasFinales] = useState([])
  useEffect(()=>{
    if (Tiendas && Tiendas[0]?.tiendas) {
      let copiaTiendas =[] 
      Tiendas[0].tiendas.map((elem, index)=>{
        copiaTiendas.push({title:elem.title, link:elem.URL, tipo:'producto'})
      })
      
      setTiendasFinales(copiaTiendas)
    }
  },[Tiendas])


  let dropMenu= useSelector(state=>state.menuDesplegable)
  if (!props.dropMenu)dropMenu=false
  const dispatch = useDispatch()
  function dropMenuFunction(){
    if (dropMenu) {
      dispatch(activarMenuDesplegable(false))
    }else dispatch(activarMenuDesplegable(true))
  }
  function navegar(params) {
    navigate(props?.ruta)
  }

  return(
    <a className={styles.containerLink} style={{textDecoration:'none'}} href={props.link?props.link:null} download={props.download?props.download:false} target={props.actual?'':`_blank`}>
    <div className={styles.container}>
    <div style={{border:props.color?`1px solid ${props.color}`:''}} className={props.relleno?`${styles.relleno} ${dropMenu?styles.adelante:''}`:`${styles.noRelleno} ${dropMenu?styles.adelante:''}`} onClick={()=>{
      if(props.dropMenu){dropMenuFunction()}
      if (props.ruta){navegar()}
      if (props.click) {props.click()} 
    }}>
      <span style={{color:props.color?props.color:''}} className={styles.text}>{props.text}</span>
        {props.dropMenu?
        <div className={styles.flecha}  >
          <BsChevronDown/>
        </div>
        :null
        }
    </div>
        
{/* ------------------ DROP MENU------------------------------- */}
      {props.dropMenu?
        <ul className={`${styles.lista}`}>
          <div className={`${styles.listContainer} ${dropMenu?styles.listaActiva:styles.listaInactiva}`}>
            {tiendasFinales.map((elem,index)=>{
              return(
                <a key={index} href={elem.link} className={`${styles.text} ${styles.li}`}>{elem.title.toUpperCase()}</a>
              )
            })}
          </div>
        </ul>
      :null  
    }


    </div>
  </a>
  )
}