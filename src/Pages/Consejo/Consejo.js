import Header from '../../components/Receta-Consejo-Header/Header'
import styles from './Consejo.module.css'
import brocoli from '../../imagenes/brocoli.jfif'
import Gradient from '../../components/Gradient/Gradient'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Inspirado from '../../components/Inpirado/Inspirado'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
import fotoPersona from '../../imagenes/gastonDalmau.png'
import { useEffect, useState} from 'react'
import {useParams}from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/actions'
import { typeConsejo } from '../../types'
export default function Consejo (){
  document.title='Hudson | Trucos y Consejos'
  const params = useParams()
  const dispatch = useDispatch()
  const Consejos = useSelector(state=>state.Consejo)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    setVisible(true)
  })
  useEffect(()=>{
    dispatch(getData(typeConsejo))
  },[])
  
  const [headerIMG,setHeaderIMG]=useState()
  const [title,setTitle]=useState()
  const [introduccion,setIntroduccion]=useState()
  const [cocinero,setCocinero]=useState()
  const [desarrollo,setDesarrollo]=useState()
  const [subtitle, setSubtitle] = useState()
  const [contenido, setContenido] = useState([])
  useEffect(()=>{
    if (Consejos && Consejos.length>0){
      Consejos.forEach((elem,index)=>{
        if (elem.title.replace('?','').replace('¿','')=== params.selected) {
          setTitle(elem.title)
          setIntroduccion(elem.introduccion)
          setCocinero(elem.cocinero)
          setDesarrollo(elem.desarrollo)
          setHeaderIMG(elem.headerIMG)
          setSubtitle(elem.subtitulo)
          setContenido(elem.contenido)
        }
      })
    }
  },[Consejos])

  return(
    <div >
      <Gradient/>
      <Header img={headerIMG} title={title}/>
      <div className={`${visible?styles.Visible:styles.Invisible}`}>
        <div className={styles.consejo}>
          <p className={styles.parrafo}>{introduccion}</p>
        </div>
        <div className={styles.consejero}>
            <a href={cocinero?.link} target='_blank'>
              <img src={cocinero?.img} className={styles.consejeroImg}/>
            </a>
            <a href={cocinero?.link} target='_blank'>
              <h4 className={styles.consejeroTitle}>Hoy Cocina</h4>
              <h4 className={styles.consejeroTitle}> {cocinero?.nombre}</h4>
              <h4 className={styles.consejeroSubTitle}>Instagram</h4>
              <h4 className={styles.consejeroSubTitle}> {cocinero?.redSocial} </h4>
            </a>

          </div>
        <div className={styles.videoDesktop} >
          {desarrollo?.includes('cloudinary')
            ?<img className={styles.fotoDesarrolloDesktop} src={desarrollo}/>
            :<iframe width='100%'height='100%' src={`https://www.youtube.com/embed/${desarrollo}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          }
        </div>
        <div className={styles.desarrolloMobile}>
        {
          desarrollo?.includes('cloudinary')
          ?<img className={styles.fotoDesarrolloMobile} src={desarrollo}/>
          :<iframe className={styles.videoMobile} width='100%'height='250px' src={`https://www.youtube.com/embed/${desarrollo}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        }
        </div>
        <div className={`${styles.consejo} ${styles.consejoDesktop}`}>
          <h3 className={styles.title}>{subtitle}</h3>
          <ul className={styles.algunosConsejos}>
            {contenido?.map((elem, index)=><li key={index}>{elem}</li>)}
          </ul>
        </div>
      </div>
      <SeparadorChico/>
      <Inspirado title='Sigue inspirandote...'/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
      rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer contacto/>
    </div>
  )
}                                                                                                                                                  