
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import styles from './SearchBar.module.css'



export default function SearchBar(props){
  const navigate = useNavigate()
  function buscar(prop) {
    if (prop.key==='Enter') {
      console.log(prop.target);
      navigate(`../Inspirate/1/${prop.target.value}`)
    }
  }


  return(
    <div className={props.activo?styles.SearchBar:styles.SearchBarActivo}>
      <div className={styles.mobile}>
        <FiSearch/>
        <input onKeyPress={e=>buscar(e)} className={styles.input}/>
      </div>
      <div className={styles.desktop}>
        <input onKeyPress={e=>buscar(e)} className={styles.inputDesktop}/>
        <FiSearch/>
      </div>
    </div>
  )

}