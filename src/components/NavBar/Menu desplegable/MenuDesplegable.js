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
  


  return(
    <div className={active?styles.containerActivo:styles.containerInActivo}>
      <MenuCatalogo/>
      <h5 className={styles.bloque} onClick={()=>dispatch(cambiarOpciones(false))} ><AiOutlineClose/>CERRAR</h5>
      <h5 className={styles.subBloque} onClick={()=>{dispatch(cambiarMenuCatalogo(true))}} >CATÁLOGO <BsChevronRight/> </h5>
      <h5 className={styles.subBloque}  >COCCIÓN Y HORNEADO <BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >CAFÉ, TÉ Y MATE <BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >UTENSILIOS <BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >VAJILLA <BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >REPOSTERÍA <BsChevronRight/></h5>
      <h5 className={styles.subBloque}  >ORGANIZADORES <BsChevronRight/></h5>
      <div className={styles.separador}>
        <Separador/>
      </div>
      <div className={styles.tiendas}>
        <h5>TIENDAS ONLINE</h5>
        <h6>Argentina</h6>
        <h6>Uruguay</h6>
        <h6>USA</h6>
      </div>
      <div className={styles.separador}>
        <Separador/>
      </div>
      <div className={styles.tiendas}>
        <h5>HUDSON</h5>
        <h6 className={styles.clases} onClick={()=>{navigate('/Inspirate/1');dispatch(cerrarTodo())}}>Inspírate</h6>
        <h6 className={styles.clases} onClick={()=>navigate('/Uso_Y_Cuidados')}>Uso y cuidados</h6>
        <h6 className={styles.clases} onClick={()=>navigate('/Nosotros')}>Nosotros</h6>
        <h6 className={styles.clases} onClick={()=>navigate('/Contacto')}>Contacto</h6>
      </div>
      <div className={styles.separador}>
        <Separador/>
      </div>
      <div className={styles.tiendas}>
        <div className={styles.redes}>
          <img src={instagram}/>
          <h6>@hudsonkitchenware</h6>
        </div>
        <div className={styles.redes}>
          <img src={facebook}/>
          <h6>/HudsonKitchenware</h6>
        </div>
        <div className={styles.redes}>
          <img src={twitter} />
          <h6>@HudsonKitchen_</h6>
        </div>
        <div className={styles.redes}>
          <img src={youtube}/>
          <h6>Hudson Kitchenware</h6>
        </div>
      </div>
    </div>
  )
}