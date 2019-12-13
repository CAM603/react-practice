import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";


const DogCard = props => {
    
    const { dog } = props

    return (
        <div style={{width: "45%", maxWidth: '400px', height: "25%",display: 'flex', justifyContent: 'center'}}>
        <Card>
            <CardImg style={{width: '300px'}}src={dog} />
                <CardBody>
                    <CardTitle>
                    Doggo here
                    </CardTitle>
            </CardBody>
        </Card>
        </div>
    )
}

export default DogCard;