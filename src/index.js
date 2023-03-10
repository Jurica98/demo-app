import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configure } from "mobx";
import { Provider } from 'mobx-react'
import { ShoppingCart } from './stores/shopping-cart'

configure({
  enforceActions: "always"
});

const shoppingCart = new ShoppingCart();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={shoppingCart}>
      <App />
    </Provider>
  
);

reportWebVitals();
