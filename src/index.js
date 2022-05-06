import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import CambiarNavBar from './CambiarNavBar';

let scroll  =0 

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App scroll={scroll}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
