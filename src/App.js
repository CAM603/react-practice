import React, { useEffect, useState } from 'react';
import Dogs from "./Dogs";
import axios from "axios";

import './App.css';

function App() {
    const [currentBreed, setCurrentBreed] = useState('poodle');
    const [dogs, setDogs] = useState([]);
    

    useEffect(() => {
      axios
      .get(`https://dog.ceo/api/breed/${currentBreed}/images/random/20`)
      .then(response => {
        setDogs(response.data.message)
      })
      .catch(error => {
        console.log(error)
    });

  }, [currentBreed]);

  const changeBreed = (breed) => {
    setCurrentBreed(breed)
  };


  return (
    <div className="App">
      <Dogs changeBreed={changeBreed}
      dogs={dogs}
      />
    </div>
  );
}

export default App;
