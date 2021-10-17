import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './components/ProductList';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);
