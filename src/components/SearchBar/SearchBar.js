
import { createRef } from 'react';
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import styles from './SearchBar.module.css'



export default function SearchBar(props){
  const navigate = useNavigate()

  function buscar(prop) {
    console.log(prop);
    if (prop.key==='Enter') {
      navigate(`../Inspirate/1/${prop.target.value}`)
    }else if (prop.key === 'lupa') {
      navigate(`../Inspirate/1/${prop.value}`)
      
    }

  }

  const ref1 = createRef()
  const ref2 = createRef()
  return(
    <div className={props.activo?styles.SearchBar:styles.SearchBarActivo}>
      <div className={styles.mobile}>
        <FiSearch cursor='pointer' onClick={e=>buscar({value:ref1.current.value,key:'lupa'})}/>
        <input ref={ref1} onKeyPress={e=>buscar(e)} className={styles.input}/>
      </div>
      <div className={styles.desktop}>
        <input ref={ref2} onKeyPress={e=>buscar(e)} className={styles.inputDesktop}/>
        <FiSearch cursor='pointer' onClick={e=>buscar({value:ref2.current.value,key:'lupa'})}/>
      </div>
    </div>
  )

}