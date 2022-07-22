
import { createRef } from 'react';
import {FiSearch} from 'react-icons/fi'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { busqueda } from '../../redux/actions';
import styles from './SearchBar.module.css'



export default function SearchBar(props){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function buscar(textoABuscar) {
    dispatch(busqueda(textoABuscar))
    navigate('../Inspirate/1/')
  }

  const ref1 = createRef()
  const ref2 = createRef()
  return(
    <div className={props.activo?styles.SearchBar:styles.SearchBarActivo}>
      <div className={styles.mobile}>
        <FiSearch cursor='pointer' onClick={e=>buscar({value:ref1.current.value,key:'lupa'})}/>
        <input ref={ref1} onChange={e=>buscar(e.target.value)} className={styles.input}/>
      </div>
      <div className={styles.desktop}>
        <input ref={ref2} onChange={e=>buscar(e.target.value)} className={styles.inputDesktop}/>
        <FiSearch cursor='pointer' onClick={e=>buscar({value:ref2.current.value,key:'lupa'})}/>
      </div>
    </div>
  )

}