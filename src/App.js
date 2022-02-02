import styles from'./App.module.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { activarMenuDesplegable, cambiarNavBar } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  let dropMenu= useSelector(state=>state.menuDesplegable)
  const hola =()=>{
    if (window.scrollY >=25) {
      dispatch(cambiarNavBar(false))
    }else{
      dispatch(cambiarNavBar(true))
    }
  }
  function apagarMenu(){
    dispatch(activarMenuDesplegable(false))
  }

  window.addEventListener('scroll',hola)
  return (
    <BrowserRouter>
          <div className={styles.App}>
            {dropMenu?
          <div className={styles.tapaderaContainer} onClick={()=>apagarMenu()}>
            <div className={styles.tapadera}>
            </div>
          </div>:null
            }
            <Routes>
              <Route exact path='/'element={<>
                <NavBar/>
                <Home/>
              </>
                } />


            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
