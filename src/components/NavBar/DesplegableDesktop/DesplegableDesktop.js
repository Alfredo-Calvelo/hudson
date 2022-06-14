import styles from './DesplegableDesktop.module.css'
import DesplegableDesktopCard from './DesplegableDesktopCard/DesplegableDesktopCard'
import olla from '../../../imagenes/ollaMasterChef.png'
import plato from '../../../imagenes/plato.png'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    const [rutaMasterChef, setRutaMasterChef] =useState()
    useEffect(()=>{
        props.links?.map((elem, index)=>{
            if(elem?.title?.toLowerCase().includes('masterchef')){
                if (elem && elem.ruta) {
                }
            }
        })
    })
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
                                    <Link 
                                    key={index} 
                                    to={elem.ruta} 
                                    className={`${styles.link} ${styles.masterChef}`}
                                    >
                                        <img className={styles.masterChefImg} src={masterchef}/> 
                                        {elem.title}
                                    </Link>
                                )
                            }
                            if (elem.tipo && elem.tipo==='producto') {
                                return<a key={index} style={{textDecoration:'none'}} target='_blank' className={styles.link} href={elem.ruta.includes('https') || elem.ruta.includes('http')?elem.ruta:`https://${elem.ruta}` }>{elem.title}</a>
                            }else{
                                return <Link key={index} to={elem.ruta} className={styles.link}>{elem?.title}</Link>
                            }
                        })}
                    </div>
                </div>
                    {props.segundaColumna && props.segundaColumna.length>0?
                    <div className={styles.segundaColumna}>
                            {props.segundaColumna?.map((elem, index)=>{
                            if (elem?.title?.toLowerCase().includes('masterchef')) {
                                return(
                                    <Link 
                                    key={index} 
                                    to={elem.ruta} 
                                    className={`${styles.link} ${styles.masterChef}`}
                                    >
                                        <img className={styles.masterChefImg} src={masterchef}/> 
                                        {elem.title}
                                    </Link>
                                )
                            }
                            let ruta = `../Catalogo/${elem}`
                            return <Link key={index} to={ruta} className={styles.link}>{elem.toUpperCase()}</Link>
                        })}
                    </div>:null
                    }
                <div className={styles.cards}>
                    <DesplegableDesktopCard ruta={rutaMasterChef} img={olla} masterchef title='LÍNEA MASTERCHEF' subTitle='De la TV a tu cocina' rutaTitle='VER CATALOGO'/>
                    <DesplegableDesktopCard ruta='../Inspirate/1' img={plato} title='INSPÍRATE' subTitle='Las mejores recetas y consejos para deslumbrar en la cocina.' rutaTitle='VER MÁS'/>
                </div>
            </div>

        </div>
    )

}