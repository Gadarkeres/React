import React from 'react';
import './Card.css';

export default props => {

    const cardStyle = {
        borderColor:props.color,
        backgroundColor:props.color,
    }
    return (
        <div  className = 'Card' style={cardStyle}>
            <div className='Tittle'>{props.titulo}</div>
            <div className='Content'>{props.children}
            </div>
            
        </div>
    )

}