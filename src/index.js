// react
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/App';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

