import styles from'./App.module.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { activarMenuDesplegable, alturaPantalla, cambiarMenuCatalogo, cambiarNavBar, cambiarOpciones, cerrarTodo } from './redux/actions';
import Catalogo from './Pages/Catalogo/Catalogo';
import MenuDesplegable from './components/NavBar/Menu desplegable/MenuDesplegable';
import Inspirate from './Pages/Inspirate/Inspirate';
import Contacto from './Pages/Contacto/Contacto';
import Receta from './Pages/Receta/Receta';
import Consejo from './Pages/Consejo/Consejo';
import Nosotros from './Pages/Nosotros/Nosotros';
import UsoYCuidados from './Pages/Uso y Cuidados/UsoYCuidados';

function App() {
  const dispatch = useDispatch()
  let dropMenu= useSelector(state=>state.menuDesplegable)
  let opciones= useSelector(state=>state.opciones)
  const NavBarChange =(e)=>{
    dispatch(alturaPantalla(window.scrollY))
    if (window.scrollY >=25) {
      dispatch(cambiarNavBar(false))
    }else{
      dispatch(cambiarNavBar(true))
    }
  }
  function apagarMenu(){
    dispatch(cerrarTodo())
    
  }


  window.addEventListener('scroll',NavBarChange)
  return (
    <BrowserRouter>
          <div className={styles.App}>
            {dropMenu || opciones?<div className={styles.tapaderaContainer} onClick={()=>apagarMenu()}><div className={styles.tapadera}></div></div>:null}
            <NavBar/>
            <MenuDesplegable/>
            <Routes>
              <Route exact path='/'element={<Home/>}/>
              <Route exact path='/Catalogo/:catalog'element={<Catalogo/>}/>
              <Route exact path='/Inspirate/:page'element={<Inspirate/>}/>
              <Route exact path='/Contacto'element={<Contacto/>}/>
              <Route exact path='/Receta'element={<Receta/>}/>
              <Route exact path='/Consejo'element={<Consejo/>}/>
              <Route exact path='/Nosotros'element={<Nosotros/>}/>
              <Route exact path='/Uso_Y_Cuidados'element={<UsoYCuidados/>}/>
              <Route path='*' element={<div>404 | Not Found</div>}/>

            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;