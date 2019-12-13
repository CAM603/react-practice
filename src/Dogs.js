import React, { useState } from 'react';
import { Button, FormGroup, Form, Label, Input } from 'reactstrap';
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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width : "500px"}}>
                <FormGroup>
                <Form onSubmit={e => onSubmit(e)}>
                    <Label>Enter your breed</Label>
                    <Input type="text" name="breed" onChange={handleChange}></Input>
                    <br></br>
                <Button color="success">Change Breed</Button>
                </Form>
                </FormGroup>
            </div>
            <div style={{width : '100%', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
            {dogs.map((dog, index) => {
                return <DogCard key={index} dog={dog}/>
            })}
            </div>
        </div>
    )
}

export default Dogs;