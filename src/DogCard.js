import React from "react";


const DogCard = props => {
    
    const { dog } = props

    return (
        <div>
            <img src={dog} />
        </div>
    )
}

export default DogCard;