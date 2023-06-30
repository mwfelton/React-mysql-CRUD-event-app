import './workshop-card.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'; 

const WorkshopCard = ({ workshop }) => {
    console.log(workshop)
    const { country, price, location, practice, sessions, img } = workshop;
    const {addItemToCart} = useContext(CartContext)

    return (
        <div className='workshop-card-container'>
            <img src={img} alt="" />
            <div className='main'>
                <h2>{practice}</h2>
                <p>{country}</p>
                <p>{location}</p>
                <p>{price}</p>
                <p>{sessions}</p>
            </div>
            <div className='footer'>
                <button onClick={() => addItemToCart(workshop)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default WorkshopCard;
