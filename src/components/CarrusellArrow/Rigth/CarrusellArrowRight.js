import styles from './CarrusellArrowRight.module.css'
import {IoIosArrowForward} from 'react-icons/io'

export default function CarrusellArrowRight(props){return(<div style={{height:`${props}px`}} className={styles.container}><IoIosArrowForward className={styles.flecha}/></div>)}