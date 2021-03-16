import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//icon
import '@fortawesome/fontawesome-free/css/all.min.css'
// le style
import './sass/app.sass'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);