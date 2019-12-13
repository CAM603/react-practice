import React, { useState } from 'react';
import DogCard from "./DogCard";

const Dogs = props => {

    const { dogs, changeBreed } = props;
    console.log(props)
    const [breed, setBreed] = useState('pug');

    const change = e => {
        changeBreed(breed);
    };

    return (
        <div>
            <div>
                <button onClick={change('pug')}>Change to Pug</button>
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