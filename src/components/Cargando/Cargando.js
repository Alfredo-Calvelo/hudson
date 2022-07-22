import {CircularProgress} from '@mui/material';
import styles from './Cargando.module.css'


export default function Cargando(params) {
    return(
        <div className={styles.container}>
            <CircularProgress size={100} className={styles.loader}/>
        </div>
    )
}