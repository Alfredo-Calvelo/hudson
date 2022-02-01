import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Home from './Pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
          <div className="App"  >
            <Routes>
              <Route exact path='/'element={<>
                <NavBar/>
                <Home/>
              </>
                } />


            </Routes>
          </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
