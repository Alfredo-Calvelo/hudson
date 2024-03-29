import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './MenuDesplegable.module.css'
import Boton from '../../Boton/Boton.js'
import { AiOutlineClose } from 'react-icons/ai'
import {  cambiarOpciones, cambiarMenuCatalogo, cerrarTodo } from '../../../redux/actions'
import { BsChevronRight } from 'react-icons/bs'
import Separador from '../Separador/Separador'
import instagram from '../../../imagenes/iconos/instagram.png'
import facebook from '../../../imagenes/iconos/facebook.png'
import twitter from '../../../imagenes/iconos/twitter.png'
import youtube from '../../../imagenes/iconos/youtube.png'
import MenuCatalogo from './menuCatalogo/menuCatalogo'
import { useNavigate } from 'react-router-dom'

export default function MenuDesplegable(){
  const dispatch = useDispatch()
  let active=useSelector(state=>state.opciones)
  const navigate = useNavigate()
  const CategoriasHome = useSelector(state=>state.CategoriasHome)
  const [categoriasFinales, setCategoriasFinales]= useState([])

  function navegar(ruta){
    navigate(ruta)
    dispatch(cerrarTodo())
    window.scrollTo(0,0)
  }
  useEffect(()=>{
    if (CategoriasHome){
      let categoriasFinales =[]
      CategoriasHome.map((elem)=>{
        categoriasFinales.push({title:elem.title.toUpperCase(),ruta:elem.link, nueva:true, tipo:'producto'})
      })
      setCategoriasFinales(categoriasFinales)
    }
  },[CategoriasHome])

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

  return(
    <div className={active?styles.containerActivo:styles.containerInActivo}>
      <MenuCatalogo/>
      <h5 className={styles.bloque} onClick={()=>dispatch(cambiarOpciones(false))} ><AiOutlineClose/>CERRAR</h5>
      <h5 className={styles.subBloqueInicio} onClick={()=>navegar('../')}>INICIO <BsChevronRight/></h5>
      <div className={styles.separador1}>
        <Separador/>
      </div>
      <h5 className={styles.subBloque} onClick={()=>{dispatch(cambiarMenuCatalogo(true))}} >CATÁLOGO <BsChevronRight/> </h5>
      {
        categoriasFinales?.map((elem,index)=>{
          return(
            <a key={index} className={styles.subBloque} target='_blank' href={!elem.ruta || elem.ruta === 'undefined'?null:elem.ruta?.includes('https') || elem.ruta?.includes('http')?elem.ruta:`https://${elem.ruta}` }>{elem.title} <BsChevronRight/></a>
          )
        })
      }
      <div className={styles.separador}>
        <Separador/>
      </div>
      <div className={styles.tiendas}>
        <h5>TIENDAS ONLINE</h5>
        {tiendasFinales.map((elem, index)=>{
          return (<a key={index} href={elem.link==='undefined' || !elem.link ?null:elem.link?.includes('https') || elem.link?.includes('http')?elem.link:`https://${elem.link}`} target='_blank' className={styles.linksTiendas} > {elem.title}</a>)
        })}
      </div>
      <div className={styles.separador}>
        <Separador/>
      </div>
      <div className={styles.tiendas}>
        <h5>HUDSON</h5>
        <h6 className={styles.clases} onClick={()=>navegar('/Inspirate/1')}  >Inspírate</h6>
        <h6 className={styles.clases} onClick={()=>navegar('/Uso_Y_Cuidados')}>Uso y cuidados</h6>
        <h6 className={styles.clases} onClick={()=>navegar('/Nosotros')}>Nosotros</h6>
        <h6 className={styles.clases} onClick={()=>navegar('/Contacto')}>Contacto</h6>
      </div>
      <div className={styles.separador}>
        <Separador/>
      </div>
      <div className={styles.tiendas}>
        <a target='_blank' href='https://www.instagram.com/hudsonkitchenware/' className={styles.redes}>
          <img src={instagram}/>
          <h6>@hudsonkitchenware</h6>
        </a>
        <a target='_blank' href='https://www.facebook.com/HudsonKitchenware/' className={styles.redes}>
          <img src={facebook}/>
          <h6>/HudsonKitchenware</h6>
        </a>
        <a target="_blank" href='https://twitter.com/HudsonKitchen_' className={styles.redes}>
          <img src={twitter} />
          <h6>@HudsonKitchen_</h6>
        </a>
        <a target='_blank' href='https://www.youtube.com/channel/UCmATVdmApr3S6W-rGrxyitQ' className={styles.redes}>
          <img src={youtube}/>
          <h6>Hudson Kitchenware</h6>
        </a>
      </div>
    </div>
  )
}