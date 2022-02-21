import styles from './DesplegableDesktop.module.css'
import DesplegableDesktopCard from './DesplegableDesktopCard/DesplegableDesktopCard'
import olla from '../../../imagenes/ollaMasterChef.png'
import plato from '../../../imagenes/plato.png'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import masterchef from '../../../imagenes/iconos/masterChef.png'

export default function DesplegableDesktop (props){
    const referencia = useRef()
    const navigate = useNavigate()
    let altura= referencia.current?.clientHeight
    
    return(
        <div className={styles.desplegable} style={{height:`${props.activo?altura:0}px`}} >
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
                        {props.links.map((elem, index)=>{
                            if (elem.masterChef) {
                                return(
                                    <span 
                                    key={index} 
                                    onClick={()=>navigate(elem.ruta)} 
                                    className={`${styles.link} ${styles.masterChef}`}
                                    >
                                        <img className={styles.masterChefImg} src={masterchef}/> 
                                        {elem.title}
                                    </span>
                                )
                            }
                            return <span key={index} onClick={()=>navigate(elem.ruta)} className={styles.link}>{elem.title}</span>
                        })}
                    </div>
                 
                </div>
                <div className={styles.cards}>
                    <DesplegableDesktopCard ruta='../Catalogo/Master Chef' img={olla} masterchef title='LÍNEA MASTERCHEF' subTitle='De la TV a tu cocina' rutaTitle='VER CATALOGO'/>
                    <DesplegableDesktopCard ruta='../Inspirate/1' img={plato} title='INSPÍRATE' subTitle='Las mejores recetas y consejos para deslumbrar en la cocina.' rutaTitle='VER MÁS'/>
                </div>
            </div>

        </div>
    )

}