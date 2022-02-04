import styles from'./App.module.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { activarMenuDesplegable, cambiarMenuCatalogo, cambiarNavBar, cambiarOpciones, cerrarTodo } from './redux/actions';
import Catalogo from './Pages/Catalogo/Catalogo';
function App() {
  const dispatch = useDispatch()
  let dropMenu= useSelector(state=>state.menuDesplegable)
  let opciones= useSelector(state=>state.opciones)
  const NavBarChange =()=>{
    console.log(window.scrollY);
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
            <NavBar/>
            {dropMenu || opciones?<div className={styles.tapaderaContainer} onClick={()=>apagarMenu()}><div className={styles.tapadera}></div></div>:null}
            <Routes>
              <Route exact path='/'element={<Home/>}/>
              <Route exact path='/Catalogo/:catalog'element={<Catalogo/>}/>
              <Route path='*' element={<div>404 | Not Found</div>}/>

            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
