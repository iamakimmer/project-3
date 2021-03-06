import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


const FlightCard = (props) => {
    return (
      <div>
        <Card>
          <CardHeader>Flight Name</CardHeader>
          <CardBody>
            <CardTitle>American Airlines</CardTitle>
            <CardText>Any specif details we can pull from the API</CardText>
            <Button>Save this flight</Button>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        </div>
    );
};

export default FlightCard;
