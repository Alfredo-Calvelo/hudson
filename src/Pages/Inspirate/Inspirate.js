import styles from './Inspirate.module.css'
import fondo from  '../../imagenes/Fondo Home.jpg'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import {CgOptions} from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'
import RecetaCard from '../../components/RecetaCard/RecetaCard'
import fideos from '../../imagenes/fideos.jfif'
import { useParams } from 'react-router-dom'
import Boton from '../../components/Boton/Boton'
import { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'

export default function Inspirate(){
  let arr = [{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},{img:fideos, text:'Bruschetta de palta y huevo soft'},]
  let page = useParams().page -1 
  let bloque = {inicio:0 + 10*page, final:9+ 10*page}
  let buttons = Math.ceil(arr.length/10)
  let iterable =[]

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  for (let i = 0; i < buttons; i++) {
    iterable.push('')
  }
  function hola(){
    window.scrollTo(0,0)
  }
 
  return(
    <div>
      <div className={styles.header}>
        <div className={styles.gradient}></div>
        <img className={styles.headerImg} src={fondo}/>
        <div className={styles.title}>
          <h3>Pasta mediterranea express</h3>
          <h6 className={styles.verReceta}> VER RECETA  <BsChevronRight/></h6>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.filterBlock}><CgOptions/>  <h6>Filtrar</h6></div>
        <div className={styles.filterBlock}><FiSearch />  <h6>Buscar</h6></div>
      </div>
      <div className={styles.otrasRecetas} >
        {arr.map((elem, index)=>{
          if (index>=bloque.inicio && index <=bloque.final) {
            return<RecetaCard img={elem.img} key={index} title={elem.text}/>
          }
        })}


      </div>
        <div className={styles.paginacion}>
          {page>0?<Boton text={<BsChevronLeft  />} click={hola} ruta={`../Inspirate/${page}`}/>:null}
          {iterable.map((elem,index)=><Boton key={index} text={index + 1} click={hola} relleno={index === page ?true:false} ruta={`../Inspirate/${index+1}`}/>)}
          {page+1<iterable.length?<Boton text={<BsChevronRight  />} click={hola} ruta={`../Inspirate/${page+2}`}/>:null}
        </div>
      
        <Footer/>
    </div>
  )

}