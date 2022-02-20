import styles from './DesplegableDesktop.module.css'
import DesplegableDesktopCard from './DesplegableDesktopCard/DesplegableDesktopCard'
import olla from '../../../imagenes/ollaMasterChef.png'
import plato from '../../../imagenes/plato.png'


export default function DesplegableDesktop (props){
    
    return(
        <div style={{maxHeight:`${props.altura}px`}} className={styles.desplegable}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <span className={styles.title} onClick={()=>console.log('hola')}>
                        {props.title} 
                        {props.verMas
                        ?<span className={styles.verMas}>{props.verMas}</span>
                        :null
                    }
                    </span>
                    <span className={styles.link}>COCCIÓN Y HORNEADO</span>
                    <span className={styles.link}>CAFÉ, TÉ Y MATE</span>
                    <span className={styles.link}>UTENSILIOS</span>
                    <span className={styles.link}>VAJILLA</span>
                    <span className={styles.link}>ORGANIZADORES</span>
                    <span className={styles.link}>REPOSTERÍA</span>
                </div>
                <div className={styles.cards}>
                    <DesplegableDesktopCard img={olla} masterchef title='LÍNEA MASTERCHEF' subTitle='De la TV a tu cocina' rutaTitle='VER CATALOGO'/>
                    <DesplegableDesktopCard img={plato} title='INSPÍRATE' subTitle='Las mejores recetas y consejos para deslumbrar en la cocina.' rutaTitle='VER MÁS'/>
                </div>
            </div>

        </div>
    )

}