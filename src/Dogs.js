import React, { useState } from 'react';
import DogCard from "./DogCard";

const Dogs = props => {

    const { dogs, changeBreed } = props;

    const [breed, setBreed] = useState({
        breed : ''
    });
    const onSubmit = event => {
        event.preventDefault();
        changeBreed(breed.breed)
    }
    const handleChange = (event) => {
        setBreed({[event.target.name]: event.target.value})
    }
    console.log(breed);
    return (
        <div>
            <div>
                <form onSubmit={e => onSubmit(e)}>
                    <input type="text" name="breed" onChange={handleChange}></input>
                <button>Change Breed</button>
                </form>
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