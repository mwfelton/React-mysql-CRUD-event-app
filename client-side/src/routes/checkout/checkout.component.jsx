import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

// import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
        <h1>I am the checkout page</h1>
        {cartItems.map((cartItem) => {
            const { name, quantity } = cartItem
            return (
                <div>
                    <h2>{name}</h2>
                    <h2>{quantity}</h2>
                </div>
            )
        })}
    </div>
  );
};

export default Checkout

//CURRENTLY AT 122