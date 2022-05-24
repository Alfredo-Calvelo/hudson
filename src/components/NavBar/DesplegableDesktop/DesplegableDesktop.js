import styles from './DesplegableDesktop.module.css'
import DesplegableDesktopCard from './DesplegableDesktopCard/DesplegableDesktopCard'
import olla from '../../../imagenes/ollaMasterChef.png'
import plato from '../../../imagenes/plato.png'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import masterchef from '../../../imagenes/iconos/masterChef.png'
import { useDispatch, useSelector } from 'react-redux'
import { menuActivoMenu } from '../../../redux/actions'

export default function DesplegableDesktop (props){
    const referencia = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let altura= referencia.current?.clientHeight
    let navBarActivo = useSelector(state=>state.menuActivoNavBar)
    let menuActivo = useSelector(state=>state.menuActivoMenu)
    let estilo = {
        height:`${navBarActivo || menuActivo?altura:0}px`
    }
    function desplegar(){
        dispatch(menuActivoMenu(true))
    }
    function retraer(){
        dispatch(menuActivoMenu(false))
    }

    return(
        <div className={styles.desplegable} style={estilo} onMouseEnter={()=>desplegar()} onMouseLeave={()=>retraer()} >
            <div className={styles.container} ref={referencia}>
                <div className={styles.links}>
                    <span className={styles.title}>
                        {props.title} 
                        {props.verMas
                        ?<span className={styles.verMas}>{props.verMas}</span>
                        :null
                    }
                    </span>
                    <div className={styles.rutas}>
                        {props.links?.map((elem, index)=>{
                            if (elem?.title?.toLowerCase().includes('masterchef')) {
                                return(
                                    <span 
                                    key={index} 
                                    onClick={()=>{
                                        if (elem.nueva) {
                                            window.open(elem.ruta, '_blank');
                                        }
                                        else{
                                            navigate(elem.ruta)
                                        }
                                    }} 
                                    className={`${styles.link} ${styles.masterChef}`}
                                    >
                                        <img className={styles.masterChefImg} src={masterchef}/> 
                                        {elem.title}
                                    </span>
                                )
                            }
                            return <span key={index} onClick={()=>navigate('https://www.youtube.com/')} className={styles.link}>{elem?.title}</span>
                        })}
                    </div>
                </div>
                    {props.segundaColumna && props.segundaColumna.length>0?
                    <div className={styles.segundaColumna}>
                            {props.segundaColumna?.map((elem, index)=>{
                            if (elem?.title?.toLowerCase().includes('masterchef')) {
                                return(
                                    <span 
                                    key={index} 
                                    onClick={()=>{
                                        if (elem.nueva) {
                                        }
                                        else{
                                            navigate(elem.ruta)
                                        }
                                    }}
                                    className={`${styles.link} ${styles.masterChef}`}
                                    >
                                        <img className={styles.masterChefImg} src={masterchef}/> 
                                        {elem.title}
                                    </span>
                                )
                            }
                            return <span key={index} onClick={()=>navigate(`../Catalogo/${elem}`)} className={styles.link}>{elem.toUpperCase()}</span>
                        })}
                    </div>:null
                    }
                <div className={styles.cards}>
                    <DesplegableDesktopCard ruta='../Catalogo/Master Chef' img={olla} masterchef title='LÍNEA MASTERCHEF' subTitle='De la TV a tu cocina' rutaTitle='VER CATALOGO'/>
                    <DesplegableDesktopCard ruta='../Inspirate/1' img={plato} title='INSPÍRATE' subTitle='Las mejores recetas y consejos para deslumbrar en la cocina.' rutaTitle='VER MÁS'/>
                </div>
            </div>

        </div>
    )

}