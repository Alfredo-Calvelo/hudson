import logoBlanco from '../../imagenes/logoBlanco.png'
import logoNegro from '../../imagenes/logoNegro.png'
import SearchBar from '../SearchBar/SearchBar'
import CambiarIdioma from './CambiarIdioma/CambiarIdioma'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cambiarOpciones, menuActivoNavBar} from '../../redux/actions'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState,useRef } from 'react'
import DesplegableDesktop from './DesplegableDesktop/DesplegableDesktop'



export default function NavBar(){
  const router = useLocation()
  let ruta =router.pathname.split('/');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navBarActiva = useSelector(state=>state.navBar)
  let menuDesplegable= useSelector(state=>state.menuDesplegable)

  const [desplegableActivo, setDesplegableActivo]= useState(false)
  const [tipoMenu,setTipoMenu] = useState()
  const [verMas , setVerMas] = useState()
  const [title, setTitle] = useState()
  const [links , setLinks] = useState([])


  const [catalogosTitles,setCatalogosTitles] = useState()
  const [segundaColumnaTitles, setSegundaColumnaTitles] = useState()
  const Catalogos = useSelector(state=>state.Catalogo)
  useEffect(()=>{
    if (Catalogos) {
      let titles = []
      let segundaColumna=[]
      Catalogos.forEach((elem,index)=>{
        if (index<8) {
          titles = [...titles,elem.title]
        }
        else if(index> 7 && index<16){
          segundaColumna=[...segundaColumna,elem.title]
        }
      })
      setCatalogosTitles(titles)
      setSegundaColumnaTitles(segundaColumna)
    }
  },[Catalogos])


  function navegar(ruta){
    navigate(ruta)
  }
  function apagar(){
    dispatch(menuActivoNavBar(false))

  }
  function desplegar (tipo){
    dispatch(menuActivoNavBar(true))
    setTipoMenu(tipo)
    if (tipo==='productos') {
      setTitle('PRODUCTOS')
      setVerMas('VER TODOS')
      setLinks([
        {title:'COCCION Y HORNEADO', ruta:''},
        {title:'CAFÉ, TÉ Y MATE', ruta:''},
        {title:'UTENSILIOS', ruta:''},
        {title:'VAJILLA', ruta:''},
        {title:'ORGANIZADORES', ruta:''},
        {title:'REPOSTERÍA',ruta:''}
      ])
    }else
    if (tipo === 'catalogo') {
      setVerMas('')
      setTitle('CATÁLOGO')
      setLinks(
        catalogosTitles?.map((elem)=>{
          return{title:elem.toUpperCase(), ruta:`../Catalogo/${elem}`}
        })
      )
    }else
    if (tipo==='tiendaOnline') {
      setVerMas('')
      setTitle('TIENDA ONLINE')
      setLinks([
        {title:'ARGENTINA', ruta:''},
        {title:'URUGUAY', ruta:''},
        {title:'USA', ruta:''}
      ])
    }
    
    setDesplegableActivo(true)
    if (tipo === tipoMenu && desplegableActivo) {
      setDesplegableActivo(false)
    }
  }

  return(
    <div className={navBarActiva? styles.container:styles.containerInactivo} >
      <div className={styles.NavBar} >
        <div className={styles.logos} onClick={()=>{navigate('/');window.scrollTo(0,0)}}>
          <img alt='' className={navBarActiva? styles.logoActivo:styles.logo} src={logoNegro} />
          <img alt='' className={navBarActiva?styles.logo:styles.logoActivo} src={logoBlanco} />
        </div>
        <div className={styles.desktopLinks} >
          <div className={styles.Full} onMouseLeave={()=>apagar()} onMouseEnter={()=>desplegar('productos')}>
            <span className={navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >PRODUCTOS</span>
          </div>
          <div className={styles.Full} onMouseLeave={()=>apagar()} onMouseEnter={()=>desplegar('catalogo')}>
            <span className={navBarActiva? styles.desktopLink :styles.desktopLinkActivo}  >CÁTALOGO</span>
          </div>
          <div className={styles.Full}  onClick={()=>navegar('../Inspirate/1')}>
            <span className={ruta[1]==='Inspirate'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo}>INSPÍRATE</span>
          </div>
          <div className={styles.Full} onClick={()=>navegar('../Uso_Y_Cuidados')}>
            <span className={ruta[1]==='Uso_Y_Cuidados'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >{'usos y cuidados'.toUpperCase()}</span>
          </div>
          <div className={styles.Full} onClick={()=>navegar('Nosotros')}>
            <span className={ruta[1]==='Nosotros'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >NOSOTROS</span>
          </div>
          <div className={styles.Full} onClick={()=>navegar('Contacto')}>
            <span className={ruta[1]==='Contacto'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >CONTACTO</span>
          </div>
          <div className={styles.Full} onMouseLeave={()=>apagar()} onMouseEnter={()=>desplegar('tiendaOnline')}>
            <span className={navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >TIENDA ONLINE</span>
          </div>
        </div>

          <div className={styles.cambiarIdiomaDesktop}>
            <CambiarIdioma activo={navBarActiva}/>
            <SearchBar activo={navBarActiva} />
          </div>


          <div className={styles.cambiarIdiomaMobile}>
            <SearchBar activo={navBarActiva} />
            <CambiarIdioma activo={navBarActiva}/>
          </div>
          <div className={navBarActiva? styles.menu:styles.menuActivo}
          onClick={()=>{
            if (menuDesplegable) {
              dispatch(cambiarOpciones(false))
            }else dispatch(cambiarOpciones(true))
            
            }}
          >
            <div className={!navBarActiva? styles.activo:styles.inactivo} >
              <AiOutlineMenu />  
            </div>
            
            
          </div>
      </div>
      <DesplegableDesktop segundaColumna={tipoMenu==='catalogo'?segundaColumnaTitles:false} links={links} verMas={verMas} activo={desplegableActivo} title={title}/>
    </div>
  )
}


