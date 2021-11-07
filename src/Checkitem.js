import React from 'react';
import './Checkitem.css';
import { useStateValue } from './StateProvider';

function Checkitem({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkoutitem'>
            <img className="checkoutitem__image" src={image} />

            <div className="checkoutitem__info">
                <p className="checkoutitem__title">{title}</p>
                <p className="checkoutitem__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutitem__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default Checkitem;
