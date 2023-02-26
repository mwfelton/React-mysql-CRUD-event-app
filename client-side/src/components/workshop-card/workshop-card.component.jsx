import './workshop-card.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'; 

const WorkshopCard = ({ workshop }) => {
    const { name, price, imageUrl } = workshop;
    const {addItemToCart} = useContext(CartContext)

    return (
        <div className='workshop-card-container'>
            <img src={imageUrl} alt="" />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                <button onClick={() => addItemToCart(workshop)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default WorkshopCard;
