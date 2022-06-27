import styles from './Inspirate.module.css'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import {CgOptions} from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'
import RecetaCard from '../../components/RecetaCard/RecetaCard'
import fideos from '../../imagenes/fideos.jfif'
import { useParams } from 'react-router-dom'
import Boton from '../../components/Boton/Boton'
import {createRef, useEffect, useRef, useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Gradient from '../../components/Gradient/Gradient'
import InspirateCard from '../../components/InspirateCard/InspirateCard'
import AliceCarousel from 'react-alice-carousel'
import DotButton from '../../components/DotButton/DotButton'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/actions'
import { typeConsejo, typeReceta } from '../../types'

export default function Inspirate(){
  document.title=`Hudson | Inspirate`
  const dispatch = useDispatch()
  const [filtroBuscar, setFiltroBuscar] = useState('')
  const [cosasMostrar, setCosasMostrar] = useState()
  const [cantidadDulces, setCantidadDulces] = useState(0)
  const [cantidadSaladas, setCantidadSaladas] = useState(0)
  const [cantidadConsejos, setCantidadConsejos] = useState(0)
  const [cantidadUYC, setCantidadUYC] = useState(0)
  const [filtroUYC, setFiltroUYC] = useState(false)
  const [filtroDulce,setFiltroDulce] = useState(false)
  const [filtroSalado, setFiltroSalado] = useState(false)
  const [filtrosConsejos, setFiltrosConsejos] = useState(false)
  const [filtrosMobile, setFiltrosMobile] = useState(false)
  const filtrosMobileRef = useRef()
  const [cardsHeader, setCardsHeader]= useState([])
  let busqueda = useSelector(state=>state.busqueda)
  useEffect(()=>{
    window.scrollTo(0,0)
    dispatch(getData(typeReceta))
    dispatch(getData(typeConsejo))
  },[])
  
  const state = useSelector(state=>state)
  const [cosas,setCosas] = useState()
  useEffect(()=>{
    let Recetas 
    let Consejos
    if (state.Receta) {
      Recetas = state?.Receta?.map(elem=>{
        return {img:elem.desarrollo, text:elem.title,tipo:elem.tipo,fecha:elem.fechaCreacion,headerImg:elem.headerIMG}
      })
    }
    if (state.Consejo) {
      Consejos =state?.Consejo?.map((elem,index)=>{
        return{img:elem.desarrollo, text:elem.title,tipo:elem.tipo,fecha:elem.fechaCreacion,headerImg:elem.headerIMG}
      })
    }
    
    if (Recetas && Consejos) {
      let cosas = [...Recetas,...Consejos]
      cosas = cosas.sort(function (a,b) {
        if (Date?.parse(a.fecha) > Date?.parse(b.fecha)) {return -1}
        if (Date?.parse(a.fecha) < Date?.parse(b.fecha)) {return 1}
        if (Date?.parse(a.fecha) === Date?.parse(b.fecha)) {return 0}
      });
      cosas=[...cosas,...state?.UsosYCuidados]
      setCosas(cosas)
    }
  },[state])
  
  useEffect(()=>{
    let dulces =0
    let saladas =0
    let consejos = 0
    if (cosas?.length>0) {
      cosas.map((elem,index)=>{
        if (elem) { 
          if (elem?.tipo==='Consejo') {consejos++}
          else if(elem.tipo === 'Receta Dulce'){dulces++}
          else if (elem.tipo==='Receta Salada'){saladas++}
        }
      })
      setCantidadDulces(dulces)
      setCantidadSaladas(saladas)
      setCantidadConsejos(consejos)
      setCantidadUYC(state?.UsosYCuidados.length)
    }
  },[cosas])
  let buscador = useParams().buscador
  useEffect(()=>{
      setFiltroBuscar(busqueda)
  },[busqueda])
  let page = useParams().page -1 
  //-------------------MOBILE-------------------
  let bloque = {inicio:0 + 10*page, final:9+ 10*page}
  let buttons = Math.ceil(cosasMostrar?.length/10)
  let iterable =[]
  for (let i = 0; i < buttons; i++) {
    iterable.push('')
  }
  //-------------------DESKTOP-------------------
  let bloqueDesktop = {inicio:0 + 12*page, final:11+ 12*page}
  let buttonsDesktop = Math.ceil(cosasMostrar?.length/12)
  let iterableDesktop =[]
  for (let i = 0; i < buttonsDesktop; i++) {
    iterableDesktop.push('')
  }
  
  
  
  
  
  
  let ref1 = createRef()
  let ref2 = createRef()
  let ref3 = createRef()
  let ref4 = createRef()
  
  function scrollTop(){
    window.scrollTo(0,0)
  }
 
  let tiempoCarrusell = useSelector(state=>state.tiempoCarrusell)
  
  

  function filtrar(arr) {
    if (filtroSalado == false && filtroDulce==false && filtrosConsejos==false && filtroUYC==false){
      return arr
    }else{
      let cosas=[]
      arr.forEach((elem,index)=>{
        if (filtroSalado && elem.tipo==='Receta Salada') {cosas.push(elem)}
        if (filtroDulce && elem.tipo==='Receta Dulce') {cosas.push(elem)}
        if (filtrosConsejos && elem.tipo==='Consejo') {cosas.push(elem)}
        if (filtroUYC && elem.tipo==='usosYCuidados') {cosas.push(elem)}
      })
      return cosas
    }
  }

  function filtrarBusquedaBuscar(arr) {
    let arrDevuelta = []
    arr.forEach((elem,index)=>{
      if (elem.title) {
        if (elem.tipo === 'usosYCuidados' && elem?.title.toLowerCase().includes(filtroBuscar.toLowerCase())){
          arrDevuelta=[...arrDevuelta,elem]
        }
      }
      else if (elem.text.toLowerCase().includes(filtroBuscar.toLowerCase())) {
        arrDevuelta=[...arrDevuelta,elem]
      }
    })
    return arrDevuelta
  }
  useEffect(()=>{
    if (cosas?.length > 0) {
      let cosasMostrar=cosas
      if (filtroDulce || filtroSalado || filtrosConsejos || filtroUYC) {
        cosasMostrar=filtrar(cosas)
      }
      
      if (filtroBuscar.length>0) {
        cosasMostrar = filtrarBusquedaBuscar(cosasMostrar)
      }
      setCosasMostrar(cosasMostrar)
    }
    
  },[cosas,filtroBuscar,filtroDulce,filtroSalado,filtrosConsejos,filtroUYC])

  useEffect(()=>{
    if (cosas?.length>0) {
      let cards = []
      cosas.forEach((elem,index)=>{
        if (index<3) {
          cards=[...cards,<InspirateCard img={elem.headerImg}title={elem.text} tipo={elem.tipo}/>]
        }
      })
      setCardsHeader(cards)
    }
  },[cosas])

  return(
    <div>
        <Gradient/>
      <div className={styles.header} >
        <div className={styles.headerMobile}>
          <AliceCarousel
            touchTracking
            mouseTracking
            items={cardsHeader}
            controlsStrategy="alternate"
            disableDotsControls
            disableButtonsControls
            paddingLeft={10}
            paddingRight={10}
            
            />
        </div>
        <div className={styles.headerDesktop}>
          <AliceCarousel
            items={cardsHeader}
            controlsStrategy="alternate"
            paddingLeft={10}
            paddingRight={10}
            touchTracking
            mouseTracking
            autoWidth
            renderDotsItem={DotButton}
            disableButtonsControls
            autoPlay
            autoPlayInterval={tiempoCarrusell}
            infinite
            
            />
        </div>
      </div>
      <div className={styles.filterMobile} id='filtros' >
        <div className={`${styles.filterBlock} ${styles.filterBlockFiltros}`} onClick={e=>{setFiltrosMobile(!filtrosMobile)}}>
          <div className={styles.filtrosDesplegablesContainer}>
            <div className={styles.filtrosDesplegables}>
              <ul ref={filtrosMobileRef}  className={styles.listaFiltros} style={{
                height :filtrosMobile? `80px` : '0px',
                padding:filtrosMobile?'10px 10px 10px 10px':'0px 10px 0px 10px' 
              }}>
                <li>
                  <input checked={filtroDulce} onChange={e=>setFiltroDulce(e.target.checked)} type='checkbox' id='filtro1' ref={ref1} className={styles.filtroCheckMobile}/>
                  <label htmlFor='filtro1' className={styles.checkMobile}>SWEET RECIPE</label>
                  <span className={styles.filtroNumberMobile}>({cantidadDulces})</span>
                </li>
                <li>
                  <input checked={filtroSalado} onChange={e=>setFiltroSalado(e.target.checked)} type='checkbox' id='filtro2' ref={ref2} className={styles.filtroCheckMobile}/>
                  <label htmlFor='filtro2' className={styles.checkMobile}>SALTY RECIPE</label>
                  <span className={styles.filtroNumberMobile}>({cantidadSaladas})</span>
                </li>
                <li>
                <input checked={filtroUYC} onChange={e=>setFiltroUYC(e.target.checked)} type='checkbox' id='filtro3' ref={ref3} className={styles.filtroCheckMobile}/>
                  <label htmlFor='filtro3' className={styles.checkMobile}   >USES AND CARE</label>
                  <span className={styles.filtroNumberMobile}>({cantidadUYC})</span>
                </li>
                <li>
                  <input checked={filtrosConsejos} onChange={e=>setFiltrosConsejos(e.target.checked)} type='checkbox' id='filtro4' ref={ref4} className={styles.filtroCheckMobile}/>
                  <label htmlFor='filtro4' className={styles.checkMobile} >TRICKS AND TIPS</label>
                  <span className={styles.filtroNumberMobile}>({cantidadConsejos})</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.textsFiltros}>
            <CgOptions/>  
            <h6>Filter</h6>
          </div>
        </div>
        <div className={styles.filterBlock}><FiSearch />
          <input value={filtroBuscar} className={styles.inputBuscarMobile} onChange={e=>setFiltroBuscar(e.target.value)} placeholder='Search'/>
        </div>
      </div>
      <div className={styles.filterDesktop}>
        <div className={styles.rutaDesktop}>
          <span className={styles.ruta}>Inicio </span> <BsChevronRight/> <span className={styles.ruta}> INSPIRATE </span>  <BsChevronRight/> <span className={styles.nroPublicaciones}>({cosas?.length} publicaciones)</span>
        </div>
        <div className={styles.filterBlock}><FiSearch />  <h6>Buscar</h6> <input value={filtroBuscar} onChange={e=>setFiltroBuscar(e.target.value)} className={styles.inputBuscar}/></div>
      </div>
        <div className={styles.otrasRecetasMobile}>
          {cosasMostrar?.map((elem, index)=>{
            if (index>=bloque.inicio && index <=bloque.final) {
              if (elem.tipo ==='usosYCuidados') {
                return(<RecetaCard tipo={elem?.tipo} img={elem.foto} key={index} title={elem?.title}/>)
              }
              return(<RecetaCard tipo={elem?.tipo} img={elem.headerImg} key={index} title={elem?.text}/>)
            }
            return[]
          })}
        </div>
      <div className={styles.recetasDesktop}>
        <div className={styles.filtros}>
        <h3 className={`${styles.filtrarPor} ${styles.filtrosHeader}`}>Filtrar por</h3>
        <h3 className={`${styles.publicaciones} ${styles.filtrosHeader}`}>Publicaciones</h3>
        <div className={styles.filtrosCategorias}>

          <div>
            <input checked={filtroDulce} onChange={e=>setFiltroDulce(e.target.checked)} type='checkbox' id='filtro1' ref={ref1} className={styles.filtroCheck}/>
            <label htmlFor='filtro1' className={styles.check}>RECETAS DULCES</label>
            <span className={styles.filtroNumber}>({cantidadDulces})</span>
          </div>
          <div>
            <input checked={filtroSalado} onChange={e=>setFiltroSalado(e.target.checked)} type='checkbox' id='filtro2' ref={ref2} className={styles.filtroCheck}/>
            <label htmlFor='filtro2' className={styles.check}>RECETAS SALADAS</label>
            <span className={styles.filtroNumber}>({cantidadSaladas})</span>
          </div>
          <div>
            <input checked={filtroUYC} onChange={e=>setFiltroUYC(e.target.checked)} type='checkbox' id='filtro3' ref={ref3} className={styles.filtroCheck}/>
            <label htmlFor='filtro3' className={styles.check}>USO Y CUIDADOS</label>
            <span className={styles.filtroNumber}>({cantidadUYC})</span>
          </div>
          <div>
            <input checked={filtrosConsejos} onChange={e=>setFiltrosConsejos(e.target.checked)} type='checkbox' id='filtro4' ref={ref4} className={styles.filtroCheck}/>
            <label htmlFor='filtro4' className={styles.check} >TRUCOS Y CONSEJOS</label>
            <span className={styles.filtroNumber}>({cantidadConsejos})</span>
          </div>
        </div>


        </div>
        <div className={styles.otrasRecetasDesktop}>
          {cosasMostrar?.map((elem, index)=>{
            if (index>=bloqueDesktop.inicio && index <=bloqueDesktop.final) {
              if (elem.tipo ==='usosYCuidados') {
                return(<RecetaCard tipo={elem?.tipo} img={elem.foto} key={index} title={elem?.title}/>)
              }
              return(<RecetaCard tipo={elem?.tipo} img={elem.headerImg} key={index} title={elem?.text}/>)
            }
            return[]
          })}
          

        </div>
      </div>
        <div className={styles.paginacionMobile}>
          {page>0?<Boton actual text={<BsChevronLeft/>} click={scrollTop} ruta={`../Inspirate/${page}`}/>:null}
          {iterable.map((elem,index)=><Boton actual key={index} text={index + 1} click={scrollTop} relleno={index === page ?true:false} ruta={`../Inspirate/${index+1}`}/>)}
          {page+1<iterable.length?<Boton actual text={<BsChevronRight/>} click={scrollTop} ruta={`../Inspirate/${page+2}`}/>:null}
        </div>
        <div className={styles.paginacionDesktop}>
          {page>0?<Boton actual text={<BsChevronLeft  />} click={scrollTop} ruta={`../Inspirate/${page}`}/>:null}
          {iterableDesktop.map((elem,index)=><Boton actual key={index} text={index + 1} click={scrollTop} relleno={index === page ?true:false} ruta={`../Inspirate/${index+1}`}/>)}
          {page+1<iterableDesktop.length?<Boton actual text={<BsChevronRight  />} click={scrollTop} ruta={`../Inspirate/${page+2}`}/>:null}

        </div>
      
        <Footer contacto/>
    </div>
  )

}