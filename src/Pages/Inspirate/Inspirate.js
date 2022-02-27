import styles from './Inspirate.module.css'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import {CgOptions} from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'
import RecetaCard from '../../components/RecetaCard/RecetaCard'
import fideos from '../../imagenes/fideos.jfif'
import { useParams } from 'react-router-dom'
import Boton from '../../components/Boton/Boton'
import {createRef, useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import Gradient from '../../components/Gradient/Gradient'
import InspirateCard from '../../components/InspirateCard/InspirateCard'
import AliceCarousel from 'react-alice-carousel'

export default function Inspirate(){
  document.title=`Hudson | Inspirate`
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  
  let arr = [{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},]
  let page = useParams().page -1 
  //-------------------MOBILE-------------------
  let bloque = {inicio:0 + 10*page, final:9+ 10*page}
  let buttons = Math.ceil(arr.length/10)
  let iterable =[]
  for (let i = 0; i < buttons; i++) {
    iterable.push('')
  }
  //-------------------DESKTOP-------------------
  let bloqueDesktop = {inicio:0 + 12*page, final:11+ 12*page}
  let buttonsDesktop = Math.ceil(arr.length/12)
  let iterableDesktop =[]
  for (let i = 0; i < buttonsDesktop; i++) {
    iterableDesktop.push('')
  }
  
  
  
  
  let items= [<InspirateCard/>,<InspirateCard/>,<InspirateCard/>]
  let ref1 = createRef()
  let ref2 = createRef()
  let ref3 = createRef()
  let ref4 = createRef()
  
  function scrollTop(){
    window.scrollTo(0,0)
  }
  function check(ref){
    let hola = ref.current.checked
    console.log();
    if(hola === true){
      ref.current.checked = false
      console.log('hola');
      return
    }else{
      console.log('chau');
      ref.current.checked = true
    }

  }
  return(
    <div>
        <Gradient/>
      <div className={styles.header} >
        <div className={styles.headerMobile}>
          <AliceCarousel
            touchTracking
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            disableDotsControls
            disableButtonsControls
            paddingLeft={10}
            paddingRight={10}
            />
        </div>
        <div className={styles.headerDesktop}>
          <AliceCarousel
            items={items}
            controlsStrategy="alternate"
            disableDotsControls
            paddingLeft={10}
            paddingRight={10}
            
            />
        </div>
      </div>
      <div className={styles.filterMobile} id='filtros' >
        <div className={styles.filterBlock}><CgOptions/>  <h6>Filtrar</h6></div>
        <div className={styles.filterBlock}><FiSearch />  <h6>Buscar</h6></div>
      </div>
      <div className={styles.filterDesktop}>
        <div className={styles.rutaDesktop}>
          <span className={styles.ruta}>Inicio </span> <BsChevronRight/> <span className={styles.ruta}> INSPIRATE </span>  <BsChevronRight/> <span className={styles.nroPublicaciones}>(16 publicaciones)</span>
        </div>
        <div className={styles.filterBlock}><FiSearch />  <h6>Buscar</h6></div>
      </div>
        <div className={styles.otrasRecetasMobile} >
          {arr.map((elem, index)=>{
            if (index>=bloque.inicio && index <=bloque.final) {
              return(<RecetaCard img={elem.img} key={index} title={elem.text}/>)
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
            <input type='checkbox' ref={ref1} className={styles.filtroCheck}/>
            <label  className={styles.check} onClick={()=>check(ref1)}>RECETAS DULCES</label>
            <span className={styles.filtroNumber}>(6)</span>
          </div>
          <div>
            <input type='checkbox' ref={ref2} className={styles.filtroCheck}/>
            <label  className={styles.check} onClick={()=>check(ref2)}>RECETAS SALADAS</label>
            <span className={styles.filtroNumber}>(12)</span>
          </div>
          <div>
            <input type='checkbox' ref={ref3} className={styles.filtroCheck}/>
            <label  className={styles.check} onClick={()=>check(ref3)}>USO Y CUIDADOS</label>
            <span className={styles.filtroNumber}>(12)</span>
          </div>
          <div>
            <input type='checkbox' ref={ref4} className={styles.filtroCheck}/>
            <label  className={styles.check} onClick={()=>check(ref4)}>TRUCOS Y CONSEJOS</label>
            <span className={styles.filtroNumber}>(15)</span>
          </div>
        </div>
        <button className={styles.boton}>
          APLICAR
        </button>


        </div>
        <div className={styles.otrasRecetasDesktop}>
          {arr.map((elem, index)=>{
            if (index>=bloqueDesktop.inicio && index <=bloqueDesktop.final) {
              return(<RecetaCard img={elem.img} key={index} title={elem.text}/>)
            }
            return[]
          })}
          

        </div>
      </div>
        <div className={styles.paginacionMobile}>
          {page>0?<Boton text={<BsChevronLeft  />} click={scrollTop} ruta={`../Inspirate/${page}`}/>:null}
          {iterable.map((elem,index)=><Boton key={index} text={index + 1} click={scrollTop} relleno={index === page ?true:false} ruta={`../Inspirate/${index+1}`}/>)}
          {page+1<iterable.length?<Boton text={<BsChevronRight  />} click={scrollTop} ruta={`../Inspirate/${page+2}`}/>:null}
        </div>
        <div className={styles.paginacionDesktop}>
          {page>0?<Boton text={<BsChevronLeft  />} click={scrollTop} ruta={`../Inspirate/${page}`}/>:null}
          {iterableDesktop.map((elem,index)=><Boton key={index} text={index + 1} click={scrollTop} relleno={index === page ?true:false} ruta={`../Inspirate/${index+1}`}/>)}
          {page+1<iterableDesktop.length?<Boton text={<BsChevronRight  />} click={scrollTop} ruta={`../Inspirate/${page+2}`}/>:null}

        </div>
      
        <Footer contacto/>
    </div>
  )

}