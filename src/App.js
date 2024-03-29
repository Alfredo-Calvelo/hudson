import styles from'./App.module.css';
import axios from 'axios'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { activarMenuDesplegable, alturaPantalla, cambiarMenuCatalogo, cambiarNavBar, cambiarOpciones, cerrarTodo, getActivo, getCardCatalogo, getData, getSocial } from './redux/actions';
import Catalogo from './Pages/Catalogo/Catalogo';
import MenuDesplegable from './components/NavBar/Menu desplegable/MenuDesplegable';
import Inspirate from './Pages/Inspirate/Inspirate';
import Contacto from './Pages/Contacto/Contacto';
import Receta from './Pages/Receta/Receta';
import Consejo from './Pages/Consejo/Consejo';
import Nosotros from './Pages/Nosotros/Nosotros';
import UsoYCuidados from './Pages/Uso y Cuidados/UsoYCuidados';
import { useCallback, useEffect, useRef, useState } from 'react';
import { typeBanner, typeCatalogo, typeCategorias, typeConsejo, typeDestacadas, typeProducto, typeReceta, typeTiendas } from './types';
import Construccion from './Pages/Construccion/Construccion';
import FaltaCompletar from './components/FaltaCompletar/FaltaCompletar';
import CargandoMail from './components/CargandoMail/CargandoMail';
import ContactarAlfredo from './Pages/Contactar Alfredo/ContactarAlfredo';
import Cargando from './components/Cargando/Cargando';



function App(props) {
  const [altura,setAltura]=useState()
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  function scroll(params) {
    setAltura(window.scrollY)
  }
  window.addEventListener('scroll',e=>scroll(e))
  const dispatch = useDispatch()
  let dropMenu= useSelector(state=>state.menuDesplegable)
  let opciones= useSelector(state=>state.opciones)
  const [activo, setActivo] = useState()
  const activoState = useSelector(state=>state.activo)
  
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
  useEffect( ()=>{
      dispatch(getActivo())
      dispatch(getData(typeBanner))
      dispatch(getData(typeCategorias))
      dispatch(getData(typeDestacadas))
      dispatch(getData(typeProducto))
      dispatch(getData(typeCatalogo))
      dispatch(getData(typeReceta))
      dispatch(getData(typeConsejo))
      dispatch(getData(typeTiendas))
      dispatch(getCardCatalogo())
      dispatch(getSocial())
  },[])

  useEffect(()=>{
    console.log(activoState);
    if (activoState!== undefined) {
      setActivo(activoState)
    }
  },[activoState])


// console.clear()
    return (

    <BrowserRouter>
            {activo=== undefined?<Cargando/>:
            !activo
            ?<ContactarAlfredo/>

            : <div className={styles.App}>
                {dropMenu || opciones?<div className={styles.tapaderaContainer} onClick={()=>apagarMenu()}><div className={styles.tapadera}></div></div>:null}
                <FaltaCompletar/>
                <CargandoMail/>
                <NavBar />
                <MenuDesplegable />
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
          }
    </BrowserRouter>
  );
}

export default App;