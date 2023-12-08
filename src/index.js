import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./index.css"
import BasketProvider from './Context/BasketProvider';
import WishlistProvider from './Context/WishlistProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>
);


