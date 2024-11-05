import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../redux/ProductSlice';
import { addToCart } from '../redux/CartSlice';
import './productList.css';

const ProductList = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
