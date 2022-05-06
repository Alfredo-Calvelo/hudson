import styles from'./App.module.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { activarMenuDesplegable, alturaPantalla, cambiarMenuCatalogo, cambiarNavBar, cambiarOpciones, cerrarTodo, getData, getSocial } from './redux/actions';
import Catalogo from './Pages/Catalogo/Catalogo';
import MenuDesplegable from './components/NavBar/Menu desplegable/MenuDesplegable';
import Inspirate from './Pages/Inspirate/Inspirate';
import Contacto from './Pages/Contacto/Contacto';
import Receta from './Pages/Receta/Receta';
import Consejo from './Pages/Consejo/Consejo';
import Nosotros from './Pages/Nosotros/Nosotros';
import UsoYCuidados from './Pages/Uso y Cuidados/UsoYCuidados';
import { useCallback, useEffect, useRef, useState } from 'react';
import { typeBanner, typeCatalogo, typeCategorias, typeConsejo, typeDestacadas, typeProducto, typeReceta } from './types';
import Construccion from './Pages/Construccion/Construccion';



function App(props) {
  const [altura,setAltura]=useState()
  function scroll(params) {
    setAltura(window.scrollY)
  }
  window.addEventListener('scroll',e=>scroll(e))
  const dispatch = useDispatch()
  let dropMenu= useSelector(state=>state.menuDesplegable)
  let opciones= useSelector(state=>state.opciones)
  
  useEffect(()=>{

    dispatch(alturaPantalla(window.scrollY))
    if (window.scrollY >=25) {
      dispatch(cambiarNavBar(false))
    }else{
      dispatch(cambiarNavBar(true))
    }
  },[altura])
  
  function apagarMenu(){
    dispatch(cerrarTodo())
  }
  useEffect(()=>{
    dispatch(getData(typeBanner))
    dispatch(getData(typeCategorias))
    dispatch(getData(typeDestacadas))
    dispatch(getData(typeProducto))
    dispatch(getData(typeCatalogo))
    dispatch(getData(typeReceta))
    dispatch(getData(typeConsejo))
    dispatch(getSocial())

  },[])
  return (

    <BrowserRouter>
          <div className={styles.App}>
            {dropMenu || opciones?<div className={styles.tapaderaContainer} onClick={()=>apagarMenu()}><div className={styles.tapadera}></div></div>:null}
            <NavBar/>
            <MenuDesplegable/>
            <Routes>
              <Route exact path='/'element={<Home/>}/>
              <Route exact path='/construccion'element={<Construccion/>}/>
              <Route exact path='/Catalogo/:catalog'element={<Catalogo/>}/>
              <Route exact path='/Inspirate/:page'element={<Inspirate/>}/>
              <Route exact path='/Inspirate/:page/:buscador'element={<Inspirate/>}/>
              <Route exact path='/Contacto'element={<Contacto/>}/>
              <Route exact path='/Receta/:selected'element={<Receta/>}/>
              <Route exact path='/Consejo/:selected'element={<Consejo/>}/>
              <Route exact path='/Nosotros'element={<Nosotros/>}/>
              <Route exact path='/Uso_Y_Cuidados/:seleccionado'element={<UsoYCuidados/>}/>
              <Route exact path='/Uso_Y_Cuidados'element={<UsoYCuidados/>}/>
              <Route path='*' element={<Construccion/>}/>

            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;