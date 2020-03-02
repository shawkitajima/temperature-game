import React from 'react';

const TempCard = props => {
    return (
        <div>
            <h1>{props.choice.city}, {props.choice.state}</h1>
        </div>
    )
}

export default TempCard;