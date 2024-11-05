import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>E-Commerce Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
