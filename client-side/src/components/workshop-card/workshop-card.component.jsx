import './workshop-card.styles.scss';

const WorkshopCard = ({ workshop }) => {
    const { name, price, imageUrl } = workshop;
    return (<div className='workshop-card-container'>
        <img src={imageUrl} alt="" />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>)
}

export default WorkshopCard;
