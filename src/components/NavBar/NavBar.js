import logoBlanco from '../../imagenes/logoBlanco.png'
import logoNegro from '../../imagenes/logoNegro.png'
import SearchBar from '../SearchBar/SearchBar'
import CambiarIdioma from './CambiarIdioma/CambiarIdioma'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cambiarOpciones, menuActivoNavBar} from '../../redux/actions'
import { useNavigate, useLocation, Link } from 'react-router-dom'
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
  const CategoriasHome = useSelector(state=>state.CategoriasHome)
  const [categoriasFinales, setCategoriasFinales]= useState([])
  const Tiendas = useSelector(state=>state.Tiendas)
  const [tiendasFinales, setTiendasFinales] = useState([])
  useEffect(()=>{
    if (Tiendas && Tiendas[0].tiendas) {
      let copiaTiendas =[] 
      Tiendas[0].tiendas.map((elem, index)=>{
        copiaTiendas.push({title:elem?.title?.toUpperCase(), link:elem.URL, tipo:'producto'})
      })
      
      setTiendasFinales(copiaTiendas)
    }
  },[Tiendas])

  const [catalogosTitles,setCatalogosTitles] = useState()
  const [segundaColumnaTitles, setSegundaColumnaTitles] = useState()
  const Catalogos = useSelector(state=>state.Catalogo)
  useEffect(()=>{
    if (Catalogos) {
      let titles = []
      let segundaColumna=[]
      Catalogos.forEach((elem,index)=>{
        if (index<8) {
          titles= [...titles,elem]
        }
        else if(index> 7 && index<16){
          segundaColumna=[...segundaColumna,elem]
        }
      })
      setCatalogosTitles(titles)
      setSegundaColumnaTitles(segundaColumna)
    }
  },[Catalogos])

  useEffect(()=>{
    if (CategoriasHome){
      let categoriasFinaleslocal =[]
      CategoriasHome.map((elem)=>{
        categoriasFinaleslocal.push({title:elem.title.toUpperCase(),link:elem.link, nueva:true, tipo:'producto'})
      })
      setCategoriasFinales(categoriasFinaleslocal)
    }
  },[CategoriasHome])

  function apagar(){
    dispatch(menuActivoNavBar(false))

  }
  function desplegar (tipo){
    dispatch(menuActivoNavBar(true))
    setTipoMenu(tipo)
    if (tipo==='productos') {
      setTitle('PRODUCTOS')
      setVerMas('VER TODOS')
      setLinks(categoriasFinales)
    }else
    if (tipo === 'catalogo') {
      setVerMas('')
      setTitle('CATÁLOGO')
      setLinks(
        catalogosTitles?.map((elem)=>{
          
          return{title:elem.title.toUpperCase(), ruta:`../Catalogo/${elem.title}`,icono:elem?.icono,iconoId:elem?.iconoId,color:elem.colorMenu}
        })
      )
    }else
    if (tipo==='tiendaOnline') {
      setVerMas('')
      setTitle('TIENDA ONLINE')
      setLinks(tiendasFinales)
    }
    
    setDesplegableActivo(true)
    if (tipo === tipoMenu && desplegableActivo) {
      setDesplegableActivo(false)
    }
  }

  return(
    <div className={navBarActiva? styles.container:styles.containerInactivo} >
      <div className={styles.NavBar} >
        <Link className={styles.logos} to={'../342b5e2221e0f2587772acc90cd7b154'}>
          <img alt='' className={navBarActiva? styles.logoActivo:styles.logo} src={logoNegro} />
          <img alt='' className={navBarActiva?styles.logo:styles.logoActivo} src={logoBlanco} />
        </Link>
        <div className={styles.desktopLinks} >
          <div className={styles.Full} onMouseLeave={()=>apagar()} onMouseEnter={()=>desplegar('productos')}>
            <span className={navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >PRODUCTOS</span>
          </div>
          <div className={styles.Full} onMouseLeave={()=>apagar()} onMouseEnter={()=>desplegar('catalogo')}>
            <span className={navBarActiva? styles.desktopLink :styles.desktopLinkActivo}  >CÁTALOGO</span>
          </div>
          <Link className={styles.Full}  to={'../Inspirate/1'}>
            <span className={ruta[1]==='Inspirate'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo}>INSPÍRATE</span>
          </Link>
          <Link className={styles.Full} to={'../Uso_Y_Cuidados'}>
            <span className={ruta[1]==='Uso_Y_Cuidados'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >{'Usos y cuidados'.toUpperCase()}</span>
          </Link>
          <Link className={styles.Full} to={'Nosotros'}>
            <span className={ruta[1]==='Nosotros'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >NOSOTROS</span>
          </Link>
          <Link className={styles.Full} to={'Contacto'}>
            <span className={ruta[1]==='Contacto'?styles.desktopLinkRojo:navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >CONTACTO</span>
          </Link>
          <a className={styles.Full} target='_blank' href='https://www.hudsoncocina.com.ar/?mshops-cookie-isguest=false&mshops-redirection-timestamp=1654803684039&mshops-cookie-cp=1430' onMouseLeave={()=>apagar()} onMouseEnter={()=>desplegar('tiendaOnline')}>
            <span className={navBarActiva? styles.desktopLink :styles.desktopLinkActivo} >TIENDA ONLINE</span>
          </a>
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


