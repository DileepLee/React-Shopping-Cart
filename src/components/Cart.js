import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeFromCart, increaseQuantity, decreaseQuantity, selectTotalCost } from '../redux/CartSlice';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalCost);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price} x {item.quantity}</p>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 className="total-cost">Total: ${totalCost}</h3>
    </div>
  );
};

export default Cart;
