import React, { useState } from 'react';
import DogCard from "./DogCard";

const Dogs = props => {

    const { dogs, changeBreed } = props;
    
    
    return (
        <div>
            <div>
                <button onClick={()=>changeBreed('pug')}>Change to Pug</button>
            </div>
            <div>
            {dogs.map((dog, index) => {
                return <DogCard key={index} dog={dog}/>
            })}
            </div>
        </div>
    )
}

export default Dogs;