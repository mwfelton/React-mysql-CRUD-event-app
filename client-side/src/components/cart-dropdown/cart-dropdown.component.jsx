import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
      </div>
      <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropDown;
