import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { cambiarNavBar } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const hola =()=>{
    if (window.scrollY >=2) {
      dispatch(cambiarNavBar(false))
    }else{
      dispatch(cambiarNavBar(true))
    }
  }

  window.addEventListener('scroll',hola)
  return (
    <BrowserRouter>
          <div className="App"  >
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
