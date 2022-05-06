
import {FiSearch} from 'react-icons/fi'
import styles from './SearchBar.module.css'



export default function SearchBar(props){

  return(
    <div className={props.activo?styles.SearchBar:styles.SearchBarActivo}>
      <div className={styles.mobile}>
        <FiSearch/>
        <input  className={styles.input}/>
      </div>
      <div className={styles.desktop}>
        <input onKeyPress={e=>console.log(e.key)} className={styles.inputDesktop}/>
        <FiSearch/>
      </div>
    </div>
  )

}