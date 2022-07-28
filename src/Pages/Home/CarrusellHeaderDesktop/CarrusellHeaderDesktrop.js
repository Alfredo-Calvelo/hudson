import { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import { useDispatch, useSelector } from "react-redux"
import CarrusellArrowLeft from "../../../components/CarrusellArrow/Left/CarrusellArrowLeft"
import CarrusellArrowRight from "../../../components/CarrusellArrow/Rigth/CarrusellArrowRight"
import DotButton from "../../../components/DotButton/DotButton"
import { typeBanner } from "../../../types"
import axios from 'axios'
import styles from './CarrusellHeaderDesktrop.module.css'
import Boton from "../../../components/Boton/Boton"
import { getData } from "../../../redux/actions"




export default function CarrusellHeaderDesktrop(props){
  let tiempoCarrusell = useSelector(state=>state.tiempoCarrusell)
  const [headers, setHeaders]= useState([])
  const [headersFinales, setHeadersFinales] = useState()
  const dispatch = useDispatch()
  const headersState = useSelector(state=>state.HeaderBanner)
  function flechaDerecha() {
    return CarrusellArrowRight(568)
  }
  function flechaIzquierda() {
    return CarrusellArrowLeft(568)
  }

  useEffect(()=>{
    dispatch(getData(typeBanner))
  },[])
  useEffect(()=>{
    console.log(headersState);
    if (headersState && headers.length<1) {
      let itemsHeader = headersState.map((elem,index)=>{
    
        let CTA = JSON.parse(elem?.CTA);
        return(
          <div key={index} className={styles.top} style={{backgroundImage:`url(${elem.image})`}} >
            <h1 className={styles.tittle}>{`${elem?.title}`}</h1>
            <h3 className={styles.subTittle}>{`${elem?.description}`}</h3>
            <h5 className={styles.aclaracion}>{`${elem?.footer}`}</h5>
            {
              CTA.textoBoton?
              <div className={styles.boton} >
              <Boton link={CTA?.linkBoton} text={`${CTA?.textoBoton}`} relleno />
            </div>
            :null  
          }
          </div>
        )
      })
      setHeaders(itemsHeader)
    }
  },[headersState])



  
  return(
    <>
      <div className={styles.headerCarusellMobile}>
      <AliceCarousel
      touchTracking
      mouseTracking
      items={headers}
      autoWidth
      renderDotsItem={DotButton}
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={tiempoCarrusell}
      infinite
      />
    </div>
    <div className={styles.headerCarusellDesktop}>
      <AliceCarousel
      touchTracking
      mouseTracking
      items={headers}
      autoWidth
      renderDotsItem={DotButton}
      renderNextButton={flechaDerecha}
      renderPrevButton={flechaIzquierda}
      autoPlay
      autoPlayInterval={tiempoCarrusell}
      infinite
      />
    </div>
    </>
      
  )
}