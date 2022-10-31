import { useDispatch, useSelector } from 'react-redux'
import styles from './menuCatalogo.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Separador from '../../Separador/Separador.js'
import { cambiarMenuCatalogo, cerrarTodo } from '../../../../redux/actions'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function MenuCatalogo(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titles,setTitles] = useState()
  let active=useSelector(state=>state.menuCatalgo)
  let obj = {
    hola:'hola',
    chau:'chau'
  }
  function navegar(ruta){
    navigate(ruta)
    dispatch(cerrarTodo())
    window.scrollTo(0,0)
  }
  const Catalogos = useSelector(state=>state.Catalogo)
  
  useEffect(()=>{
    if (Catalogos) {
      let titles = []
      Catalogos.map((elem)=>{
        if (elem.visibilidad === 'Visible') {
          return titles.push(elem.title)
        }
      })
      setTitles(titles)
    }
  },[Catalogos])
  return(
    <div className={active?styles.containerActivo:styles.containerInActivo}>
      <h5 className={styles.bloque} onClick={()=>{dispatch(cambiarMenuCatalogo(false))}} ><BsChevronLeft/>CATALOGO</h5>
      {titles?.map((elem,index)=>{
        return(
          <h5 key ={index}className={styles.subBloque} onClick={()=>navegar(`../Catalogo/${elem}`)} >{elem.toUpperCase()}<BsChevronRight/></h5>
        )
      })}
      <div className={styles.separador}>
        <Separador/>
      </div>
    </div>
  )
}